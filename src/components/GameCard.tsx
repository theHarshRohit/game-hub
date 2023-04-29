import {
  Text,
  Card,
  CardBody,
  Heading,
  Hide,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={20} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent={"space-between"}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
