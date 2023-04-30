import { useRef, useState, useEffect } from "react";
import _ from "lodash";
import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Heading,
  Avatar,
  Input,
  InputGroup,
  ButtonGroup,
  Button,
  FormControl,
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  Portal,
  IconButton,
  useToast,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { IoIosCamera } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsHouse } from "react-icons/bs";
import { useFileReader } from "../../Hooks";
import { Ratings } from "../../Components/Cards";
import { DropzoneUI } from "../../Components/Modal";

const GuiderComponent = ({ user, Asset }) => {
  const toast = useToast();
  const initialRef = useRef();
  const [avatar, setAvatar] = useState('');
  const [reactive, setReactive] = useState({});
  const [userInfo, setUserInfo] = useState(user);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { DropReader, uploadedFile } = useFileReader();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);

  useEffect(() => {
    setAvatar(() => uploadedFile.length ? uploadedFile : user.avatar);
  }, [uploadedFile, avatar]);

  const handleChange = (e) => {
    setReactive({
      ...reactive,
      [e.target.name]: e.target.value
    })
  };

  const handleReactive = () => {
    if(_.values(reactive).every(_.isEmpty)){
      setReactive({});
      return toast({
        title: "Failed!",
        description: "Field cannot be empty!",
        status: "warning",
        duration: 2000,
        isClosable: true,
        variant: "left-accent"
      });
    };

    setUserInfo({ ...userInfo, ...reactive });
    setReactive({});
    return toast({
      title: "Success!",
      description: "Changes made successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "left-accent"
    });
  };

  const handleDropzoneAvatar = async(imageFile) => {
    await DropReader(imageFile).then(() => (
      setAvatar(uploadedFile)
    ))
  };

  return (
    <>
      <Stack
        width="100%"
        padding="1.5rem"
        background="#FFF"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        position="relative"
        top="-100px"
        marginBottom="-90px"
      >
        <VStack
          pos="relative"
          top={{ base: 0, sm: 0, md: 0, lg: '-150px' }}
          marginBottom={[0, 0, 0, -150]}
          width="100%"
        >
          <Box
            bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
            borderRadius="50%"
            padding="3px"
            objectFit="contain"
            cursor="pointer"
          >
            <Box onClick={onOpen}>
              <Box
                position="absolute"
                fontStyle="normal"
                fontWeight="normal"
                fontSize={{ base: '1.2em', sm: '1.2em', md: '2.5em', lg: '3em' }}
                lineHeight="28px"
                color="#3f3d56"
                top={{ base: '2.5em', sm: '1em', md: '2em', lg: '4em' }}
                marginLeft={{ base: '-0.5em', sm: '-0.5em', md: '-0.5em', lg: '4em' }}
                zIndex="2"

              >
                <IoIosCamera />
              </Box>
              <Avatar
                src={avatar}
                width={{ base: '4em', sm: '4em', md: '7em', lg: '13em' }}
                height={{ base: '4em', sm: '4em', md: '7em', lg: '13em' }}
              />
            </Box>
            <DropzoneUI
              isOpen={isOpen}
              onClose={onClose}
              dropzoneFiles={handleDropzoneAvatar}
              title="upload Avatar"
              maxFiles={1}
              maxFileSize={2998000}
              fileType="image/*"
            />
          </Box>
          <VStack>
            <Stack>
              <HStack>
                <Text
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize={['0.8rem', '0.8rem', '0.9rem', '1.4rem']}
                  lineHeight="28px"
                  color="#3f3d56"
                  textAlign="center"
                >
                    {`@${user.username}`}
                </Text>
                <Popover closeOnBlur={false} placement="left" initialFocusRef={initialRef}>
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <IconButton
                        _focus={{ outline: 0, border: 0 }}
                        size="xs"
                        bg="transparent"
                        alignItems="end"
                        _hover={{ bg: 'transparent' }}
                        _focus={{ bg: 'transparent' }}
                        _active={{ bg: 'transparent' }}
                        icon={<EditIcon w="10px"  />}
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent _focus={{ outline: 0 }}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Update Username</PopoverHeader>
                        <PopoverBody>
                          <FormControl>
                            <Stack spacing={4}>
                              <InputGroup borderRadius="5px">
                                <Input
                                  _focus={{ outline: 0 }}
                                  name="username"
                                  label="Username"
                                  placeholder="Username"
                                  onChange={(e) => handleChange(e)}
                                />
                              </InputGroup>
                              <ButtonGroup d="flex" justifyContent="flex-end">
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  variant="outline"
                                  ref={initialRef}
                                  onClick={onClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  colorScheme="teal"
                                  onClick={() => {
                                    handleReactive()
                                    onClose()
                                  }}
                                  ref={initialRef}
                                >
                                  Save
                                </Button>
                              </ButtonGroup>
                            </Stack>
                          </FormControl>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
              </HStack>
            </Stack>
            <Stack>
              <HStack>
                <Heading
                  fontFamily="TT Norms"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize={['1.5rem', '1.5rem', '1.2rem', '2.5rem']}
                  lineHeight="42px"
                  color="#3f3d56"
                  textAlign="center"
                  marginTop={[-5, -5, 0, 0]}
                >
                  {`${user.firstName} ${user.lastName}`}
                </Heading>
                <Popover closeOnBlur={false} placement="left" initialFocusRef={initialRef}>
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <IconButton
                        _focus={{ outline: 0, border: 0 }}
                        size="xs"
                        bg="transparent"
                        alignItems="end"
                        alignSelf="end"
                        _hover={{ bg: 'transparent' }}
                        _focus={{ bg: 'transparent' }}
                        _active={{ bg: 'transparent' }}
                        icon={<EditIcon w="10px"  />}
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent _focus={{ outline: 0 }}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Update name</PopoverHeader>
                        <PopoverBody>
                          <FormControl>
                            <Stack spacing={4}>
                              <InputGroup borderRadius="5px">
                                <Input
                                  _focus={{ outline: 0 }}
                                  name="firstName"
                                  label="First name"
                                  placeholder="First name"
                                  onChange={(e) => handleChange(e)}
                                />
                              </InputGroup>
                              <InputGroup borderRadius="5px">
                                <Input
                                  _focus={{ outline: 0 }}
                                  name="lastName"
                                  label="Last name"
                                  placeholder="Last name"
                                  onChange={(e) => handleChange(e)}
                                />
                              </InputGroup>
                              <ButtonGroup d="flex" justifyContent="flex-end">
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  variant="outline"
                                  ref={initialRef}
                                  onClick={onClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  colorScheme="teal"
                                  onClick={() => {
                                    handleReactive()
                                    onClose()
                                  }}
                                  ref={initialRef}
                                >
                                  Save
                                </Button>
                              </ButtonGroup>
                            </Stack>
                          </FormControl>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
              </HStack>
            </Stack>
            <Stack>
              <HStack>
                <Text
                  fontWeight="bold"
                  fontSize={['0.8rem', '0.8rem', '1.2rem', '2rem']}
                  lineHeight="42px"
                  color="#3f3d56"
                  textAlign="center"
                  fontStyle="italic"
                  marginTop={[-5, -5, 0, 0]}
                >
                  {user.excerpt}
                </Text>
                <Popover closeOnBlur={false} placement="left" initialFocusRef={initialRef}>
                {({ isOpen, onClose }) => (
                  <>
                    <PopoverTrigger>
                      <IconButton
                        _focus={{ outline: 0, border: 0 }}
                        size="xs"
                        bg="transparent"
                        alignItems="end"
                        _hover={{ bg: 'transparent' }}
                        _focus={{ bg: 'transparent' }}
                        _active={{ bg: 'transparent' }}
                        icon={<EditIcon w="10px"  />}
                      />
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent _focus={{ outline: 0 }}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Update excerpt</PopoverHeader>
                        <PopoverBody>
                          <FormControl>
                            <Stack spacing={4}>
                              <InputGroup borderRadius="5px">
                                <Input
                                  _focus={{ outline: 0 }}
                                  name="excerpt"
                                  label="Excerpt"
                                  placeholder="Excerpt"
                                  onChange={(e) => handleChange(e)}
                                />
                              </InputGroup>
                              <ButtonGroup d="flex" justifyContent="flex-end">
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  variant="outline"
                                  ref={initialRef}
                                  onClick={onClose}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  _focus={{ outline: 0, border: 0 }}
                                  size="sm"
                                  colorScheme="teal"
                                  onClick={() => {
                                    handleReactive()
                                    onClose()
                                  }}
                                  ref={initialRef}
                                >
                                  Save
                                </Button>
                              </ButtonGroup>
                            </Stack>
                          </FormControl>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
              </HStack>
            </Stack>
            <Stack>
              <Ratings size="lg" Asset={Asset} />
            </Stack>
            <HStack
              justifyContent="space-between"
              w="100%"
              flexWrap="wrap"
            >
              <Stack>
                <HStack>
                  <HStack
                    marginTop={[-30, -30, 0, 0]}
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize={['0.6rem', '0.6rem', '0.9rem', '1.2rem']}
                    lineHeight="28px"
                    color="#3f3d56"
                  >
                    <RiComputerLine />
                    <Text>{user.email}</Text>
                  </HStack>
                  <Popover closeOnBlur={false} placement="left" initialFocusRef={initialRef}>
                  {({ isOpen, onClose }) => (
                    <>
                      <PopoverTrigger>
                        <IconButton
                          _focus={{ outline: 0, border: 0 }}
                          size="xs"
                          bg="transparent"
                          alignItems="end"
                          _hover={{ bg: 'transparent' }}
                          _focus={{ bg: 'transparent' }}
                          _active={{ bg: 'transparent' }}
                          icon={<EditIcon w="10px"  />}
                        />
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent _focus={{ outline: 0 }}>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Update email</PopoverHeader>
                          <PopoverBody>
                            <FormControl>
                              <Stack spacing={4}>
                                <InputGroup borderRadius="5px">
                                  <Input
                                    _focus={{ outline: 0 }}
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    onChange={(e) => handleChange(e)}
                                  />
                                </InputGroup>
                                <ButtonGroup d="flex" justifyContent="flex-end">
                                  <Button
                                    _focus={{ outline: 0, border: 0 }}
                                    size="sm"
                                    variant="outline"
                                    ref={initialRef}
                                    onClick={onClose}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    _focus={{ outline: 0, border: 0 }}
                                    size="sm"
                                    colorScheme="teal"
                                    onClick={() => {
                                      handleReactive()
                                      onClose()
                                    }}
                                    ref={initialRef}
                                  >
                                    Save
                                  </Button>
                                </ButtonGroup>
                              </Stack>
                            </FormControl>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </>
                  )}
                </Popover>
                </HStack>
                {winSize != 'sm' && (
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    color="rgba(63, 61, 86, 0.5)"
                    paddingLeft="2em"
                  >
                    Email
                  </Text>
                )}
              </Stack>
              <Stack>
              <HStack>
                  <HStack
                    marginTop={[-30, -30, 0, 0]}
                    fontStyle="normal"
                    fontFamily="inherit"
                    fontWeight="normal"
                    fontSize={['0.6rem', '0.6rem', '0.9rem', '1.2rem']}
                    lineHeight="28px"
                    color="#3f3d56"
                  >
                    <BsHouse />
                    <Text>{user.location}</Text>
                  </HStack>
                  <Popover closeOnBlur={false} placement="left" initialFocusRef={initialRef}>
                  {({ isOpen, onClose }) => (
                    <>
                      <PopoverTrigger>
                        <IconButton
                          _focus={{ outline: 0, border: 0 }}
                          size="xs"
                          bg="transparent"
                          alignItems="end"
                          alignSelf="end"
                          _hover={{ bg: 'transparent' }}
                          _focus={{ bg: 'transparent' }}
                          _active={{ bg: 'transparent' }}
                          icon={<EditIcon w="10px"  />}
                        />
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent _focus={{ outline: 0 }}>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Update Location</PopoverHeader>
                          <PopoverBody>
                            <FormControl>
                              <Stack spacing={4}>
                                <InputGroup borderRadius="5px">
                                  <Input
                                    _focus={{ outline: 0 }}
                                    name="city"
                                    label="City"
                                    placeholder="City"
                                    onChange={(e) => handleChange(e)}
                                  />
                                </InputGroup>
                                <InputGroup borderRadius="5px">
                                  <Input
                                    _focus={{ outline: 0 }}
                                    name="country"
                                    label="Country"
                                    placeholder="Country"
                                    onChange={(e) => handleChange(e)}
                                  />
                                </InputGroup>
                                <ButtonGroup d="flex" justifyContent="flex-end">
                                  <Button
                                    _focus={{ outline: 0, border: 0 }}
                                    size="sm"
                                    variant="outline"
                                    ref={initialRef}
                                    onClick={onClose}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    _focus={{ outline: 0, border: 0 }}
                                    size="sm"
                                    colorScheme="teal"
                                    onClick={() => {
                                      handleReactive()
                                      onClose()
                                    }}
                                    ref={initialRef}
                                  >
                                    Save
                                  </Button>
                                </ButtonGroup>
                              </Stack>
                            </FormControl>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </>
                  )}
                </Popover>
                </HStack>
                {winSize != 'sm' && (
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    color="rgba(63, 61, 86, 0.5)"
                    paddingLeft="2em"
                  >
                    Location
                  </Text>
                )}
              </Stack>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </>
  );
};

export default GuiderComponent;
