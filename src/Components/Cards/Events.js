import { useState } from "react";
import moment from 'moment';
import {
  Box,
  HStack,
  Heading,
  Text,
  Button,
  Image
} from "@chakra-ui/react";
import { MdDateRange, MdAccessTime } from "react-icons/md";

const Events = ({ events, issetBorder }) => {
  const [event, setEvent] = useState('Add to List');
  const handleEvent = () => (event == 'Add to List' ? setEvent('Going') : setEvent('Add to List'));

  return (
    <>
      <HStack
        width={['100%', '100%', '50%', '100%']}
        alignItems="center"
        justifyContent="space-between"
        marginTop="2rem"
        border={issetBorder && ("1px solid #fee05f")}
        borderRadius={issetBorder && "20px"}
        padding={issetBorder && "20px"}
      >
        <Box width="50%">
          <Image width="100%" height="180px" src={events.image} alt="event" />
        </Box>
        <Box width="50%">
          <Heading fontWeight="500" fontSize="18px" lineHeight="27px" color="#2c66b8">
            {events.title}
          </Heading>
          <Box fontSize="12px" lineHeight="18px" color="#f58642" margin="0" marginBottom="0.3rem">
            <HStack>
              <MdDateRange />
              <Text>{moment(events.date).format('MMMM Do YYYY')}</Text>
            </HStack>
            <HStack>
              <MdAccessTime />
              <Text>{moment(events.date).format('h:mm:ss a')}</Text>
            </HStack>
          </Box>
          <Text width="100%" fontSize="10px" lineHeight="15px" color="#3f3d56" margin="0.6rem 0">
            {events.description}
          </Text>
          <Button
            size="xs"
            w="100%"
            background="#3f3d56"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            color="#fff"
            textAlign="center"
            onClick={handleEvent}
          >
            {event}
          </Button>
        </Box>
      </HStack>
    </>
  );
};

export default Events;
