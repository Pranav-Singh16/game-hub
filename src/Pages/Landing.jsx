// import { GameGrid } from "../components";
import img1 from "../assets/images/1.jpg";

import { BlackBox, ImageTextCard } from "../components";

const Landing = () => {
  return (
    <div className="flex items center">
      {/* <GameGrid /> */}
      <div className="w-1/5">landing</div>
      {/* <div flex aria-rowcount={}>
        <ImageTextCard
          imageSrc={img1}
          text="This is some dynamic text that can be very long or short depending on the content. It will expand the height of the card accordingly."
        />
      </div> */}
      {/* <div className="flex mb-4">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="w-1/3 bg-gray-400 h-12 mx-[1px]">
              <ImageTextCard
                imageSrc={img1}
                text="This is some dynamic text that can be very long or short depending on the content. It will expand the height of the card accordingly."
              />
            </div>
          ))}
      </div> */}
      <div className="w-4/5">
        <BlackBox />
      </div>
    </div>
  );
};
export default Landing;
