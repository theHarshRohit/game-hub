import { Card, CardBody, Heading, Hide, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={20} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
