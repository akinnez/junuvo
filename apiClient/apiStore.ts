import { action, signal, Signal, withReversion } from "nabd";

interface AtomicConfig<TInput, TResult, TState> {
  mutation: (data: TInput) => Promise<TResult>;
  optimistic?: (data: TInput, current: TState) => TState;
  onSuccess?: (result: TResult, current: TState) => TState;
}

export default function apiStore<TInput, TResult, TState>(
  config: AtomicConfig<TInput, TResult, TState>,
  targetSignal?: Signal<TState>
) {
  const isPending = signal(false);
  const error = signal<Error | null>(null);

  const execute = action(async (data: TInput): Promise<TResult> => {
    isPending.set(true);
    error.set(null);

    try {
      if (!targetSignal) {
        return await config.mutation(data);
      }
      return await withReversion(
        [targetSignal], ()=> mutate(targetSignal, data, config)
       );
    } catch (e: any) {
      const message = e?.response?.data?.message || e?.message || "Something went wrong. Please try again.";
      const {
        response: { data },
      } = e;
      error.set(message);
      isPending.set(false);
      throw data || e;
    } finally {
      isPending.set(false);
    }
  });

  return { execute, isPending, error };
}

  const mutate = async<TInput, TResult, TState>(
  targetSignal: Signal<TState>,
  data: TInput, 
  config: AtomicConfig<TInput, TResult, TState>
): Promise<TResult> => {
    const { mutation, optimistic, onSuccess } = config;
 
        // Optimistic update
        if (optimistic) {
          targetSignal.update(current =>
            optimistic!(data, current)
          );
        }

        // Network request
        const result = await mutation(data);

        // Sync server response
        if (onSuccess) {
          targetSignal.update(current =>
            onSuccess!(result, current)
          );
        }

        return result;
  }