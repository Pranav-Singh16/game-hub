import { memo } from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";
import { Devices, CriticScore } from "./index";
import noImage from "../assets/images/noImage.svg";
import { Emoji } from "./index";

function BlackBox({ game }) {
  const dark = useRecoilValue(isDarkMode);
  const { background_image, name, parent_platforms, metacritic, rating_top } =
    game;

  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md">
      <div className="h-[200px]">
        <img
          src={background_image || noImage}
          alt="Box content"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white dark:bg-black text-black dark:text-white p-4 space-y-1">
        <div className="flex justify-between">
          <Devices devices={parent_platforms} />
          <CriticScore score={metacritic} className="text-sm text-gray-400" />
        </div>
        <div>{name}</div>
        <Emoji rating={rating_top} />
      </div>
    </div>
  );
}

// import React, { memo } from "react";
// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index";
// import { Devices, CriticScore } from "./index";
// import noImage from "../assets/images/noImage.svg";
// import { Emoji } from "./index";

// function BlackBox({ img, name, devices, score, rating }) {
//   const dark = useRecoilValue(isDarkMode);

//   // console.log("in blackbox");
//   return (
//     <div className="w-80 rounded-lg overflow-hidden shadow-md">
//       <div className="h-[200px]">
//         <img
//           src={img || noImage} // Use fallback if img is null/undefined/empty
//           alt="Box content"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="bg-white dark:bg-black text-black dark:text-white p-4 space-y-1">
//         <div className="flex justify-between">
//           <Devices devices={devices} />
//           <CriticScore score={score} className="text-sm text-gray-400" />
//         </div>
//         <div>{name}</div>
//         <Emoji rating={rating} />
//       </div>
//     </div>
//   );
// }

export default memo(BlackBox); // Memoized to prevent unnecessary re-renders
