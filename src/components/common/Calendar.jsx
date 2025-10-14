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
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();

  return (
    <div className="w-full flex flex-col items-center p-2">
      <div className="flex justify-between items-center w-full mb-2">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold text-gray-700">
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 w-full">
        {Array.from({ length: startOfMonth.getDay() }).map((_, i) => (
          <div key={"empty-" + i} className="p-2"></div>
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
              className={`p-2 rounded-lg hover:bg-green-100 transition-colors
                ${
                  selectedDate.getDate() === day ? "bg-green-500 text-white" : ""
                } ${isToday && selectedDate.getDate() !== day ? "border border-green-400" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Selected Date:{" "}
        <span className="font-medium text-gray-800">
          {selectedDate.toDateString()}
        </span>
      </p>
    </div>
  );
}
