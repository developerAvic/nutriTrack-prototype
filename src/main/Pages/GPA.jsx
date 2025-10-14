import React from "react";
import { achievements, badges, goals } from "../../../utils/Nutridata";
import { Goals } from "../../components/common/Goals";
import { Achievements } from "../../components/common/Achievements";
import { Badges } from "../../components/common/Badges";



const gpa = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-4 h-155 p-2">
  {/* Goals Card */}
  <div className="col-span-2 row-span-3 rounded-2xl  p-4 flex flex-col">
    <Goals goals={goals} onAddGoal={() => alert("Add Goal")} />
  </div>

  {/* Achievements Card */}
  <div className="col-start-3 row-start-1 row-span-5 rounded-2xl  p-4 flex flex-col">
    <Achievements achievements={achievements} />
  </div>

  {/* Badges Card */}
  <div className="col-start-1 row-start-4 col-span-2 row-span-2 rounded-2xl  p-4 flex flex-col">
    <Badges data={badges} title="My Badges" />
  </div>
</div>

  );
};

export default gpa;
