import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Week 1", protein: 50, carbs: 120, fat: 30 },
  { day: "Week 2", protein: 70, carbs: 100, fat: 40 },
  { day: "Week 3", protein: 60, carbs: 130, fat: 35 },
];

export default function BarGraph() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="protein" fill="#34d399" />
        <Bar dataKey="carbs" fill="#60a5fa" />
        <Bar dataKey="fat" fill="#f87171" />
      </BarChart>
    </ResponsiveContainer>
  );
}
