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
    <div className="overflow-x-auto min-h-screen flex gap-6">
      <main className="flex-3 w-150 grid grid-cols-2 gap-2 ">
        <div className="col-span-2 rounded-2xl p-4 h-60 flex items-center justify-center text-gray-400">
          <Overview />
        </div>

        <div className=" col-span-2 rounded-2xl p-4 h-100 flex items-center justify-center text-gray-400">
          <BigChart />
        </div>

        <div className="  rounded-2xl p-4 h-90 flex items-center justify-center text-gray-400">
          <Summary
            title="Summary"
            content="Here’s a brief overview of your progress."
          />
        </div>

        <div className=" rounded-2xl p-4 h-90 flex items-center justify-center text-gray-400">
          <PieChartComp />
          <PieChartComp />
        </div>

        <div className="col-span-2 rounded-2xl p-4 h-90 flex items-center justify-center text-gray-400">
          <BarGraph />
        </div>
      </main>

      <aside className="w-100 flex flex-col gap-2">
        <div className=" rounded-2xl p-4 h-100 flex items-center justify-center text-gray-400">
          <CalendarComp />
        </div>

        <div className="rounded-2xl p-4 h-150 flex items-center text-gray-400">
          <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
        </div>

        <div className=" rounded-2xl p-4 h-90 flex items-center text-gray-400">
          <Achievements achievements={achievements} />
        </div>
      </aside>
    </div>
  );
}
