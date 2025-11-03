import React from "react";
import NutriTable from "../../components/common/NutriTable";
import { tableData } from "../../../utils/tableData";
import TableControls from "../../components/common/TableControls";

export default function Export() {
  // Convert data to CSV
  const convertToCSV = (arr) => {
    const header = Object.keys(arr[0]).join(",");
    const rows = arr.map((item) => Object.values(item).join(",")).join("\n");
    return `${header}\n${rows}`;
  };

  // Download CSV
  const downloadCSV = () => {
    const csvData = convertToCSV(tableData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "nutrition_data.csv";
    link.click();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-4 md:p-8 min-h-[calc(100vh-8rem)] ">
      {/* Left column */}
      <div className="flex flex-col gap-6">
        {/* Filters */}
        <div className="rounded-2xl p-5">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
            Filters and other options
          </h1>
          <TableControls />
        </div>

        {/* Download section */}
        <div className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
            Download your Activity
          </h1>
          <button
            onClick={downloadCSV}
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 active:scale-[0.98] transition-transform text-sm sm:text-base"
          >
            Download CSV
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="rounded-2xl p-5 flex flex-col gap-4 ">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
          Preview:
        </h3>
        <div className="overflow-auto max-h-[70vh] custom-scrollbar">
          <NutriTable data={tableData} />
        </div>
      </div>
    </div>
  );
}
