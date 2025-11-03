export function Achievements({ achievements }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Achievements</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {achievements.map((achievement, idx) => (
          <li
            className="bg-green-100 px-3 py-1 rounded-md hover:bg-green-100 transition"
            key={idx}
          >
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
