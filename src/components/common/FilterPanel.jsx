// import React, { useState } from "react";

// export default function FilterPanel({ tableData, onDownload }) {
//   const [filter, setFilter] = useState("All");

//   // Filter logic
//   const filteredData = tableData.filter((item) => {
//     if (filter === "High Protein") return parseFloat(item.protein) > 5; // example
//     if (filter === "Low Carb") return parseFloat(item.carbs) < 20;     // example
//     return true; // "All"
//   });

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <h2 className="text-lg font-semibold">Filters</h2>
//       <div className="flex gap-2">
//         {["All", "High Protein", "Low Carb", "other options later"].map((f) => (
//           <button
//             key={f}
//             className={`px-4 py-2 rounded-full border ${
//               filter === f
//                 ? "bg-green-500 text-white"
//                 : "bg-white text-gray-700 border-gray-300"
//             } hover:bg-green-400 hover:text-white transition`}
//             onClick={() => setFilter(f)}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={() => onDownload(filteredData)}
//         className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition mt-2"
//       >
//         Download Filtered CSV
//       </button>
//     </div>
//   );
// }
