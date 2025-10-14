import { summary } from "../../../utils/Nutridata";
export function Summary({ title, content }) {
  return (
    <div
      className=" rounded-2xl p-6 flex flex-col items-start justify-center h-full"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
