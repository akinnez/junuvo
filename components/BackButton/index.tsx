import { ArrowLeft } from "lucide-react";

function BackButton({
  needText = true,
  className,
}: {
  needText?: boolean;
  className?: string;
}) {
  return (
    <div className="flex gap-5 items-center">
      <div
        className={`bg-white p-1.5 rounded-md shadow cursor-pointer ${className}`}
        onClick={() => history.back()}
      >
        <ArrowLeft className="h-4 w-6" />
      </div>
      {needText && (
        <span className="text-sm font-medium text-gray-500">Go Back</span>
      )}
    </div>
  );
}

export default BackButton;
