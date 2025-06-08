import { useState } from "react";
// import img1 from "../assets/images/1.jpg";
// import img2 from "../assets/images/2.jpg";
// import img3 from "../assets/images/3.jpg";
// import img4 from "../assets/images/4.jpg";
// import img5 from "../assets/images/5.jpg";
// import img6 from "../assets/images/6.jpg";
// import img7 from "../assets/images/7.jpg";
// import img8 from "../assets/images/8.jpg";
// import img9 from "../assets/images/9.jpg";

function BlackBox({ img }) {
  // const [images, setImages] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9]);
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
      <div className="bg-black text-white p-4 space-y-1">
        <div className="font-semibold text-lg">PlayStation</div>
        <div>Mandragora: Whispers of the Witch Tree with a lot of detail</div>
        <div className="text-sm text-gray-400">Review</div>
      </div>
    </div>
  );
}

export default BlackBox;
