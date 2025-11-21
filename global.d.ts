type Option = {
  value: string;
  // Allows for rich content like icons, styled text, or external image elements
  label: React.ReactNode;
  disabled?: boolean;
  // Optional property for icon or graphic associated with the option
  icon?: string;
};