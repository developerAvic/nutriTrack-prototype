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
  carbs: "#fbbf24",    // yellow
};

export default function BigChart() {
  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex gap-4 mb-2">
        {Object.keys(COLORS).map((key) => (
          <div key={key} className="flex items-center gap-1">
            <span
              className="w-4 h-4 rounded-sm"
              style={{ backgroundColor: COLORS[key] }}
            ></span>
            <span className="text-gray-700 text-sm capitalize">{key}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="calories" stroke={COLORS.calories} strokeWidth={2} />
          <Line type="monotone" dataKey="protein" stroke={COLORS.protein} strokeWidth={2} />
          <Line type="monotone" dataKey="carbs" stroke={COLORS.carbs} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
