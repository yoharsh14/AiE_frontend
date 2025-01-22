import React from "react";

const Card = ({ pub }) => {
  return (
    <div className="border-2 border-black rounded-sm p-5 w-96 h-auto">
      <div>
        <img
          src={pub.imgUrl}
          width={500}
          height={500}
          className="h-64 object-cover"
        />
      </div>
      <div className="text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
        {pub.title}
      </div>
      <div className="text-base text-gray-600 sm:text-md md:text-gray-700">
        {pub.summary}
      </div>
    </div>
  );
};

export default Card;
