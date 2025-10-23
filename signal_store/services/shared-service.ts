"use client";
import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

const messageSource = new BehaviorSubject<number>(1);
const message$ = messageSource.asObservable();
// export const currentStep = observableToSignal(message$);

export function useCurrentStepValue() {
  const [value, setValue] = useState(messageSource.value);

  useEffect(() => {
    // Subscribe to the observable
    const subscription = messageSource.subscribe((newValue) => {
      setValue(newValue);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return value;
}

export function changeCurrentStep(message: number) {
  messageSource.next(message);
}
