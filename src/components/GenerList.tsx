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
import useGeners, { Gener } from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Gener) => void;
  selectedGenre: Gener | null;
}

const GenerList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeners();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Geners
      </Heading>
      <List>
        {data.map((gener) => (
          <ListItem key={gener.id} paddingY="5px">
            {" "}
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(gener.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={gener.id === selectedGenre?.id ? "bold" : "normal"}
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
    </>
  );
};

export default GenerList;
