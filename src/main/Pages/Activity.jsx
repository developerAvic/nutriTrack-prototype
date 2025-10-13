import React from "react";
import NutriTable from "../../components/common/NutriTable";

export default function Activity() {
  return (
    <>
      <div className="overflow-x-auto min-h-screen flex gap-3">
        <main className="flex-3 w-150 grid grid-cols-2 gap-2 ">
          <div className="bg-white col-span-2 rounded-2xl shadow-sm p-2 h-60 flex items-center justify-center text-gray-400">
            text: Overveiw Summary or track your nutrition and chat with Ai &&
            log food button
          </div>

          <div className="bg-white  rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
            summary
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
            pie charts
          </div>

          <div className="bg-white col-span-2 rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
            bargraph
          </div>
        </main>

        <aside className="w-150 flex flex-col gap-2">
          <div className="c<div className=p-4 mt-4 h-250 overflow-auto border-t border-gray-200">
          <NutriTable />
        </div>
        </aside>

      </div>
    </>
  );
}
