import React from "react";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const navigate = useNavigate();

  return (
    <div class="grid grid-cols-3 grid-rows-1 gap-px">
      <div class="col-span-2 rounded-2xl flex items-center justify-center">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Overview Summary
          </h2>
          <p className="text-gray-500">
            Track your nutrition, monitor your progress, and get insights into
            your daily meals.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-4">
        <button
          onClick={() => navigate("/Aichat")}
          className="bg-green-50 text-green-700 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-green-100 transition"
        >
          Chat with AI
        </button>
        <button
          onClick={() => alert(("pop up log food card and a mic ")) }
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Log Food
        </button>
      </div>
    </div>
  );
}
