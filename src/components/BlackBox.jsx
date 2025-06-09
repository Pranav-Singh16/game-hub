import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";
import { Devices } from "./index";

function BlackBox({ img, icons, name, devices } = props) {
  const dark = useRecoilValue(isDarkMode);
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md">
      {/* Image Top */}
      <div className="h-[200px]">
        <img
          src={img}
          alt="Box content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Bottom */}
      <div className="bg-white dark:bg-black text-black dark:text-white p-4 space-y-1">
        <div>
          <Devices devices={devices} />
        </div>
        <div>{name}</div>
        <div className="text-sm text-gray-400">Review</div>
      </div>
    </div>
  );
}

export default BlackBox;
