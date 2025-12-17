import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type IPagination = {
  totalPages: number;
};

function Pagination({ totalPages }: IPagination) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex items-center space-x-5">
        <div
          className="h-10 w-10 text-gray-700 bg-none border border-gray-300 flex justify-center items-center rounded-lg cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4 text-gray-700" />
        </div>

        {/* Page number buttons */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          console.log(pageNumber == currentPage);

          return (
            <div
              key={pageNumber}
              className={`h-10 w-10 text-gray-700 bg-none border border-gray-300 flex justify-center items-center rounded-lg cursor-pointer  ${
                pageNumber === currentPage
                  ? "border-2 !border-button !bg-white !text-primary"
                  : "!text-gray-500"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          );
        })}

        <div
          className="h-10 w-10 text-gray-700 bg-none border border-gray-300 flex justify-center items-center rounded-lg cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
export default Pagination;
