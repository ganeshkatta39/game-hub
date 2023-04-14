import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeners, { Gener } from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Gener) => void;
}

const GenerList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeners();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          {" "}
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(gener.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(gener)}
              fontSize="lg"
              variant="link"
            >
              {gener.name}
            </Button>
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
