"use client";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import clsx from "clsx";
import { CustomSelect, CustomSelectProps } from "../Select";
import { Control } from "react-hook-form";

interface FormSelectProps extends Omit<
  CustomSelectProps,
  "onChange" | "value"
> {
  control: Control<any>;
  name: string;
  error?: string;
}

const FormSelect = ({
  control,
  name,
  label,
  error,
  ...props
}: FormSelectProps) => {
  return (
    <FormField
      control={control}
      name={name as string}
      render={({ field, fieldState }) => {
        return (
          <FormItem
            className={clsx("space-y-0", { "flex flex-col gap-1": !!label })}
          >
            <FormControl className="">
              <CustomSelect
                name={name}
                label={label as string}
                value={field.value}
                onChange={field.onChange}
                className={fieldState.error ? "border-red-500" : ""}
                {...props}
              />
            </FormControl>
            {error && (
              <div style={{ color: "red", fontSize: 12, marginTop: 4 }}>
                {error}
              </div>
            )}
          </FormItem>
        );
      }}
    />
  );
};

export default FormSelect;
