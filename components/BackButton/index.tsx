import { ArrowLeft } from "lucide-react";

function BackButton() {
  function handleClickBack() {}
  return (
    <div className="flex gap-5 items-center">
      <div
        className="bg-white p-1.5 rounded-md shadow cursor-pointer"
        onClick={handleClickBack}
      >
        <ArrowLeft className="h-4 w-6" />
      </div>
      <span className="text-sm font-medium text-gray-500">Go Back</span>
    </div>
  );
}

export default BackButton;
