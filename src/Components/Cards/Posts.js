import { useState } from "react";
import moment from "moment";
import { Link as RouterLink } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Box,
  HStack,
  VStack,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  Avatar,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Divider,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  IoLocationSharp,
  IoHeartCircle,
  IoArrowRedoSharp,
} from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UseDirection } from "../Maps";
import { SocialShare } from "../Commons";

const Posts = ({ post, user }) => {
  const [loves, setLoves] = useState(post.love);
  const [lovedBy, setLovedBy] = useState(false);
  const [shares, setShares] = useState(post.share);
  const [sharedBy, setSharedBy] = useState(false);
  const [directions, setDirections] = useState(post.direction);
  const [directionBy, setDirectionBy] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);

  const setLoveCount = () => {
    if (lovedBy){
      setLoves(loves - 1);
      setLovedBy(false);
    } else {
      setLoves(loves + 1);
      setLovedBy(true);
    }
  }
  const setShareCount = () => {
    if (sharedBy){
      setShares(shares - 1);
      setSharedBy(false);
    } else {
      setShares(shares + 1);
      setSharedBy(true);
    }
  }

  const setDirectionCount = () => {
    if (directionBy){
      setDirections(directions);
      setDirectionBy(false);
    } else {
      setDirections(directions + 1);
      setDirectionBy(true);
    }
  }

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
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
            <Link as={RouterLink} to={`/${user.role == 'traveller'? 't' : 'g'}/${user.username}`}>
              <Avatar
                src={user.avatar}
                alt="user"
                size="md"
                border="2px solid #3f3d56"
                borderRadius="100%"
              />
            </Link>
            <Stack>
                <Link as={RouterLink} to={`/${user.role == 'traveller'? 't' : 'g'}/${user.username}`}>
                  <Text
                    fontWeight="700"
                    fontSize={winSize == 'sm' ? '1rem' : '1.2rem'}
                    color="#3f3d56"
                    margin="0"
                  >
                    {user.username}
                  </Text>
                </Link>
              <HStack color="grey" fontSize={[ '0.5em', '1em']}>
                <HStack>
                  <IoLocationSharp />
                  <Text>{post.location}</Text>
                </HStack>
                <Text>|</Text>
                <Text>{moment(post.date).format('DD MMM YYYY')}</Text>
                <Text>|</Text>
                <Text>{user.role}</Text>
              </HStack>
            </Stack>
          </Stack>
          <Box
            marginRight="-20px !important"
            marginTop="-10px !important"
          >
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    _hover={{ bg: 'transparent' }}
                    _focus={{ bg: 'transparent' }}
                    _active={{ bg: 'transparent' }}
                    size="md"
                    bg="transparent"
                    isActive={isOpen}
                    as={IconButton}
                    icon={<BsThreeDotsVertical />}
                  />
                  <MenuList>
                    <MenuItem onClick={() => alert("Delete")}>Delete</MenuItem>
                    <MenuItem onClick={() => alert("Share")}>Share</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Stack>
        <Box marginTop="30px">
          <Heading
            fontWeight="500"
            fontSize="1.4rem"
            color="#3f3d56"
            marginBottom="10px"
          >
            {post.text}
          </Heading>
          <Text
            fontWeight="700"
            fontSize="1rem"
            color="#2c66b8"
            marginBottom="10px"
          >
            #tourtoh#grandcanyon#sunrise#morning#travel#adventure
          </Text>
        </Box>
        {post.image && (
          <Box
            width="100%"
            height="300px"
            borderRadius="20px"
            overflow="hidden"
          >
            <Image
              src={post.image}
              alt="Cover"
              width="100%"
              height="100%"
              objectFit="cover"
              cursor="pointer"
              onClick={onOpen}
            />
          </Box>
        )}
        <HStack
          justifyContent="space-around"
          marginTop="2rem"
        >
          <Button
            variant="ghost"
            boxShadow={lovedBy && "0px 2px 4px rgba(0, 0, 0, 0.25)"}
            borderRadius="30px"
            _focus={{ outline: 0, border: 0 }}
            onClick={setLoveCount}
          >
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              color="#0693A0"
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            >
              <IoHeartCircle />
              <Text>{loves}</Text>
              {winSize != 'sm' && <Text>LOVES</Text>}
            </HStack>
          </Button>
          <Button
            variant="ghost"
            boxShadow={sharedBy && "0px 2px 4px rgba(0, 0, 0, 0.25)"}
            borderRadius="30px"
            _focus={{ outline: 0, border: 0 }}
            onClick={setShareCount}>
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              color="#f58642"
              color="#f58642"
              _focus={{ outline: 0, border: 0 }}
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            >
              <IoArrowRedoSharp />
              <Text>{shares}</Text>
              {winSize != 'sm' && <Text>SHARES</Text>}
            </HStack>
          </Button>
          <Button
            variant="ghost"
            boxShadow={directionBy && "0px 2px 4px rgba(0, 0, 0, 0.25)"}
            borderRadius="30px"
            _focus={{ outline: 0, border: 0, transition: '0.8 ease-in' }}
            onClick={setLoveCount}
            onClick={setDirectionCount}
          >
            <HStack
              fontWeight="700"
              fontSize="1.1rem"
              lineHeight="27px"
              color="#2c66b8"
              _focus={{ outline: 0, border: 0 }}
              textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            >
              <SiTelegram />
              <Text>{directions}</Text>
              {winSize != 'sm' && <Text>USE DIRECTIONS</Text>}
            </HStack>
          </Button>
        </HStack>
        {directionBy && (
          <Stack>
            <>
              <Divider marginTop="10px" />
              <UseDirection isMarkerShown />
            </>
          </Stack>
        )}
        {sharedBy && (
          <Stack>
          <>
            <Divider marginTop="10px" />
            <SocialShare url={process.env.REACT_APP_BASE_URL} />
          </>
        </Stack>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent sx={{ background: 'transparent', boxShadow: 0 }}>
          <ModalCloseButton borderRadius="50%" bg="#FFF" _hover={{ bg: '#000', color: '#FFF' }} />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <VStack bg="#FFFFFF" w="80%">
              <Stack justifyContent="flex-start" direction="row">
                <Flex w="80%" justifyContent="flex-start">
                  <ImageGallery
                    lazyLoad={true}
                    showIndex={true}
                    autoPlay={true}
                    items={[{original: post.image}]}
                    showThumbnails={false}
                  />
                </Flex>
                <Stack w="30%" alignSelf="start" padding="20px">
                  <HStack alignItems="center">
                    <Avatar size="sm" />
                  <Text fontSize="20px">{user.username}</Text>
                </HStack>
                <Divider />
                <Text>{post.text}</Text>
                </Stack>
              </Stack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Posts;
