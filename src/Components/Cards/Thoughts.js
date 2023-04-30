import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import {AiOutlineCalendar } from "react-icons/ai"
import{
  Box,
  HStack,
  Input,
  Text,
  Avatar,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TravelClicks } from "../Modal";

const Thoughts = ({
  user,
  Asset,
  onAddPost,
  onDisclosure: { isOpen, onClose, onOpen }
}) => {
  const [currentUser, setCurrentUser] = useState({});
  const [travelClicks, setTravelClicks] = useState(false);
  const [travelPosts, setTravelPosts] = useState(false);
  const [events, setEvents] = useState(false);
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);
  
  return (
    <>
      <Box
        background="#fff"
        marginTop="2rem"
        padding="1.5rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        width="100%"
      >
        <HStack>
          <Link as={RouterLink} to={`/${currentUser.role == 'traveller'? 't' : 'g'}/${currentUser.username}`}>
            <Avatar
              src={currentUser.avatar}
              alt={currentUser.username}
              width="60px"
              height="60px"
              border="2px solid #3f3d56"
              borderRadius="100%"
            />
          </Link>
          <Input
            type="text"
            placeholder="Post your Adventure"
            width="85%"
            height="60px"
            border="1px solid #212529"
            boxSizing="border-box"
            borderRadius="15px"
            padding="0.7rem"
            color="rgba(63, 61, 86, 0.38)"
            fontSize="1.2rem"
            onClick={onOpen}
          />
          <TravelClicks
            isOpen={isOpen}
            onClose={onClose}
            Asset={Asset}
            user={user}
            onAddPost={onAddPost}
          />
        </HStack>
        <HStack justifyContent="space-around" marginTop="2rem">
          <Button
            variant="ghost"
            onClick={(() => {})}
            bg={travelClicks ? '#0693a0' : '#FFFFFF'}
          >
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              color={travelClicks ? '#FFFFFF' : '#0693a0'}
            >
              <AiFillCamera />
              {winSize != 'sm' && <Text>Travel Clicks</Text>}
            </HStack>
          </Button>
          <HStack fontSize="1.5rem" textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)">
            <Text>|</Text>
          </HStack>
          <Button
            variant="ghost"
            onClick={(() => {})}
            bg={travelPosts ? '#f58642' : '#FFFFFF'}
          >
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              color={travelPosts ? '#FFFFFF' : '#f58642'}
            >
              <BsNewspaper />
              {winSize != 'sm' && <Text>Travel Posts</Text>}
            </HStack>
          </Button>
          <HStack fontSize="1.5rem" textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)">
            <Text>|</Text>
          </HStack>
          <Button
            variant="ghost"
            onClick={(() => {})}
            bg={events ? '#2c66b8' : '#FFFFFF'}
            >
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              color={events ? '#FFFFFF' : '#2c66b8'}
            >
              <AiOutlineCalendar />
              {winSize != 'sm' && <Text>Events</Text>}
            </HStack>
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Thoughts;
