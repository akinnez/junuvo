function CustomRadio({ checked }: { checked: boolean }) {
  return (
    <div
      className={`h-5 w-5 rounded-full border flex items-center justify-center
          ${checked ? "border-button" : "border-gray-300"}
        `}
    >
      {checked && <div className="h-2.5 w-2.5 rounded-full bg-button" />}
    </div>
  );
}
export default CustomRadio;
