import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-cover bg-center flex items-center justify-center"
      style={{
        // backgroundImage: "url('../public/bg.jpg')"
      }}
    >
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-green-600">NutriTrack</span> 🍏
        </h1>
        <p className="text-gray-500 mb-6 max-w-md">
          Track your nutrition, monitor progress, and stay healthy with
          NutriTrack.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
