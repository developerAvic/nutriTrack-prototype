import React, { useState } from "react";

export default function TableControls({ onSort, onFilter, onDownload }) {
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort?.(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterOption(value);
    onFilter?.(value);
  };

  return (
    <div className="rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row flex-wrap justify-between gap-3 w-full">
      {/* Filter Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Filter by:</label>
        <select
          value={filterOption}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="high-protein">High Protein</option>
          <option value="low-carb">Low Carb</option>
          <option value="low-fat">Low Fat</option>
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Sort by:</label>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
        >
          <option value="">Default</option>
          <option value="calories-asc">Calories (Low → High)</option>
          <option value="calories-desc">Calories (High → Low)</option>
          <option value="protein-asc">Protein (Low → High)</option>
          <option value="protein-desc">Protein (High → Low)</option>
        </select>
      </div>
    </div>
  );
}
