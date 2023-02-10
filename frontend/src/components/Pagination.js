import React from "react";

export default function Pagination({
  totalPost,
  Tpage,
  setTpage,
  prevPage,
  setprevPage,
}) {
  const handlePagination = (index) => {
    setTpage((index + 1) * 4);
    setprevPage((index + 1) * 4 - 4);
  };
  return (
    <div id="pagination" className="mb-8 mx-auto">
      <div className="flex w-full justify-center gap-2">
        {Array(Math.ceil(totalPost / Tpage))
          .fill(null)
          .map((page, index) => {
            return (
              <button
                key={page}
                className={`w-12 h-12 text-lg text-gray-200 hover:text-gray-200 text-center font-bold flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-500  cursor-pointer ${
                  prevPage === 0 && index === prevPage
                    ? "bg-green-300"
                    : index === prevPage / Tpage && "bg-green-300"
                }`}
                onClick={() => handlePagination(index)}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
}
