import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";
import { Devices, CriticScore } from "./index";

function BlackBox({ img, name, devices, score }) {
  const dark = useRecoilValue(isDarkMode);

  console.log("in blackbox");
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md">
      <div className="h-[200px]">
        <img
          src={img}
          alt="Box content"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white dark:bg-black text-black dark:text-white p-4 space-y-1">
        <Devices devices={devices} />
        <div>{name}</div>
        <div className="text-sm text-gray-400">
          <CriticScore score={score} />
        </div>
      </div>
    </div>
  );
}

export default memo(BlackBox); // Memoized to prevent unnecessary re-renders
