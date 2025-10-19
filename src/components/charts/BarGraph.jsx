import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Normalize data to ensure all entries have protein, carbs, and fat
const data = [
  { day: "Week 1", protein: 50, carbs: 120, fat: 30 },
  { day: "Week 2", protein: 70, carbs: 100, fat: 40 },
  { day: "Week 3", protein: 60, carbs: 130, fat: 35 },
  { day: "Mon", protein: 50, carbs: 200, fat: 0 },
  { day: "Tue", protein: 70, carbs: 180, fat: 0 },
  { day: "Wed", protein: 60, carbs: 150, fat: 0 },
  { day: "Thu", protein: 80, carbs: 180, fat: 0 },
];

export default function BarGraph() {
  return (
    <div className="w-full h-[12rem] sm:h-[15rem] md:h-[20rem]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="day"
            fontSize="12"
            tick={{ fill: "#6b7280" }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
            className="text-xs sm:text-sm"
          />
          <YAxis
            fontSize="12"
            tick={{ fill: "#6b7280" }}
            className="text-xs sm:text-sm"
          />
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
            cursor={{ fill: "#f3f4f6" }}
          />
          <Bar dataKey="protein" fill="#34d399" barSize={20} radius={[4, 4, 0, 0]} />
          <Bar dataKey="carbs" fill="#60a5fa" barSize={20} radius={[4, 4, 0, 0]} />
          <Bar dataKey="fat" fill="#f87171" barSize={20} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}