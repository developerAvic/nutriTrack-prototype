import React from "react";
import { tableData } from "../../../utils/tableData";

const NutriTable = ({ data }) => {
  // Use passed data if available, otherwise default to tableData
  const tableRows = data && data.length > 0 ? data : tableData;

  if (!tableRows || tableRows.length === 0) {
    return <p className="text-gray-500">No data available</p>;
  }

  return (
    <table className="min-w-full rounded-lg shadow-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-green-400 to-green-300 text-white">
          <th className="py-3 px-6 text-left">Food</th>
          <th className="py-3 px-6 text-left">Calories</th>
          <th className="py-3 px-6 text-left">Protein</th>
          <th className="py-3 px-6 text-left">Carbs</th>
          <th className="py-3 px-6 text-left">Fat</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((item, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-green-50" : "bg-white"
            } hover:bg-green-100 transition-colors`}
          >
            <td className="py-2 px-6">{item.food}</td>
            <td className="py-2 px-6">{item.calories}</td>
            <td className="py-2 px-6">{item.protein}</td>
            <td className="py-2 px-6">{item.carbs}</td>
            <td className="py-2 px-6">{item.fat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutriTable;
