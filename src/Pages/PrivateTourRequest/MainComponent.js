import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Stack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Select,
  Image,
  Center,
  Button,
  Text,
  Checkbox,
  SimpleGrid,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import { useFileReader } from "../../Hooks";
import { DropzoneUI } from "../../Components/Modal";

const MainComponent = ({ Asset, user }) => {
  const [images, setImages] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { DropReader, uploadedFile } = useFileReader();

  useEffect(() => {
    setImages(() => uploadedFile.length ? uploadedFile : []);
  }, [uploadedFile]);

  const handleDropzoneImages = async(imageFile) => {
    await DropReader(imageFile).then(() => (
      setImages(uploadedFile)
    ))
  };

  return (
    <>
      <Box
        width="100%"
        margin="4rem auto"
        padding={['1rem', '3rem']}
        marginBottom="0"
        paddingBottom="0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignSelf="center">
          <Heading
            fontFamily="inherit"
            fontWeight="400"
            textAlign="center"
          >
            Private Tour Request Form
          </Heading>
        </Flex>
        <Stack
          justifyContent="space-between"
          width="100%"
          marginTop="2rem"
          padding={['1rem', '1.5rem 3.5rem']}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
        >
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack w={{ base: '100%', lg: '50%' }}>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" />
                <Input
                  type="text" 
                  placeholder="Name"
                  variant="filled"
                  padding="15px"
                  fontFamily="inherit"
                />
              </InputGroup>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" />
                <Textarea
                  placeholder="Address"
                  variant="filled"
                  padding="15px"
                  height="100px"
                  resize="none"
                  fontFamily="inherit"
                />
              </InputGroup>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" />
                <Textarea
                  placeholder="Description"
                  variant="filled"
                  padding="15px"
                  height="200px"
                  resize="none"
                  fontFamily="inherit"
                />
              </InputGroup>
            </Stack>
            <Stack w={{ base: '100%', lg: '50%' }}>
              <HStack>
                <Select
                  size="sm"
                  variant="outline"
                  placeholder="Select Skill/Knowledge"
                  bgColor="#edf2f7"
                  flex="2"
                  fontFamily="inherit"
                >
                  <option value="option1">Bed Size</option>
                </Select>
                <InputGroup
                  flex="1"
                  size="sm"
                >
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    size="sm"
                    type="text" 
                    placeholder="Hours"
                    variant="filled"
                    padding="15px"
                    fontFamily="inherit"
                  />
                </InputGroup>
              </HStack>
              <HStack>
                <Select
                  size="sm"
                  variant="outline"
                  placeholder="Select Stay Space"
                  bgColor="#edf2f7"
                  flex="2"
                  fontFamily="inherit"
                >
                  <option value="option1">Bed Size</option>
                </Select>
                <InputGroup
                  flex="1"
                  size="sm"
                >
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    size="sm"
                    type="text" 
                    placeholder="No. of Nights"
                    variant="filled"
                    padding="15px"
                    fontFamily="inherit"
                  />
                </InputGroup>
              </HStack>
              <HStack>
                <Select
                  size="sm"
                  variant="outline"
                  placeholder="Select Business Space"
                  bgColor="#edf2f7"
                  flex="2"
                  fontFamily="inherit"
                >
                  <option value="option1">Bed Size</option>
                </Select>
                <InputGroup
                  flex="1"
                  size="sm"
                >
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    type="text" 
                    placeholder="Hours"
                    variant="filled"
                    padding="15px"
                    fontFamily="inherit"
                  />
                </InputGroup>
              </HStack>
              <HStack>
                <InputGroup>
                  <HStack w="100%">
                    <Input
                      size="sm"
                      type="date"
                      placeholder="Check-in Times"
                      variant="filled"
                      bgColor="#edf2f7"
                      padding="15px"
                      fontFamily="inherit"
                    />
                    <Input
                      size="sm"
                      type="date"
                      placeholder="Check-in Times"
                      variant="filled"
                      bgColor="#edf2f7"
                      padding="15px"
                      fontFamily="inherit"
                    />
                  </HStack>
                </InputGroup>
              </HStack>
              <SimpleGrid columns={[5, null, 6]} spacing={1}>
                {images.map((image) => (
                  <Image boxSize={{ base: '50px', lg: '70px' }} borderRadius="10px" objectFit="cover" src={image} />
                ))}
                <Center
                  boxSize={{ base: '50px', lg: '70px' }}
                  borderRadius="10px"
                  borderWidth="2px"
                  borderColor="#063154"
                >
                  <Button bgColor="#ee8641" size="sm" onClick={onOpen}>
                    <AddIcon />
                  </Button>
                </Center>
                <DropzoneUI
                  isOpen={isOpen}
                  onClose={onClose}
                  dropzoneFiles={handleDropzoneImages}
                  title="upload photos"
                  maxFiles={6}
                  maxFileSize={2998000}
                  fileType="image/*"
                />
              </SimpleGrid>
            </Stack>
          </Stack>
          <Stack
            justifyContent="space-between"
            width="100%"
            marginTop="2rem"
            padding={['1rem', '1.5rem 3.5rem']}
            borderRadius="20px"
            bgColor="#edf2f7"
          >
            <Stack
              justifyContent="space-around"
              direction={{ base: 'column', md: 'row' }}
            >
                <Flex>
                  <Text fontFamily="inherit">Or, Check if Donations Only: </Text>
                  <Checkbox size="lg"></Checkbox>
                </Flex>
                <Flex>
                  <Text fontFamily="inherit">Amount Pledged at Booking Request: </Text>
                  <Input
                    size="sm"
                    placeholder=""
                    variant="filled"
                    bgColor="#edf2f7"
                    padding="15px"
                    width="70%"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                    fontFamily="inherit"
                  />
                </Flex>
            </Stack>
            <Spacer paddingBottom="30px" />
            <Stack
              justifyContent="space-around"
              direction={{ base: 'column', md: 'row' }}
            >
                <Flex>
                  <Text fontFamily="inherit">If Cash Payment: </Text>
                  <Checkbox size="lg"></Checkbox>
                </Flex>
                <HStack justifyContent="flex-end" alignItems="center">
                  <Text fontFamily="inherit">On day of Tour, Travellers are asked to input the total amount given: </Text>
                  <Input
                    size="sm"
                    placeholder="Total Amount Given"
                    variant="filled"
                    bgColor="#edf2f7"
                    padding="15px"
                    width="30%"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                    fontFamily="inherit"
                  />
                </HStack>
                <Spacer paddingBottom="30px" />
                <HStack
                  justifyContent="flex-end"
                  alignItems="center"
                  direction={{ base: 'column', md: 'row' }}
                >
                  <Text fontFamily="inherit">On day of Tour, Guides are asked to input the total amount recieved: </Text>
                  <Input
                    size="sm"
                    placeholder="Total Amount Given"
                    variant="filled"
                    bgColor="#edf2f7"
                    padding="15px"
                    width="30%"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                    fontFamily="inherit"
                  />
                </HStack>
            </Stack>
          </Stack>
          <Box alignSelf="center">
            <Button
              variant="solid"
              bgColor="#012234"
              color="white"
              marginTop="20px"
            >
              SUBMIT FORM
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MainComponent;
