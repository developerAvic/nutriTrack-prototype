
import { PieChart, Pie, Cell } from "recharts";

export default function CircleGraph({ value = 58, size = 160, label = "Progress" }) {
  const data = [
    { name: "completed", value },
    { name: "remaining", value: 100 - value },
  ];

  const COLORS = ["#22c55e", "#e5e7eb"]; // green + gray

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ width: size, height: size }}
    >
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={size / 2.5}
          outerRadius={size / 2}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>

      {/* Center text */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{value}%</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
    </div>
  );
}
