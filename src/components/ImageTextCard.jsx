// function ImageTextCard({ imageSrc, text }) {
//   return (
//     <div className="flex items-start space-x-4 p-4 border rounded shadow">
//       {/* Fixed-size Image */}
//       <img
//         src={imageSrc}
//         alt="Fixed"
//         className="w-24 h-24 object-cover rounded"
//       />

//       {/* Text that grows vertically */}
//       <p className="flex-1 text-gray-800">{text}</p>
//     </div>
//   );
// }

// export default ImageTextCard;

function ImageTextCard({ imageSrc, text }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded shadow max-w-xs">
      {/* Fixed-size Image */}
      <img
        src={imageSrc}
        alt="Fixed"
        className="w-24 h-24 object-cover rounded mb-2"
      />

      {/* Text that grows vertically */}
      <p className="text-gray-800 text-center">{text}</p>
    </div>
  );
}

export default ImageTextCard;
