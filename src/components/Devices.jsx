// const Devices = ({ devices } = props) => {
//   console.log("devices", devices);
//   return (
//     <div>
//       {devices.map((device) => (
//         // console.log("device", device)
//         <div key={device.platform.id}>{device.platform.slug}</div>
//       ))}
//     </div>
//   );
// };
// export default Devices;

const Devices = ({ devices }) => {
  if (!Array.isArray(devices)) return <div>No devices available</div>;

  return (
    <div className="flex justify-left gap-2">
      {devices.map((device) => (
        <div key={device.platform.id}>{device.platform.slug}</div>
      ))}
    </div>
  );
};

export default Devices;
