import React from "react";

const gpa = () => {
  const goals = [
    "Lose 5 kg in 3 months",
    "Increase daily protein intake to 100g",
    "Exercise at least 4 times a week",
  ];

  const achievements = [
    "Lost 2 kg in first month",
    "Completed 12 workout sessions",
    "Maintained a healthy diet for 30 days",
  ];

  return (
    <div class="grid grid-cols-3 h-150 grid-rows-6 gap-4 ">
      <div class="col-span-2 row-span-3 flex items-center justify-center  bg-white rounded-2xl ">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Goals and add goal button
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
          <button className="bg-green-500  text-white px-6 py-2 rounded-full shadow hover:bg-green-600 transition ">
            Add Goals
          </button>
        </div>
      </div>
      <div className="col-start-3 row-start-1 row-span-5 bg-white rounded-2xl shadow-sm p-6 flex flex-col">
    <h3 className="text-xl font-semibold mb-3 text-gray-700">
      Achievements
    </h3>
    <ul className="list-disc list-inside space-y-1 text-gray-600">
      {achievements.map((achievement, idx) => (
        <li key={idx}>{achievement}</li>
      ))}
    </ul>
  </div>

      <div className="col-start-1 row-start-4 col-span-2 row-span-2  bg-white rounded-2xl  flex items-center justify-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Badges</h3>
      </div>
    </div>
  );
};

export default gpa;
