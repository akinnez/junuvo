import { FormControl, FormField, FormItem } from "../ui/form";

// --- 2. REUSABLE CUSTOM TOGGLE COMPONENT (Controlled by react-hook-form) ---
interface ToggleSwitchProps {
  field: {
    value: boolean;
    onChange: (value: boolean) => void;
    name: string;
  };
  label?: string;
  description?: string;
  toggleStyle?: string;
  labelStyle?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  field,
  label,
  description,
  labelStyle,
  toggleStyle,
}) => {
  const { value, onChange, name } = field;

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className={`text-xs font-medium  text-gray-500 cursor-pointer ${labelStyle}`}
        >
          {label}
        </label>
      )}
      <div className="py-4">
        <div className="flex justify-between items-center !w-full">
          {description && (
            <p className="text-sm text-gray-800">{description}</p>
          )}
          <button
            id={name}
            type="button"
            role="switch"
            aria-checked={value}
            onClick={() => onChange(!value)}
            className={`${
              value ? "bg-success" : "bg-gray-300"
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${toggleStyle}`}
          >
            <span className="sr-only">Toggle {label}</span>
            <span
              aria-hidden="true"
              className={`${
                value ? "translate-x-5" : "translate-x-0"
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export const SwitchForm = ({
  form,
  name,
  label,
  description,
  labelStyle,
  toggleStyle,
}: {
  form: any;
  name: string;
  label?: string;
  description?: string;
  toggleStyle?: string;
  labelStyle?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name as string}
      render={({ field }) => {
        return (
          <FormItem>
            <FormControl className="">
              <ToggleSwitch
                label={label}
                description={description}
                labelStyle={labelStyle}
                toggleStyle={toggleStyle}
                field={field}
                {...field}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
