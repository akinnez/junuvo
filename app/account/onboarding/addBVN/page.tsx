"use client";
// import { Input } from "@/components";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  of,
} from "rxjs";

// --- RxJS Utility Hook (Bridging RHF and RxJS) ---

/**
 * Creates an RxJS stream (BehaviorSubject) from the RHF 'watch' output
 * and provides a mechanism to subscribe to debounced/transformed values.
 */
const useRxFormWatcher = (control: any) => {
  const formState$ = useMemo(
    () => new BehaviorSubject(control._formValues),
    [control]
  );
  const [debouncedValue, setDebouncedValue] = useState(control._formValues);
  const [isTyping, setIsTyping] = useState(false);

  // 1. Subscribe RHF changes to the RxJS subject
  useEffect(() => {
    const subscription = control._names.watch.get?.subscribe({
      next: () => {
        const values = control.getValues();
        formState$.next(values);
        setIsTyping(true); // Flag start of typing
      },
    });
    return () => subscription?.unsubscribe();
  }, [control, formState$]);

  // 2. Subscribe to the RxJS subject for debounced/side-effect logic
  useEffect(() => {
    // This stream listens to all form changes, debounces them, and updates state
    const debounceSubscription = formState$
      .pipe(
        // Wait 500ms after the last key stroke
        debounceTime(500),
        // Only proceed if the form values have actually changed (deep check is too complex, we use identity check on the last emitted value)
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        ),
        // Simulate an async operation (like checking BVN validity/availability via API)
        switchMap((values) => {
          // You would replace this with an actual API call (e.g., fetch('/api/check-bvn', { body: JSON.stringify(values.bvn) }))
          console.log(`[RxJS] Running async check for BVN: ${values.bvn}`);
          return of({
            bvnCheckStatus:
              values.bvn && values.bvn.length === 11
                ? "Validating..."
                : "Ready",
            isBvnAvailable: values.bvn === "12345678901" ? false : true, // Simulate a taken BVN
          }).pipe(debounceTime(100)); // Simulate network latency
        })
      )
      .subscribe((result) => {
        setDebouncedValue(result);
        setIsTyping(false); // Flag end of typing/processing
        console.log("[RxJS] Debounced processing finished.");
      });

    return () => debounceSubscription.unsubscribe();
  }, [formState$]);

  return { formState$, debouncedValue, isTyping };
};

// --- Main Application Component ---

const AddBvn = () => {
  const router = useRouter();
  const name = "Gabriel"; // Name should be dynamic

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    watch,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bvn: "",
      dob: "",
      phone: "",
    },
  });

  // Attach RxJS watcher to the form control
  const { debouncedValue, isTyping } = useRxFormWatcher(control);
  const bvnCheckResult = debouncedValue?.isBvnAvailable;

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    router.push("/account/onboarding/verify-phone");
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        alert("KYC Data Submitted successfully!");
        resolve(data);
      }, 1500);
    });
  };

  const currentBvn = watch("bvn");
  const phone = watch("phone");

  // Inline SVG Icons
  const ArrowLeft = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );

  const CalendarIcon = (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  return (
    <div>
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => console.log("Go back action")}
          className="flex items-center text-gray-500 hover:text-indigo-600 transition duration-150"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
        </button>
      </div>

      {/* Header Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Hi {name},</h2>
        <p className="text-gray-600 mt-1 text-sm">
          Let&#39;s get your KYC done by providing your Bank Verification Number
          (BVN) and Phone number
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* BVN Field */}
        <div>
          <label
            htmlFor="bvn"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Bank Verification Number (BVN)
          </label>
          <Controller
            name="bvn"
            control={control}
            rules={{
              required: "BVN is required",
              minLength: { value: 11, message: "BVN must be 11 digits" },
              maxLength: { value: 11, message: "BVN must be 11 digits" },
              pattern: {
                value: /^[0-9]+$/,
                message: "BVN must contain only numbers",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="bvn"
                type="text"
                placeholder="Enter your BVN"
                className={`w-full p-3 border rounded-lg text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150
                    ${errors.bvn ? "border-red-500" : "border-gray-300"}`}
                maxLength={11}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                  field.onChange(value);
                }}
              />
            )}
          />
          {/* Real-time BVN Feedback (RxJS Debounced) */}
          {currentBvn && currentBvn.length === 11 && (
            <div
              className={`mt-1 text-sm ${
                bvnCheckResult === false ? "text-red-600" : "text-green-600"
              }`}
            >
              {isTyping ? (
                <span className="animate-pulse">
                  Checking BVN availability...
                </span>
              ) : bvnCheckResult === false ? (
                "BVN is already associated with another account."
              ) : (
                "BVN is ready to be used."
              )}
            </div>
          )}
          {errors.bvn && (
            <p className="mt-1 text-sm text-red-600">{errors.bvn.message}</p>
          )}
        </div>

        <div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone Number is required",
                // pattern: {
                //   // Simple pattern for DD/MM/YY format (not fully validated date)
                //   value: /^\d{4}\/\d{2}\/\d{2}$/,
                //   message: "Format must be DD/MM/YY",
                // },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  className={`w-full p-3 border rounded-lg text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150
                      ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  maxLength={11}
                />
              )}
            />
          </div>
          <div className="flex items-center text-xs gap-1 mt-1">
            <p className=" text-red-500">**</p>
            <p className="text-gray-400">
              This must be the phone number attached to your BVN
            </p>
          </div>
          {errors.dob && (
            <p className="mt-1 text-sm text-red-600">
              {errors?.phone?.message}
            </p>
          )}
        </div>

        {/* Date of Birth Field */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Date of Birth
          </label>
          <div className="relative">
            <Controller
              name="dob"
              control={control}
              rules={{
                required: "Date of Birth is required",
                pattern: {
                  // Simple pattern for DD/MM/YY format (not fully validated date)
                  value: /^\d{2}\/\d{2}\/\d{2}$/,
                  message: "Format must be DD/MM/YY",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="dob"
                  type="text"
                  placeholder="DD/MM/YY"
                  className={`w-full p-3 border rounded-lg text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150
                      ${errors.dob ? "border-red-500" : "border-gray-300"}`}
                  maxLength={8}
                  onChange={(e) => {
                    // Auto-format DD/MM/YY
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 2)
                      value = value.slice(0, 2) + "/" + value.slice(2);
                    if (value.length > 5)
                      value = value.slice(0, 5) + "/" + value.slice(5);
                    field.onChange(value.slice(0, 8));
                  }}
                />
              )}
            />

            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex items-center text-xs gap-1 mt-1">
            <p className=" text-red-500">**</p>
            <p className="text-gray-400">
              Your date of birth as used on your bvn
            </p>
          </div>
          {errors.dob && (
            <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full transition duration-200"
          disabled={
            !isValid || isSubmitting || isTyping || bvnCheckResult === false
          }
        >
          {isSubmitting ? "Submitting..." : "Continue"}
        </Button>
      </form>
    </div>
  );
};

export default AddBvn;
