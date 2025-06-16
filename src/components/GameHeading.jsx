import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <div className="text-2xl font-bold text-gray-900 dark:text-white">
      {heading}
    </div>
  );
};

export default GameHeading;
