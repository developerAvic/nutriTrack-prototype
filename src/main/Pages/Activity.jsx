import React from "react";
import NutriTable from "../../components/common/NutriTable";
import BarGraph from "../../components/charts/BarGraph";
import PieChartComp from "../../components/charts/PieChart";
import { Summary } from "../../components/common/Summary";
import { nutritionData } from "../../../utils/Nutridata";
import { ProgressChart } from "../../components/charts/ProgressChart";

export default function Activity() {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 min-h-[calc(100vh-8rem)] overflow-x-hidden">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="col-span-1 md:col-span-2 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center text-gray-400">
          <ProgressChart data={nutritionData} />
        </div>

        <div className="rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center text-gray-400">
          <Summary
            title="Summary"
            content="Here’s a brief overview of your progress."
          />
        </div>

        <div className="rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center text-gray-400">
          <PieChartComp />
        </div>

        <div className="col-span-1 md:col-span-2 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex items-center justify-center text-gray-400">
          <BarGraph />
        </div>
      </main>

      <aside className="flex-none w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4 sm:gap-6">
        <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-700">Food Log:</h3>
        <div className="p-3 sm:p-4 md:p-6 min-h-[16rem] sm:min-h-[20rem] overflow-auto border-t border-gray-200 rounded-2xl">
          <NutriTable />
        </div>
      </aside>
    </div>
  );
}