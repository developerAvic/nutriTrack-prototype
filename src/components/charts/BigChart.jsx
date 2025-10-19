import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", calories: 120, protein: 50, carbs: 200 },
  { day: "Tue", calories: 100, protein: 70, carbs: 180 },
  { day: "Wed", calories: 100, protein: 60, carbs: 150 },
  { day: "Thu", calories: 190, protein: 80, carbs: 180 },
  { day: "Fri", calories: 130, protein: 55, carbs: 190 },
  { day: "Sat", calories: 170, protein: 65, carbs: 210 },
  { day: "Sun", calories: 100, protein: 60, carbs: 200 },
];

const COLORS = {
  calories: "#22c55e", // green
  protein: "#3b82f6", // blue
  carbs: "#fbbf24", // yellow
};

export default function BigChart() {
  return (
    <div className="w-full h-[16rem] sm:h-[20rem] md:h-[24rem]">
      {/* Legend */}
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
        {Object.keys(COLORS).map((key) => (
          <div key={key} className="flex items-center gap-1 sm:gap-2">
            <span
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
              style={{ backgroundColor: COLORS[key] }}
            ></span>
            <span className="text-xs sm:text-sm text-gray-700 capitalize">
              {key}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -15, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="day"
            fontSize={12}
            tick={{ fill: "#6b7280" }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
            className="text-xs sm:text-sm"
          />
          <YAxis
            fontSize={12}
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
            cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="calories"
            stroke={COLORS.calories}
            strokeWidth={1.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="protein"
            stroke={COLORS.protein}
            strokeWidth={1.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="carbs"
            stroke={COLORS.carbs}
            strokeWidth={1.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}