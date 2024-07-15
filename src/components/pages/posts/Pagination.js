import Button from '@/components/ui/Button/Button';
import Container from '@/components/ui/Container/Container';
import React from 'react';

export default function Pagination({ totalPosts, setPage, page }) {
  const postsPerPage = 6;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (page <= 3) {
      pageNumbers.push(1, 2, 3, 4, '...', totalPages - 1, totalPages);
    } else if (page > 3 && page < totalPages - 2) {
      pageNumbers.push(1, '...', page - 1, page, page + 1, '...', totalPages);
    } else {
      pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }
  }

  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center mt-4 pt-8 gap-4">
      <Button variant="primary" className={"text-xs sm:text-sm md:text-md lg:text-base xl:text-base rounded-none shadow-md w-full sm:w-full md:w-auto lg:w-auto xl:w-auto"} disabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>
      <div className="flex space-x-2">
        {pageNumbers.map((number, index) => (
          <React.Fragment key={index}>
            {number === '...' ? (
              <span className="flex items-center justify-center px-2">...</span>
            ) : (
              <Button
                className={`text-xs sm:text-sm md:text-md lg:text-base xl:text-base rounded-none shadow-md ${number === page ? 'bg-blue-500 text-white border-2 border-blue-500' : 'bg-transparent text-[#242424] border-2 '}`}
                onClick={() => setPage(number)}
              >
                {number}
              </Button>
            )}
          </React.Fragment>
        ))}
      </div>
      <Button variant="primary" className={"text-xs sm:text-sm md:text-md lg:text-base xl:text-base rounded-none shadow-md w-full sm:w-full md:w-auto lg:w-auto xl:w-auto"} disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </div>
  );
}