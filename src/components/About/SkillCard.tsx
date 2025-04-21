import React from "react";

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <div className="w-36 h-44 sm:w-40 sm:h-48 md:w-44 md:h-52 lg:w-48 lg:h-56 bg-white text-gray-800 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 hover:border-yellow-400 flex flex-col justify-center items-center">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain mb-4 transition duration-300 group-hover:scale-110"
      />
      <h3 className="text-base sm:text-lg font-semibold text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;
