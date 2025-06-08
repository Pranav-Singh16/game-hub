// import { GameGrid } from "../components";
import { useState } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";

import { BlackBox, ImageTextCard } from "../components";

const Landing = () => {
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ]);
  return (
    <div className="flex items center">
      {/* <GameGrid /> */}
      <div className="w-1/5">landing</div>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <BlackBox key={img} img={img} />
        ))}
      </div>
    </div>
  );
};
export default Landing;
