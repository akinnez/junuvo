import { BehaviorSubject, Observable, Subscription } from 'rxjs';
/**
 * Improved Signal, Effect, Computed, LinkedSignal, SignalForm, and ResourceApi
 * All subscriptions are managed internally and cleaned up automatically.
 */


/**
 * Minimal writable signal implementation.
 */
type SignalSubscriber<T> = (value: T) => void;

class SimpleSignal<T> {
    private _value: T;
    private subscribers = new Set<SignalSubscriber<T>>();

    constructor(initial: T) {
        this._value = initial;
    }

    get(): T {
        return this._value;
    }

    set(value: T) {
        if (this._value !== value) {
            this._value = value;
            this.subscribers.forEach(fn => fn(this._value));
        }
    }

    subscribe(fn: SignalSubscriber<T>): () => void {
        this.subscribers.add(fn);
        fn(this._value);
        return () => this.subscribers.delete(fn);
    }
}

/**
 * Creates a writable signal.
 */
function signal<T>(initial: T): SimpleSignal<T> {
    return new SimpleSignal(initial);
}

/**
 * RxJS-based Signal with automatic subscription management.
 */
class Signal<T> {
    private subject: BehaviorSubject<T>;
    private subscriptions = new Set<Subscription>();

    constructor(initial: T) {
        this.subject = new BehaviorSubject<T>(initial);
    }

    get value(): T {
        return this.subject.getValue();
    }

    set(value: T) {
        this.subject.next(value);
    }

    subscribe(fn: (v: T) => void): Subscription {
        const sub = this.subject.subscribe(fn);
        this.subscriptions.add(sub);
        const origUnsub = sub.unsubscribe.bind(sub);
        sub.unsubscribe = () => {
            origUnsub();
            this.subscriptions.delete(sub);
        };
        return sub;
    }

    asObservable(): Observable<T> {
        return this.subject.asObservable();
    }

    dispose() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.subscriptions.clear();
        this.subject.complete();
    }
}

/**
 * Effect with automatic cleanup.
 */
type EffectCleanup = () => void;
type EffectFn = () => void | EffectCleanup;

class Effect {
    private cleanup?: EffectCleanup;
    private fn: EffectFn;

    constructor(fn: EffectFn) {
        this.fn = fn;
        this.run();
    }

    run() {
        this.cleanup?.();
        const result = this.fn();
        if (typeof result === 'function') {
            this.cleanup = result;
        }
    }

    dispose() {
        this.cleanup?.();
    }
}

function effect(fn: EffectFn): Effect {
    return new Effect(fn);
}

/**
 * Computed signal with automatic dependency management.
 */
function computed<T>(computeFn: () => T, deps?: Signal<any>[]): Signal<T> {
    const s = new Signal<T>(computeFn());
    const sub = new Subscription();
    deps && deps.forEach(dep => {
        sub.add(dep.subscribe(() => s.set(computeFn())));
    });
    // Automatically unsubscribe when computed signal is disposed
    (s as any)._computedSub = sub;
    const origDispose = s.dispose.bind(s);
    s.dispose = () => {
        sub.unsubscribe();
        origDispose();
    };
    return s;
}

/**
 * Linked signal with automatic subscription cleanup.
 */
function linkedSignal<T>(source: Signal<T>, transform: (v: T) => T): Signal<T> {
    const s = new Signal<T>(transform(source.value));
    const sub = source.subscribe(v => s.set(transform(v)));
    (s as any)._linkedSub = sub;
    const origDispose = s.dispose.bind(s);
    s.dispose = () => {
        sub.unsubscribe();
        origDispose();
    };
    return s;
}



/**
 * Resource API with automatic state management.
 */
type ResourceState<T> =
    | { status: 'pending' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: any };

function resourceApi<T>(fetcher: () => Promise<T>) {
    const state = new Signal<ResourceState<T>>({ status: 'pending' });

    let cancelled = false;
    fetcher()
        .then(data => {
            if (!cancelled) state.set({ status: 'success', data });
        })
        .catch(error => {
            if (!cancelled) state.set({ status: 'error', error });
        });

    // Add a dispose method to cancel future updates
    // (state as any).dispose = () => {
    //     // cancelled = true;
    //     state.dispose();
    // };

    return state;
}

/**
 * Interop: Convert Signal<T> to RxJS Observable<T>
 */
function signalToObservable<T>(sig: Signal<T>): Observable<T> {
    return sig.asObservable();
}

/**
 * Interop: Convert RxJS Observable<T> to Signal<T>
 * The signal will update with the latest value from the observable.
 * All subscriptions are managed and cleaned up on dispose.
 */
function observableToSignal<T>(obs: Observable<T>, initial?: T): Signal<T | undefined> {
    const sig = new Signal<T | undefined>(initial);
    const sub = obs.subscribe(value => sig.set(value));
    (sig as any)._obsSub = sub;
    const origDispose = sig.dispose.bind(sig);
    sig.dispose = () => {
        sub.unsubscribe();
        origDispose();
    };
    return sig;
}

// // USAGE EXAMPLES

// // 1. SimpleSignal
// const count = signal(0);
// // console.log('Initial SimpleSignal:', count.get());
// const unsub = count.subscribe(v => console.log('SimpleSignal:', v));
// count.set(1);
// unsub();

// // 2. Signal (RxJS-based)
// const rxCount = new Signal(0);
// const rxSub = rxCount.subscribe(v => console.log('Signal:', v));
// rxCount.set(2);
// rxCount.dispose(); // cleans up all subscriptions

// // 3. Effect
// const eff = effect(() => {
//     console.log('Effect runs');
//     return () => console.log('Effect cleanup');
// });
// eff.dispose();

// // 4. Computed
// const a = new Signal(1);
// const b = new Signal(2);
// const sum = computed(() => a.value + b.value, [a, b]);
// const sumSub = sum.subscribe(v => console.log('Sum:', v));
// a.set(3);
// sum.dispose();

// // 5. LinkedSignal
// const doubled = linkedSignal(a, v => v * 2);
// const doubleSub = doubled.subscribe(v => console.log('Doubled:', v));
// a.set(4);
// doubled.dispose();

// // 6. SignalForm
// const form = new SignalForm({ name: '', age: 0 });
// form.fields.name.set('Alice');
// form.fields.age.set(30);
// console.log('Form value:', form.value);
// form.dispose();

// // 7. resourceApi
// const resource = resourceApi(() => Promise.resolve('data'));
// const resourceSub = resource.subscribe(state => console.log('Resource:', state));
// (resource as any).dispose();

// // 8. observableToSignal / signalToObservable
// const obs = interval(1000);
// const sigFromObs = observableToSignal(obs, 0);
// const sigSub = sigFromObs.subscribe(v => console.log('Obs->Signal:', v));
// setTimeout(() => sigFromObs.dispose(), 3500);



export {
    SimpleSignal,
    signal,
    Signal,
    Effect,
    effect,
    computed,
    linkedSignal,
    resourceApi,
    signalToObservable,
    observableToSignal,
};