import React from 'react';

const Filter = ({ sortOption, setSortOption, sortOrder, setSortOrder }) => {
    return (
        <div className="bg-black text-white p-4 rounded-lg">
            <h2 className="text-red-500 text-[20px] mb-4">Filter</h2>
            <div className="mb-4">
                <label className="block text-white mb-2">Sort By</label>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="w-full p-2 rounded bg-[#202020] text-white"
                >
                    <option value="lastUpdate">Last Update</option>
                    <option value="mostOrdered">Most Ordered</option>
                    <option value="bestReview">Best Review</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Order</label>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full p-2 rounded bg-[#202020] text-white"
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
