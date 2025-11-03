export function Goals({ goals, onAddGoal }) {
  return (
    <div className=" flex flex-col justify-between ">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800">Goals</h3>
          <button
            onClick={onAddGoal}
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center gap-2"
          >
            +
          </button>
        </div>

        {/* Goal List */}
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {goals.map((goal, idx) => (
            <li
              key={idx}
              className="bg-green-100 px-3 py-1 rounded-md hover:bg-green-100 transition"
            >
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
