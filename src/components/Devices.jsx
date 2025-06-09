import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

const Devices = ({ devices }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  if (!Array.isArray(devices)) return <div>No devices available</div>;

  return (
    <div className="flex justify-left gap-2">
      {devices.map((device) => {
        const Icon = iconMap[device.platform.slug];
        return Icon ? <Icon key={device.platform.id} /> : null;
      })}
    </div>
  );
};

export default Devices;
