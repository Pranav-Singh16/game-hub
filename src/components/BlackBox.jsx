import React from "react";
import img1 from "../assets/images/3.jpg";

function BlackBox() {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md">
      {/* Image Top */}
      <div className="h-[200px]">
        <img
          src={img1}
          alt="Box content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Bottom */}
      <div className="bg-black text-white p-4 space-y-1">
        <div className="font-semibold text-lg">PlayStation</div>
        <div>Mandragora: Whispers of the Witch Tree with a lot of detail</div>
        <div className="text-sm text-gray-400">Review</div>
      </div>
    </div>
  );
}

export default BlackBox;
