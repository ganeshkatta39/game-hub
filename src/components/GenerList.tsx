import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import getCroppedImageUrl from "../services/image-urls";

const GenerList = () => {
  const { data } = useGeners();
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
            <Text fontSize="lg">{gener.name}</Text>
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
