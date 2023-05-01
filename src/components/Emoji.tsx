import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bulleye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bulleye, alt: "recommended", boxSize: "25px" },
    5: { src: thumbsup, alt: "exceptional ", boxSize: "34px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
