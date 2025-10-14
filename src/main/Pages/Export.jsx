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
    <div class="grid h-155 grid-cols-2 grid-rows-5 gap-2 ">
      <div class="row-span-2  flex items-center justify-center">
        filters and other options
      </div>

      <div class="row-start-3 row-span-1  flex flex-col gap-4 items-center justify-center">
        <h1>Download your Activity</h1>
        <button
          onClick={downloadCSV}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Download CSV
        </button>
      </div>

      <div class="row-span-4 flex flex-col gap-4 items-center justify-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Preveiw: </h3>
        <div class="row-span-4 flex items-center justify-center">
          <div className="p-4 mt-4 h-120 w-170 overflow-auto ">
            <NutriTable data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}
