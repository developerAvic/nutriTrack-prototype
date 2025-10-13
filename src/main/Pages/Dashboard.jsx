
export default function Dashboard() {
  return (
    <div className="overflow-x-auto min-h-screen flex gap-6">
      <main className="flex-3 w-150 grid grid-cols-2 gap-2 ">
        <div className="bg-white col-span-2 rounded-2xl shadow-sm p-4 h-60 flex items-center justify-center text-gray-400">
         text: Overveiw Summary or track your nutrition and chat with Ai && log food button 
        </div>

        <div className="bg-white col-span-2 rounded-2xl shadow-sm p-4 h-100 flex items-center justify-center text-gray-400">
          Big chart
        </div>

        <div className="bg-white  rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
          summary
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
          pie charts 

        </div>

        <div className="bg-white col-span-2 rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
          bar graphs
        </div>
      </main>

      <aside className="w-100 flex flex-col gap-2">
        <div className="bg-white rounded-2xl shadow-sm p-4 h-100 flex items-center justify-center text-gray-400">
          calendar
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 h-150 flex items-center justify-center text-gray-400">
          goals
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 h-90 flex items-center justify-center text-gray-400">
          achievements pie chart and badges
        </div>
      </aside>
    </div>
  );
}
