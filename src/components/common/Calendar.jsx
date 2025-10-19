import React, { useState } from "react";

export default function CalendarComp() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  const daysInMonth = Array.from({ length: endOfMonth.getDate() }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  return (
    <div className="w-full flex flex-col items-center p-3 sm:p-4 md:p-6">
      <div className="flex justify-between items-center w-full mb-3 sm:mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-sm sm:text-base"
        >
          Prev
        </button>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-sm sm:text-base"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 w-full">
        {Array.from({ length: startOfMonth.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2 sm:p-3"></div>
        ))}

        {daysInMonth.map((day) => {
          const isToday =
            day === today.getDate() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getFullYear() === today.getFullYear();

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
              className={`p-2 sm:p-3 rounded-lg hover:bg-green-100 transition-colors min-h-[2.5rem] sm:min-h-[3rem]
                ${selectedDate.getDate() === day ? "bg-green-500 text-white" : ""}
                ${isToday && selectedDate.getDate() !== day ? "border border-green-400" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
        Selected Date:{" "}
        <span className="font-medium text-gray-800">{selectedDate.toDateString()}</span>
      </p>
    </div>
  );
}