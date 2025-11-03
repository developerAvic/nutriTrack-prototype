import React from "react";
import NutriTable from "../../components/common/NutriTable";
import BarGraph from "../../components/charts/BarGraph";
import PieChartComp from "../../components/charts/PieChart";
import { Summary } from "../../components/common/Summary";
import { nutritionData } from "../../../utils/Nutridata";
import { ProgressChart } from "../../components/charts/ProgressChart";
import CircleGraph from "../../components/charts/CircleGraph";
import BigChart from "../../components/charts/BigChart";

export default function Activity() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4">
      {/* MAIN CONTENT */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Progress Overview */}
        <div className="col-span-1 sm:col-span-2 rounded-2xl p-3 md:p-4 flex items-center justify-center text-gray-400 min-h-[12rem]">
          <ProgressChart data={nutritionData} />
        </div>

        {/* Summary Card */}
        <div className="rounded-2xl p-4 flex items-center justify-center text-gray-400 min-h-[10rem]">
          <Summary
            title="Summary"
            content="Your nutrition and activity trends reflect consistency and awareness. Maintain steady habits, adjust portions intuitively, and keep hydration balanced."
          />
        </div>

        {/* Pie Chart */}
        <div className="rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[14rem]">
          <PieChartComp />
          <h1 className="text-sm font-semibold mt-3 text-gray-700 text-center">
            Macronutrient Breakdown (Protein / Carbs / Fats / Fiber)
          </h1>
        </div>

        {/* Circle Graphs */}
        <div className="rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[14rem]">
          <h1 className="text-sm font-semibold mb-2 text-gray-700 text-center">
            Weekly Protein Intake
          </h1>
          <CircleGraph value={32} />
        </div>

        <div className="rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[14rem]">
          <h1 className="text-sm font-semibold mb-2 text-gray-700 text-center">
            Today’s Diet Intake
          </h1>
          <CircleGraph value={75} />
        </div>

        {/* Bar Graph */}
        <div className="col-span-1 sm:col-span-2 rounded-2xl p-4 flex items-center justify-center text-gray-400 min-h-[16rem]">
          <BarGraph />
        </div>

        {/* Big Chart */}
        <div className="col-span-1 sm:col-span-2 rounded-2xl p-4 flex items-center justify-center text-gray-400 min-h-[20rem]">
          <BigChart />
        </div>
      </main>

      {/* ASIDE PANEL */}
      <aside className="w-full md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
        <h3 className="text-xl font-semibold text-gray-700">Food Log</h3>
        <div className="w-full overflow-auto max-h-[70vh]">
      <NutriTable />
    </div>

        <div className="rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[14rem]">
          <PieChartComp />
          <h1 className="text-sm font-semibold mt-3 text-gray-700 text-center">
            Macronutrient Breakdown
          </h1>
        </div>

        <div className="rounded-2xl p-4 flex items-center justify-center text-gray-400 min-h-[12rem]">
          <ProgressChart data={nutritionData} />
        </div>

        <div className="rounded-2xl p-4 flex flex-col items-center justify-center text-gray-400 min-h-[14rem]">
          <h1 className="text-sm font-semibold mb-2 text-gray-700 text-center">
            Today’s Diet Intake
          </h1>
          <CircleGraph value={75} />
        </div>
      </aside>
    </div>
  );
}
