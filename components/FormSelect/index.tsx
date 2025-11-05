import { FormControl, FormField, FormItem } from "@/components/ui/form";
import clsx from "clsx";
import { CustomSelect, CustomSelectProps } from "../Select";

interface FormSelectProps extends CustomSelectProps {
  form: any;
  error?: any;
}

const FormSelect = ({
  form,
  name,
  label,
  error,
  ...props
}: FormSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={name as string}
      render={({ field }) => {
        return (
          <FormItem
            className={clsx("space-y-0", { "flex flex-col gap-1": !!label })}
          >
            <FormControl className="">
              <CustomSelect label={label} {...field} {...props} />
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
