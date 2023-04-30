import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import _ from "lodash";
import moment from "moment";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Button,
  Box,
  HStack,
  VStack,
  Heading,
  Textarea,
  Select,
  Link,
  Divider,
  Avatar,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md/index";
import { BsFillPlayBtnFill } from "react-icons/bs/index";

import { useFileReader } from "../../Hooks/useFileReader";
import { DropzoneUI } from "../Modal";

const TravelClicks = ({
  isOpen,
  onClose,
  Asset,
  user,
  onAddPost
}) => {
  const [uploadedImage, setUploadedImage] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState(false);
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  const { DropReader, uploadedFile } = useFileReader();
  const [initialValues, setInitialValues] =  useState({
    id: moment.now(),
    accountType: '',
    text: '',
    image: '',
    video: '',
    date: moment.now(),
    love: 0,
    share: 0,
    direction: 0,
    location: 'Grand Canyon',
    user: user
  });
  const {
    isOpen: imageIsOpen,
    onClose: imageOnClose,
    onOpen: imageOnOpen
  } = useDisclosure();
  const {
    isOpen: videoIsOpen,
    onClose: videoOnClose,
    onOpen: videoOnOpen
  } = useDisclosure();

  const validationSchema = Yup.object().shape({
    accountType: Yup.string().max(255).required('Choose account type'),
    text: Yup.string().max(255).required('Required')
  });

  const handleAddPost = async(value) => (
    await onAddPost(value)
  );

  const handleDropzoneImage = async(imageFile) => {
    await DropReader(imageFile);
    setInitialValues({
      ...initialValues,
      image: uploadedFile
    })
    setUploadedImage(true);
  };
  const handleDropzoneVideo = async(videoFile) => {
    await DropReader(videoFile);
    setInitialValues({
      ...initialValues,
      video: uploadedFile
    })
    setUploadedVideo(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        scrollBehavior={winSize == 'sm' ? 'inside' : 'outside'}
      >
        <ModalOverlay />
        <ModalContent borderRadius="10px">
          <ModalCloseButton bg="white" borderRadius="50%" fontSize="10px" w="20px" h="20px"  />
          <ModalBody
            bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
            borderRadius="10px"
          >
            <HStack justifyContent="center">
              <Heading
                fontWeight="bold"
                fontFamily="inherit"
                fontSize="1.5rem"
                lineHeight="42px"
                color="#FFF"
                textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              >
                Share
              </Heading>
            </HStack>
            <Divider
              border="none"
              borderBottom="1px solid #FFF"
              opacity="1"
              marginBottom="10px"
            />
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={values => handleAddPost(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <VStack>
                    <HStack width="100%">
                    <Link as={RouterLink} to={`/${user.role === 'traveller'? 't' : 'g'}/${user.username}`}>
                      <Avatar src={user.avatar} size="md" border="2px solid #FFF" />
                    </Link>
                      <Select
                        width="35%"
                        height="35px"
                        variant="outline"
                        fontSize="12px"
                        placeholder="Post as Traveller/Guide"
                        borderWidth="2px"
                        borderRadius="20px"
                        bgColor="#FFF"
                        name="accountType"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.accountType}
                      >
                        <option value="traveller">Traveller</option>
                        <option value="guide">Guide</option>
                        {errors.accountType && touched.accountType && errors.accountType}
                      </Select>
                    </HStack>
                    <VStack width="100%">
                      <Box
                        width="100%"
                        bgColor="#FFF"
                        borderRadius="20px"
                      >
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" />
                          <Textarea
                            placeholder="Type Here" 
                            variant="filled"
                            bgColor="#FFF"
                            resize="none"
                            borderRadius="10px"
                            borderBottomRadius="0"
                            height="150px"
                            name="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.text}
                          />
                          {errors.text && touched.text && errors.text}
                        </InputGroup>
                        <HStack
                          width="100%"
                          height="40px"
                          bgColor="#FFF"
                          borderRadius="10px"
                          justifyContent="space-between"
                          padding="10px 40px"
                          borderTop="2px solid yellow"
                          borderTopRadius="0"
                        >
                          <HStack color="orange" fontSize="20px" justifyContent="space-between">
                            <Box onClick={imageOnOpen}>
                              <Box
                                cursor="pointer"
                                padding="5px"
                                borderRadius="5px"
                                color={uploadedImage && 'red'}
                                _hover={{ bg: '#edf2f7' }}
                              >
                                <MdAddPhotoAlternate />
                                </Box>
                                <DropzoneUI
                                  isOpen={imageIsOpen}
                                  onClose={imageOnClose}
                                  dropzoneFiles={handleDropzoneImage}
                                  title="upload photo"
                                  maxFiles={1}
                                  maxFileSize={2998000}
                                  fileType="image/*"
                                />
                            </Box>
                            <Box onClick={videoOnOpen}>
                              <Box
                                cursor="pointer"
                                padding="5px 10px"
                                borderRadius="5px"
                                color={uploadedVideo && 'red'}
                                _hover={{ bg: '#edf2f7' }}
                              >
                                <BsFillPlayBtnFill />
                              </Box>
                              <DropzoneUI
                                isOpen={videoIsOpen}
                                onClose={videoOnClose}
                                dropzoneFiles={handleDropzoneVideo}
                                title="upload Video"
                                maxFiles={1}
                                maxFileSize={29980000}
                                fileType="video/*"
                              />
                            </Box>
                          </HStack>
                          <Button
                            variant="filled"
                            color="white"
                            bg="turquoise"
                            w="100px"
                            h="30px"
                            borderRadius="20px"
                            padding="5px 40px"
                            type="submit"
                            isLoading={isSubmitting}
                            loadingText="Loading"
                            colorScheme="teal"
                            variant="outline"
                            spinnerPlacement="end"
                            _hover={{ bg: 'turquoise' }}
                          >
                            POST
                          </Button>
                        </HStack>
                      </Box>
                      <HStack
                        width="100%"
                        bgColor="#FFF"
                        borderRadius="10px"
                        justifyContent="space-around"
                        padding="10px 40px"
                      >
                        <Button
                          variant="filled"
                          color="white"
                          bg="#4682b4"
                          w="150px"
                          h="30px"
                          borderRadius="20px"
                          padding="5px 20px"
                          fontSize={[ '0.2em', '0.2em', '0.7em', '0.8em']}
                        >
                          Add Location
                        </Button>
                        <Button
                          variant="filled"
                          color="white"
                          bg="#4682b4"
                          w="150px"
                          h="30px"
                          borderRadius="20px"
                          padding="5px 20px"
                          fontSize={[ '0.2em', '0.2em', '0.7em', '0.8em']}
                        >
                          Make an Event
                        </Button>
                      </HStack>
                    </VStack>
                  </VStack>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TravelClicks;
