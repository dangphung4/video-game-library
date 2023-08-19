import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelectGrenre: (genre: Genre) => void;
  selectedGrenre: Genre | null;
}

const GenereList = ({ selectedGrenre, onSelectGrenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImage(genre.image_background)}
            />
            <Button whiteSpace="normal" textAlign="left"
              fontWeight={genre.id === selectedGrenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGrenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenereList;
