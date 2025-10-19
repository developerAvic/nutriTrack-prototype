export function ProgressChart({ data }) {
  return (
    <div className="rounded-2xl p-3 sm:p-4 md:p-6 w-full">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-700">
        Nutrition Progress
      </h3>
      <div className="flex flex-col space-y-3 sm:space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
            {/* Label */}
            <span className="w-20 sm:w-24 text-xs sm:text-sm text-gray-600 truncate">
              {item.label}
            </span>

            {/* Progress bar */}
            <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
              <div
                className={`${item.color} h-full rounded-full`}
                style={{ width: `${item.value}%` }}
              />
            </div>

            {/* Value on side */}
            <span className="w-10 sm:w-12 text-xs sm:text-sm text-gray-700 font-medium text-right">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}