import { Formik } from "formik";
import Whirligig from "react-whirligig";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Flex,
  Button,
  HStack,
  Text,
  Input,
  Textarea,
  Divider,
  Spinner,
  Checkbox,
  CheckboxGroup,
  Select,
  FormControl,
  FormLabel,
  SimpleGrid,
  Image
} from "@chakra-ui/react";
import DropzoneReader from "../../Hooks/DropzoneReader";

const AddBusinessSpace = ({ isOpen, onClose, activities, Asset }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
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
              lineHeight="40px"
              fontSize={['2rem', '2rem', '2rem', '1rem']}
            >
              Add Business Space
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
                      <Stack>
                        <SimpleGrid columns={[1, 2, 2]}>
                          <Stack spacing={2} padding="10px">
                            <FormControl>
                              <Input
                                size="sm"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                placeholder="Name of the Property"
                                fontSize="11px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              />
                            </FormControl>
                            <FormControl>
                              <Textarea
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                resize="none"
                                placeholder="Address"
                                fontSize="11px"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                sx={{ height: '100%', minHeight: "60px" }}
                              />
                            </FormControl>
                            <FormControl>
                              <Textarea
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                resize="none"
                                placeholder="Description"
                                fontSize="11px"
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                              />
                            </FormControl>
                            <FormControl paddingTop="10px">
                            <CheckboxGroup size="sm" colorScheme="green">
                              <HStack>
                                <Checkbox value="Virtual Business Space">
                                  <Text fontSize="12px">Virtual Business Space</Text>
                                </Checkbox>
                                <Checkbox value="Check Spot">
                                  <Text fontSize="12px">Check Spot</Text>
                                </Checkbox>
                              </HStack>
                            </CheckboxGroup>
                            </FormControl>
                            <FormControl paddingTop="10px">
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
                                  visibleSlides={4}
                                  gutter="0.5em"
                                  className="whirlig"
                                  ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                                >
                                  {activities.map((activity) => (
                                    <Image
                                      src={activity}
                                      alt={activity}
                                      w="50px"
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
                          </Stack>
                          <Stack spacing={2} padding="10px">
                            <FormControl>
                              <Checkbox size="sm">
                                <Text>Rentable by Hour</Text>
                              </Checkbox>
                            </FormControl>
                            <FormControl>
                              <HStack>
                                <Input
                                  size="sm"
                                  w="60%"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  name="hourlyRate"
                                  placeholder="Hourly Rate"
                                  fontSize="11px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.hourlyRate}
                                />
                                <Input
                                  size="sm"
                                  w="40%"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  name="maxTravelCount"
                                  placeholder="Max Travel Count"
                                  fontSize="11px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.maxTravelCount}
                                />
                              </HStack>
                            </FormControl>
                            <FormControl>
                              <HStack justifyContent="space-between">
                                <Checkbox size="sm" w="40%">
                                  <Text>Donations Only</Text>
                                </Checkbox>
                                <Input
                                  size="sm"
                                  w="60%"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  name="suggestedDonationRate"
                                  placeholder="Suggested Donation Rate"
                                  fontSize="11px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.suggestedDonationRate}
                                />
                              </HStack>
                            </FormControl>
                            <FormControl padding="10px 0">
                              <DropzoneReader />
                            </FormControl>
                            <FormControl>
                              <FormLabel fontWeight="bold" fontSize="md" margin="0">Availablity</FormLabel>
                              <HStack w="100%" justifyContent="space-around">
                                <Text marginBottom="25px"></Text>
                                <Text marginBottom="25px">From</Text>
                                <Text marginBottom="25px">To</Text>
                              </HStack>
                              <SimpleGrid columns={[1]} spacing={0}>
                                {daysOfWeek.map((day) => (
                                  <HStack justifyContent="space-evenly">
                                    <Text w="30%" h="20px" fontSize="12px">{day}</Text>
                                    <Select
                                      borderColor="#3f3d56"
                                      borderRadius="5px"
                                      fontSize="9px"
                                      w="30%"
                                      h="20px"
                                      placeholder="Select Time"
                                    >
                                      <option value="option1">Option 1</option>
                                      <option value="option2">Option 2</option>
                                      <option value="option3">Option 3</option>
                                    </Select>
                                    <Select
                                      borderColor="#3f3d56"
                                      borderRadius="5px"
                                      fontSize="9px"
                                      w="30%"
                                      h="20px"
                                      placeholder="Select Time"
                                    >
                                      <option value="option1">Option 1</option>
                                      <option value="option2">Option 2</option>
                                      <option value="option3">Option 3</option>
                                    </Select>
                                  </HStack>
                                ))}
                              </SimpleGrid>
                            </FormControl>
                          </Stack>
                        </SimpleGrid>
                        <Flex w="100%" justifyContent="center" padding="10px 0">
                          <Button
                            w="300px"
                            size="sm"
                            bgColor="#3f3d56"
                            color="#FFFFFF"
                            _hover={{ opacity: '0.8' }}
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <HStack>
                              <Text>Add Business Space</Text>
                              <Spinner speed="0.65s" size="sm" display={isSubmitting ? 'flex' : 'none'} />
                            </HStack>
                          </Button>
                        </Flex>
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

export default AddBusinessSpace;
