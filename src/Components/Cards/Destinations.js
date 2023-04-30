import moment from 'moment';
import {
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Avatar,
  AvatarGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import { TravellersBookGroupTour } from "../Modal";

const Destinations = ({ destinations, Asset, boxLength }) => {
  const {isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <HStack
        width={['100%', '100%', '50%', '100%']}
        alignItems="center"
        justifyContent="space-between"
        marginTop="2rem"
        border="1px solid #bee3f8"
        borderRadius="5px"
      >
        <Stack w={boxLength == 'lg'? '30%' : boxLength == 'sm' ? '40%' : '50%'}>
          <Image boxSize="120px" src={destinations.image} borderRadius="5px 0 0 5px" />
        </Stack>
        <Stack paddingRight="10px" w={boxLength == 'lg'? '70%' : boxLength == 'sm' ? '60%' : '50%'}>
          <Stack justifySelf="flex-start">
            <Heading
              fontWeight="500"
              fontSize={boxLength == 'lg' ? 'sm' : boxLength == 'sm' ? 'xs' : 'md'}
              color="#4a5568"
              noOfLines="2"
            >
              {destinations.title}
            </Heading>
            <Box fontSize="12px" lineHeight="18px" color="#f58642" margin="0" marginBottom="0.3rem">
              <HStack>
                <MdDateRange />
                <Text>{moment(destinations.date).format('MMMM Do YYYY')}</Text>
              </HStack>
              <HStack>
                <MdAccessTime />
                <Text>{moment(destinations.date).format('h:mm:ss a')}</Text>
              </HStack>
            </Box>
          </Stack>
          <HStack justifyContent="space-between">
            <Stack>
              <AvatarGroup size={boxLength == 'lg' ? 'sm' : boxLength == 'sm' ? 'xs' : 'md'} max={4}>
                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
              </AvatarGroup>
            </Stack>
            <Button
              size={boxLength == 'lg' ? 'sm' : boxLength == 'sm' ? 'xs' : 'md'}
              background="#3f3d56"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="5px"
              color="#fff"
              textAlign="center"
              onClick={onOpen}
            >
              Book Space
            </Button>
          </HStack>
        </Stack>
      </HStack>
      <TravellersBookGroupTour isOpen={isOpen} onClose={onClose} Asset={Asset} />
    </>
  );
};

export default Destinations;
