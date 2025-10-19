import { achievements, goals } from "../../../utils/Nutridata";
import BarGraph from "../../components/charts/BarGraph";
import BigChart from "../../components/charts/BigChart";
import PieChartComp from "../../components/charts/PieChart";
import { Achievements } from "../../components/common/Achievements";
import CalendarComp from "../../components/common/Calendar";
import { Goals } from "../../components/common/Goals";
import Overview from "../../components/common/Overveiw";
import { Summary } from "../../components/common/Summary";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6 overflow-x-none min-h-[calc(100vh-8rem)]">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="col-span-1 md:col-span-2 rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center justify-center text-gray-400">
          <Overview />
        </div>

        <div className="col-span-1 md:col-span-2 rounded-2xl p-4 sm:p-6 min-h-[20rem] flex items-center justify-center text-gray-400">
          <BigChart />
        </div>

        <div className="rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center justify-center text-gray-400">
          <Summary
            title="Summary"
            content="Here's a brief overview of your progress."
          />
        </div>

        <div className="rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center justify-center text-gray-400">
          <PieChartComp />
        </div>

        <div className="col-span-1 md:col-span-2 rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center justify-center text-gray-400">
          <BarGraph />
        </div>
      </main>

      <aside className="flex-none w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4 sm:gap-6">
        <div className="rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center justify-center text-gray-400">
          <CalendarComp />
        </div>

        <div className="rounded-2xl p-4 sm:p-6 min-h-[20rem] flex items-center text-gray-400">
          <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
        </div>

        <div className="rounded-2xl p-4 sm:p-6 min-h-[15rem] flex items-center text-gray-400">
          <Achievements achievements={achievements} />
        </div>
      </aside>
    </div>
  );
}
