import React, { useState } from "react";
import { Formik } from 'formik';
import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  HStack,
  Image,
  Text,
  Textarea,
  Divider,
  VStack,
  Spinner,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import DropzoneReader from "../../Hooks/DropzoneReader";

const CreateReview = ({ isOpen, onClose, Asset }) => {
  const [initialValues, setInitialValues] = useState({
    caption: '',
    privateNote: '',
    ratings: 0,
    photo: '',
  });

  const handleRatingsChange = (ratings) => {
    setInitialValues({ ...initialValues, ratings });
  };

  const handleOnSubmit = ({ values, setSubmitting}) => {
    console.log('VALUES', values)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text
              textAlign="center"
              color="#3f3d56"
              lineHeight="50px"
              fontSize={['2rem', '2rem', '2rem', '1.5rem']}
            >
              Review your experience
            </Text>
            <Divider borderBottom="3px solid #3f3d56" opacity="1" marginBottom="10px" />
            <Stack>
                <Formik
                  enableReinitialize={true}
                  initialValues={initialValues}
                  onSubmit={(values, { setSubmitting }) => {
                    handleOnSubmit({ values, setSubmitting })
                  }}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={2} padding="10px 150px">
                        <FormControl>
                          <Stack>
                            <FormLabel marginBottom="0" fontSize="12px">Add Photo:</FormLabel>
                            <DropzoneReader />
                          </Stack>
                        </FormControl>
                        <FormControl>
                          <HStack lineHeight="30px">
                            <Image src={Asset.Icon.PenWrite} w="15px" objectFit="cover" />
                            <FormLabel marginBottom="0" fontSize="12px">Add Pubic Caption</FormLabel>
                          </HStack>
                          <Textarea
                            bg="#F9F9F9"
                            boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
                            borderRadius="10px"
                            resize="none"
                            name="caption"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.caption}
                          />
                        </FormControl>
                        <FormControl>
                          <VStack>
                            <Text
                              color="#163c5a"
                              marginBottom="-20px"
                              fontWeight="bold"
                            >
                              Give Your Rating
                            </Text>
                            <HStack>
                              <ReactStars
                                count={5}
                                onChange={handleRatingsChange}
                                size={40}
                                isHalf={true}
                                emptyIcon={<BsStar />}
                                halfIcon={<BsStarHalf />}
                                fullIcon={<BsStarFill />}
                                activeColor="#163c5a"
                              />
                              <Text
                                color="#163c5a"
                                fontSize="25px"
                                fontWeight="700"
                              >
                                {initialValues.ratings.toFixed(1)}
                              </Text>
                            </HStack>
                          </VStack>
                        </FormControl>
                        <FormControl>
                          <HStack lineHeight="30px">
                            <Image src={Asset.Icon.PenWrite} w="15px" objectFit="cover" />
                            <FormLabel marginBottom="0" fontSize="12px">Add Private Note to Guide</FormLabel>
                          </HStack>
                          <Textarea
                            bg="#F9F9F9"
                            boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
                            borderRadius="10px"
                            resize="none"
                            name="privateNote"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.privateNote}
                            marginBottom="20px"
                          />
                        </FormControl>
                        <Button
                          size="md"
                          bgColor="#3f3d56"
                          color="#FFFFFF"
                          _hover={{ opacity: '0.8' }}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <HStack>
                            <Text>Review</Text>
                            <Spinner speed="0.65s" size="sm" display={isSubmitting ? 'flex' : 'none'} />
                          </HStack>
                        </Button>
                      </Stack>
                    </form>
                  )}
                </Formik>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateReview;
