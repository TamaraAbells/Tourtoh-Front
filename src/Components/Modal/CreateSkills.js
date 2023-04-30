import { Formik } from "formik";
import Whirligig from "react-whirligig";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  HStack,
  Text,
  Input,
  Textarea,
  Divider,
  Spinner,
  Checkbox,
  FormControl,
  FormLabel,
  Image
} from "@chakra-ui/react";
import DropzoneReader from "../../Hooks/DropzoneReader";

const CreateSkills = ({ isOpen, onClose, activities, Asset }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  const initialValues = {
    skill: '',
    description: '',
    virtualKnowledge: '',
    donations: '',
    hourlyRate: '',
    suggestedRate: '',
    photo: '',
  }

  const handleOnSubmit = ({ values, setSubmitting}) => {
    console.log('VALUES', values)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            w="15px"
            h="15px"
            fontSize="7px"
            color="white"
            bg="#3f3d56"
            borderRadius="50%"
          />
          <ModalBody>
            <Text
              textAlign="center"
              color="#3f3d56"
              lineHeight="50px"
              fontSize={['2rem', '2rem', '2rem', '1.5rem']}
            >
              Create Skill/Knowledge Share Service
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
                      <Stack spacing={2} padding="10px 50px">
                        <FormControl>
                          <FormLabel marginBottom="0" fontSize="12px">
                            Name of Skill/Knowledge Share Service
                          </FormLabel>
                          <Input
                            bg="#F9F9F9"
                            boxShadow="inset 0px 2px 2px rgba(0, 0, 0, 0.25)"
                            borderRadius="10px"
                            name="skill"
                            placeholder="Type Name Here"
                            fontSize="11px"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.skill}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel marginBottom="0" fontSize="12px">
                            Description of Skill/Knowledge Share Service
                          </FormLabel>
                          <Textarea
                            bg="#F9F9F9"
                            boxShadow="inset 0px 2px 2px rgba(0, 0, 0, 0.25)"
                            borderRadius="10px"
                            resize="none"
                            placeholder="Type Description"
                            fontSize="11px"
                            name="skill"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                        </FormControl>
                        <FormControl>
                          <HStack justifyContent="space-between">
                            <Stack>
                              <HStack>
                                  <Text fontSize="12px">Virtual Skill/Knowledge</Text>
                                <Checkbox />
                              </HStack>
                            </Stack>
                            <Text fontSize="12px">Or</Text>
                            <Stack>
                              <HStack>
                                  <Text fontSize="12px">Donations Only:</Text>
                                <Checkbox />
                              </HStack>
                            </Stack>
                          </HStack>
                        </FormControl>
                        <FormControl>
                          <HStack>
                            <HStack>
                              <Text fontSize="12px">Hourly Rate</Text>
                              <Input
                                bg="#F9F9F9"
                                boxShadow="inset 0px 2px 2px rgba(0, 0, 0, 0.25)"
                                borderRadius="10px"
                                name="hourlyRate"
                                placeholder="Starts at $5.00"
                                fontSize="11px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hourlyRate}
                              />
                            </HStack>
                            <HStack>
                              <Text fontSize="12px">Suggested Rate</Text>
                              <Input
                                bg="#F9F9F9"
                                boxShadow="inset 0px 2px 2px rgba(0, 0, 0, 0.25)"
                                borderRadius="10px"
                                name="suggestedRate"
                                placeholder="Starts at $5.00"
                                fontSize="11px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.suggestedRate}
                              />
                            </HStack>
                          </HStack>
                        </FormControl>
                        <FormControl padding="10px 0">
                          <DropzoneReader />
                        </FormControl>
                        <FormControl>
                          <FormLabel marginBottom="0" fontSize="12px">
                              Select Related Activites
                          </FormLabel>
                          <HStack>
                            <Button
                              padding="0"
                              variant="ghost"
                              leftIcon={<Image src={Asset.Icon.Previous}boxSize="20px" />}
                              onClick={prev}
                            />
                            <Whirligig
                              visibleSlides={5}
                              gutter="0.5em"
                              className="whirlig"
                              ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                            >
                              {activities.map((activity) => (
                                <Image
                                  src={activity}
                                  alt={activity}
                                  w="60px"
                                  h="40px"
                                  padding="5px"
                                  objectFit="contain"
                                  boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                                  borderRadius="5px"
                                  justifyContent="center"
                                  transition="transform 0.5s ease-in-out"
                                  _hover={{ transform: 'scale(1.05)' }}
                                  cursor="pointer"
                                />
                              ))}
                            </Whirligig>
                            <Button
                              padding="0"
                              variant="ghost"
                              rightIcon={<Image boxSize="20px" src={Asset.Icon.Next} />}
                              onClick={next}
                            />
                          </HStack>
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
                            <Text>Create Skill</Text>
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

export default CreateSkills;
