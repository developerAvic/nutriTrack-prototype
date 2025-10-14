import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Protein", value: 25 },
  { name: "Carbs", value: 50 },
  { name: "Fat", value: 25 },
];
const COLORS = ["#4ade80", "#60a5fa", "#facc15"];

export default function PieChartComp() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
