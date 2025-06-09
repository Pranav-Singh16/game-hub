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

// import { useRecoilValue } from "recoil";
import { game } from "../recoil/index";
import { BlackBox, ImageTextCard } from "../components";
import { useRecoilValue } from "recoil";

const Landing = () => {
  // const [images, setImages] = useState([
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  // ]);
  // const [icon, SetIcon] = useState([["playstation", "pc", ]]);
  const results = useRecoilValue(game);
  return (
    <div className="flex items center">
      {/* <GameGrid /> */}
      <div className="w-1/5">landing</div>
      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {results.map((result) => (
          <BlackBox
            key={result.id}
            img={result.background_image}
            name={result.name}
            devices={result.parent_platforms}
            score={result.metacritic}
          />
        ))}
      </div>
    </div>
  );
};
export default Landing;
