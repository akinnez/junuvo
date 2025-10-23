"use client";
import { Form } from "@/components/ui/form";
import { ReactNode, FormHTMLAttributes } from "react";
import { UseFormReturn, SubmitHandler } from "react-hook-form";

interface CustomFormProps extends FormHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  successFunction: SubmitHandler<any> | (() => void);
  children: ReactNode;
}

const CustomForm = ({
  form,
  successFunction,
  children,
  ...props
}: CustomFormProps) => {
  return (
    <div className="my-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(successFunction)}
          className="space-y-5"
          {...props}
        >
          {children}
        </form>
      </Form>
    </div>
  );
};

export default CustomForm;
