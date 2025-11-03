import {
  FaCheckCircle,
  FaTint,
  FaDrumstickBite,
  FaSun,
  FaShoePrints,
  FaLeaf,
  FaCandyCane,
  FaCalendarCheck,
  FaStar,
  FaMedal,
} from "react-icons/fa";

const iconMap = {
  FaCheckCircle,
  FaTint,
  FaDrumstickBite,
  FaSun,
  FaShoePrints,
  FaLeaf,
  FaCandyCane,
  FaCalendarCheck,
  FaStar,
  FaMedal,
};


export function Badges({ data, title = "Badges" }) {
  return (
    <div className=" w-full h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {data.map((badge) => {
          const Icon = badge.icon ? iconMap[badge.icon] : null;
          return (
            <div
              key={badge.id}
              className={`${badge.color} ${badge.textColor} px-3 py-1 rounded-full flex items-center gap-1`}
            >
              {Icon && <Icon />}
              {badge.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
