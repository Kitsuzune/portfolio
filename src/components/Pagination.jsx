import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`px-4 py-2 mx-1 rounded ${
                    i === currentPage
                        ? 'bg-red-500 text-white'
                        : 'bg-black text-red-500 hover:bg-red-500 hover:text-white'
                }`}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="flex justify-center my-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 rounded bg-black text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
                Previous
            </button>
            {paginationItems}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 rounded bg-black text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
