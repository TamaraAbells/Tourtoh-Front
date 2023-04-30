import { useRef, useState } from "react";
import _ from "lodash";
import {
  Flex,
  Stack,
  HStack,
  Text,
  Divider,
  Image,
  FormControl,
  Input,
  InputGroup,
  ButtonGroup,
  Button,
  Popover,
  Portal,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const ExperienceComponent = ({ user, Asset }) => {
  const toast = useToast();
  const initialRef = useRef();
  const [reactive, setReactive] = useState({});
  const [userInfo, setUserInfo] = useState(user);

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
    <Stack
      padding="1.5rem"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
    >
      <Flex
        right="1.2rem"
        cursor="pointer"
        fontSize="1.2rem"
        justifyContent="flex-end"
      >
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
                <PopoverHeader>Update</PopoverHeader>
                <PopoverBody>
                  <FormControl>
                    <Stack spacing={4}>
                      <InputGroup borderRadius="5px">
                        <Stack w="100%">
                          <Text
                            fontWeight="bold"
                            fontFamily="inherit"
                            fontSize={[12, 12, 16, 14]}
                          >
                            Experience
                          </Text>
                          <Input
                            _focus={{ outline: 0 }}
                            label="Experience"
                            name="experience"
                            placeholder="Experience"
                            defaultValue={user.experience}
                            onChange={(e) => handleChange(e)}
                          />
                        </Stack>
                      </InputGroup>
                      <InputGroup borderRadius="5px">
                        <Stack w="100%">
                          <Text
                            fontWeight="bold"
                            fontFamily="inherit"
                            fontSize={[12, 12, 16, 14]}
                          >
                            Hourly Rate
                          </Text>
                          <Input
                            _focus={{ outline: 0 }}
                            label={"Hourly Rate"}
                            name="hourRate"
                            placeholder="Hour Rate"
                            defaultValue={user.hourlyRate}
                            onChange={(e) => handleChange(e)}
                          />
                        </Stack>
                      </InputGroup>
                      {user.languages && user.languages.map((lang) => (
                        <InputGroup borderRadius="5px">
                          <Stack w="100%">
                            <Text
                              fontWeight="bold"
                              fontFamily="inherit"
                              fontSize={[12, 12, 16, 14]}
                            >
                              {`Language -${lang.language}`}
                            </Text>
                            <HStack>
                              <Input
                                _focus={{ outline: 0 }}
                                label="Language"
                                name="language"
                                placeholder="Language"
                                defaultValue={lang.language}
                                onChange={(e) => handleChange(e)}
                              />
                              <Input
                                _focus={{ outline: 0 }}
                                label="Fluency"
                                name="fluency"
                                placeholder="Fluency"
                                defaultValue={lang.fluency}
                                onChange={(e) => handleChange(e)}
                              />
                            </HStack>
                          </Stack>
                        </InputGroup>
                      ))}
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
                          ref={initialRef}
                          onClick={() => {
                            handleReactive()
                            onClose()
                          }}
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
      </Flex>
      <Stack>
        <Stack
          justifyContent="space-between"
          direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
        >
          <Stack>
            <Text
              color="#f58642"
              fontSize={[12, 12, 16, 20]}
              fontFamily="inherit"
            >
              Experience
            </Text>
            <Text
              color="#3f3d56"
              fontWeight="700"
              fontSize={[12, 12, 16, 20]}
              paddingLeft={[0, 0, 0, 50]}
            >
              {user.experience}
            </Text>
          </Stack>
          <Stack paddingRight="60px">
            <Text
              color="#f58642"
              fontSize={[12, 12, 16, 20]}
              fontFamily="inherit"
            >
              Hourly Rate
            </Text>
            <Text
              color="#3f3d56"
              fontWeight="700"
              fontSize={[12, 12, 16, 20]}
            >
              {user.hourlyRate}
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text
            color="#f58642"
            fontSize={[12, 12, 16, 20]}
            fontFamily="inherit"
          >
            Languages
          </Text>
          <HStack
            justifyContent="space-between"
            padding={[0, 0, 0, '0 3rem']}
            >
            {user.languages && user.languages.map((lang) => (
              <HStack
                color="#3f3d56"
              >
                <Text
                  color="#3f3d56"
                  fontWeight="700"
                  fontSize={[12, 12, 16, 20]}
                >
                  {lang.language}
                </Text>
                <Text
                  color="#3f3d56"
                  fontWeight="700"
                  fontSize={[12, 12, 16, 20]}
                  opacity="0.35"
                >
                  {`- ${lang.fluency}`}
                  </Text>
              </HStack>
            ))}
          </HStack>
        </Stack>
      </Stack>
      <Divider />
      <HStack justifyContent="space-between" padding={[0, 0, 0, '0 2rem']}>
        <HStack color="#3f3d56">
          <Image src={Asset.Icon.NavigationNavigator} alt="tag" w={{ base: '25px', md: '35px' }} />
          <Text
            fontSize={[12, 12, 16, 20]}
            fontStyle="inherit"
            fontWeight="700"
          >
            Navigator
          </Text>
        </HStack>
        <HStack color="#3f3d56">
          <Image src={Asset.Icon.TranslationTranslator} alt="tag" w={{ base: '25px', md: '35px' }} />
          <Text
            fontSize={[12, 12, 16, 20]}
            fontStyle="inherit"
            fontWeight="700"
          >
            Translator
          </Text>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default ExperienceComponent;
