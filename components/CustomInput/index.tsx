"use client";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import clsx from "clsx";
import Input, { InputProps } from "../Input";
import { Control } from "react-hook-form";

interface CustomInputProps extends InputProps {
  control: Control<any>;
  className?: string;
  name: string;
  required?: boolean;
  id?: string;
}

const CustomInput = ({
  control,
  name,
  label,
  required,
  id,
  className,
  type = "text",
  error,
  ...props
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name as string}
      render={({ field }) => {
        return (
          <FormItem
            className={clsx("space-y-0", { "flex flex-col gap-1": !!label })}
          >
            <FormControl className="">
              <div className="relative">
                <Input
                  className={`${className}`}
                  label={label}
                  id={id}
                  type={type}
                  value={field.value ?? ""}
                  error={error}
                  onChange={(e: any) => {
                    field.onChange(e.target.value);
                    props.onChange?.(e.target.value);
                  }}
                  onBlur={field.onBlur}
                  {...props}
                />
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

export default CustomInput;
