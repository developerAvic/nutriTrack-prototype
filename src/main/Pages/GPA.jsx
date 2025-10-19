import React from "react";
import { achievements, badges, goals } from "../../../utils/Nutridata";
import { Goals } from "../../components/common/Goals";
import { Achievements } from "../../components/common/Achievements";
import { Badges } from "../../components/common/Badges";

const GPA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6 min-h-[calc(100vh-8rem)]">
      {/* Goals Card */}
      <div className="col-span-1 md:col-span-2 md:row-span-3 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[16rem] sm:min-h-[20rem] flex flex-col">
        <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
      </div>

      {/* Achievements Card */}
      <div className="col-span-1 md:col-start-3 md:row-start-1 md:row-span-5 rounded-2xl p-3 sm:p-4 md:p-6 min-h-[20rem] sm:min-h-[30rem] flex flex-col">
        <Achievements achievements={achievements} />
      </div>

      {/* Badges Card */}
      <div className="col-span-1 md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-2  p-3 sm:p-4 md:p-6 min-h-[12rem] sm:min-h-[15rem] flex flex-col">
        <Badges data={badges} title="My Badges" />
      </div>
    </div>
  );
};

export default GPA;