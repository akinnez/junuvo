
import {signal, computed, resource, debounceSignal, asReadonly} from 'nabd'

// 1. Raw Inputs
const _bvn = signal("");

// 2. Debounced BVN (Replaces RxJS debounceTime)
const debouncedBvn = debounceSignal(_bvn, 500);

// 3. Async BVN Check (Replaces RxJS switchMap)
export const bvnValidation = resource(
  {
    fetch: async () => {
  const value = debouncedBvn.get();
  if (value.length !== 11) return null;

  console.log(`[Nabd] Running async check for BVN: ${value}`);
  // Simulate API Call
  await new Promise(res => setTimeout(res, 300)); 
  return {
    isAvailable: value !== "12345678901", // Simulate taken BVN
  };
}
  });

// 4. Helpers for the UI
export const setBvn = (val: string) => _bvn.set(val);
export const bvnValue = asReadonly(_bvn);

export const isBvnValidating = computed(() => {
  // If the raw value is different from the debounced value, the user is still typing
  return _bvn.get() !== debouncedBvn.get() || bvnValidation.loading.get();
});