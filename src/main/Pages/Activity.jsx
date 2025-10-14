import React from "react";
import NutriTable from "../../components/common/NutriTable";
import BarGraph from "../../components/charts/BarGraph";
import PieChartComp from "../../components/charts/PieChart";
import { Summary } from "../../components/common/Summary";
import { nutritionData } from "../../../utils/Nutridata";
import { ProgressChart } from "../../components/charts/ProgressChart";

export default function Activity() {

  return (
    <>
      <div className="overflow-x-auto min-h-screen flex gap-3">
        <main className="flex-3 w-150 grid grid-cols-2 gap-2 ">
          <div className=" col-span-2 rounded-2xl p-2 h-40 flex items-center justify-center text-gray-400">
            <ProgressChart data={nutritionData} />
          </div>

          <div className="rounded-2xl p-4 h-90 flex items-center justify-center text-gray-400">
            <Summary
              title="Summary"
              content="Here’s a brief overview of your progress."
            />
          </div>

          <div className=" rounded-2xl  p-4 h-90 flex items-center justify-center text-gray-400">
            <PieChartComp />
          </div>

          <div className=" col-span-2 rounded-2xl  p-4 h-90 flex items-center justify-center text-gray-400">
            <BarGraph />
          </div>
        </main>

        <aside className="w-150 flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Food Log: </h3>
          <div className="p-4 mt-4 h-200 overflow-auto border-t border-gray-200">
            <NutriTable />
          </div>
        </aside>
      </div>
    </>
  );
}
