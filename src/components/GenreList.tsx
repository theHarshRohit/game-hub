import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading)
    return (
      <Stack>
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
        <Skeleton height="35px" borderRadius={5} />
      </Stack>
    );

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
