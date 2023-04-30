import { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import _ from "lodash";
import {
  Box,
  HStack,
  Stack,
  Image,
  Avatar,
  Text,
  Input,
  InputGroup,
  ButtonGroup,
  Heading,
  Spacer,
  Button,
  FormControl,
  Popover,
  Portal,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  IconButton,
  useBreakpointValue,
  useToast
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { IoIosCamera } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsHouse, BsPhone } from "react-icons/bs";
import { useFileReader } from "../../Hooks/useFileReader";

const HeaderComponent = ({ user }) => {
  const toast = useToast();
  const initialRef = useRef();
  const [reactive, setReactive] = useState({});
  const [userInfo, setUserInfo] = useState(user);
  const { DropReader, uploadedFile } = useFileReader();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);

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

  return (
    <>
      <Box>
        <Image src={userInfo.cover} />
        <HStack
          width="100%"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="0px 0px 80px 80px"
          justifyContent="space-between"
          padding="20px 50px"
          marginTop={[0, 0, 0 , '-50px']}
        >
          <Stack
            justifyContent="space-between"
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          >
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Stack>
                <HStack>
                  <Text
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize={['0.8rem', '0.8rem', '0.9rem', '1.2rem']}
                    lineHeight="28px"
                    color="#3f3d56"
                    marginBottom={['-15px', '-15px', 0, 0]}
                  >
                    {`@${userInfo.username}`}
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
                <HStack>
                <Heading
                    fontFamily="TT Norms"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
                    lineHeight="42px"
                    color="#3f3d56"
                    marginTop={['-10px', '-10px', '-10px', 0]}
                    marginBottom={[0, 0, '-10px', 0]}
                  >
                    {`${userInfo.firstName} ${userInfo.lastName}`}
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
                {winSize != 'sm' && (
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    color="rgba(63, 61, 86, 0.5)"
                  >
                    Name
                  </Text>
                )}
              </Stack>
              <Spacer />
              <Stack>
                <HStack>
                  <RiComputerLine />
                  <Text
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize={['0.8rem', '0.8rem', '0.9rem', '1.2rem']}
                    lineHeight="28px"
                    color="#3f3d56"
                    marginBottom={['-15px', '-10px', 0, 0]}
                  >
                    {`@${userInfo.email}`}
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
                            <PopoverHeader>Update email</PopoverHeader>
                            <PopoverBody>
                              <FormControl>
                                <Stack spacing={4}>
                                  <InputGroup borderRadius="5px">
                                    <Input
                                      _focus={{ outline: 0 }}
                                      name="email"
                                      label="Email"
                                      type="email"
                                      placeholder="Email Address"
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
                  >
                    Email
                  </Text>
                )}
              </Stack>
            </Stack>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Stack>
                <HStack
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize={['0.8rem', '0.8rem', '0.9rem', '1.2rem']}
                  lineHeight="28px"
                  color="#3f3d56"
                  marginBottom={['-15px', '-15px', 0, 0]}
                  marginTop={['-15px', '-15px', 0, 0]}
                >
                  <BsHouse />
                  <HStack>
                    <Text>{userInfo.location}</Text>
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
                              <PopoverHeader>Update location</PopoverHeader>
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
                </HStack>
                {winSize != 'sm' && (
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    color="rgba(63, 61, 86, 0.5)"
                  >
                    Location
                  </Text>
                )}
              </Stack>
              <Stack>
                <HStack
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize={['0.8rem', '0.8rem', '0.9rem', '1.2rem']}
                  lineHeight="28px"
                  color="#3f3d56"
                  marginBottom="0"
                >
                  <BsPhone />
                  <HStack>
                    <Text>{userInfo.phone}</Text>
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
                            <PopoverHeader>Update phone</PopoverHeader>
                            <PopoverBody>
                              <FormControl>
                                <Stack spacing={4}>
                                  <InputGroup borderRadius="5px">
                                    <Input
                                      _focus={{ outline: 0 }}
                                      name="phone"
                                      label="Phone"
                                      placeholder="Phone number"
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
                </HStack>
                {winSize != 'sm' && (
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    color="rgba(63, 61, 86, 0.5)"
                  >
                    Phone Number
                  </Text>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Box
            bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
            borderRadius="50%"
            padding="3px"
            position="relative"
            top={{ base: '-6em', sm: '-6em', md: '-6em', lg: '-5em' }}
            objectFit="contain"
            cursor="pointer"
          >
            <Dropzone onDrop={acceptedFiles => DropReader(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
              <Box  {...getRootProps()}>
                <Input {...getInputProps()} />
                <Box
                  position="absolute"
                  fontStyle="normal"
                  fontWeight="normal"
                  fontSize={{ base: '1.2em', sm: '1.2em', md: '2.5em', lg: '3em' }}
                  lineHeight="28px"
                  color="#3f3d56"
                  top={{ base: '2.5em', sm: '1em', md: '2em', lg: '3em' }}
                  marginLeft={{ base: '-0.5em', sm: '-0.5em', md: '-0.5em', lg: '3.5em' }}
                  zIndex="2"

                >
                  <IoIosCamera />
                </Box>
                <Input {...getInputProps()} />
                <Avatar
                  src={uploadedFile}
                  width={{ base: '4em', sm: '4em', md: '7em', lg: '11em' }}
                  height={{ base: '4em', sm: '4em', md: '7em', lg: '11em' }}
                />
                <Input {...getInputProps()} />
              </Box>
              )}
            </Dropzone>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default HeaderComponent;
