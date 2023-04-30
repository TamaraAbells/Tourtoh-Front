import {
  Box,
  HStack,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import { CreateSkills } from "../Modal";

const Featured = ({
  title,
  subtitle,
  callToAction,
  activities,
  display,
  size
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        background="#FFF"
        marginTop="2rem"
        padding="0.8rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        height="fit-content"
      
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Heading
            fontSize={['18px', '20px']}
            fontFamily="inherit"
            textAlign="center"
            marginBottom="20px"
          >
            {title}
          </Heading>
          <Text>{subtitle}</Text>
          {callToAction && (
            <Button
              width="auto"
              background="#fee05f"
              color="white"
              borderRadius="10px"
              onClick={onOpen}
              fontSize="13px"
              padding="0 10px"
            >
              <HStack>
                <Text>{callToAction}</Text>
                <IoAddCircleOutline />
              </HStack>
            </Button>
          )}
        </HStack>
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={3}
          display={display}
          flexWrap="wrap"
          justifyContent="start"
        >
          {activities.map((activity) => (
            <HStack
              boxSize={size == 'sm' ? '80px' : size == 'md' ? '100px' :  size == 'lg' ? '120px' : '100px'}
              // boxSize={['70px', '100px']}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
              justifyContent="center"
              transition="transform 0.5s ease-in-out"
              _hover={{ transform: 'scale(1.05)' }}
              cursor="pointer"
            >
              <Image
                src={activity}
                display="block"
                boxSize={size == 'sm' ? '60px' : size == 'md' ? '70px' :  size == 'lg' ? '80px' : '70px'}
                // boxSize="70px"
                alt={''} 
              />
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
      <CreateSkills isOpen={isOpen} onClose={onClose} activities={activities} />
    </>
  );
};

export default Featured;
