import React from "react";
import NutriTable from "../../components/common/NutriTable";
import { tableData } from "../../../utils/tableData";

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
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 min-h-[calc(100vh-8rem)]">
      {/* Filters Section */}
      <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center text-gray-400">
        Filters and other options
      </div>

      {/* Download Section */}
      <div className="col-span-1 md:col-start-1 md:row-start-3 md:row-span-1 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[10rem] sm:min-h-[12rem] flex flex-col gap-4 items-center justify-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Download your Activity</h1>
        <button
          onClick={downloadCSV}
          className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
        >
          Download CSV
        </button>
      </div>

      {/* Preview Section */}
      <div className="col-span-1 md:col-span-1 md:row-span-4 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[16rem] sm:min-h-[20rem] flex flex-col gap-4 items-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Preview:</h3>
        <div className="w-full overflow-auto">
          <NutriTable data={tableData} />
        </div>
      </div>
    </div>
  );
}