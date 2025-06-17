import bullsEye from "../assets/images/bullsEye.webp";
import meh from "../assets/images/meh.webp";
import thumbsUp from "../assets/images/thumbsUp.webp";

const Emoji = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  const emoji = emojiMap[rating]; // define the emoji

  return (
    <img src={emoji.src} alt={emoji.alt} className="w-6 h-6 inline-block" />
  );
};

export default Emoji;
