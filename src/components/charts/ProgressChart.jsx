export function ProgressChart({ data }) {

  return (
    <div className=" w-3/4">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Nutrition Progress</h3>
      <div className="flex flex-col space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            {/* Label */}
            <span className="w-24 text-gray-600">{item.label}</span>

            {/* Progress bar */}
            <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`${item.color} h-4 rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>

            {/* Value on side */}
            <span className="w-12 text-gray-700 font-medium text-right">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
