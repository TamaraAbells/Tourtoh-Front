import { Formik } from "formik";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  VStack,
  Flex,
  Box,
  Button,
  HStack,
  Text,
  Input,
  Divider,
  FormControl,
  FormLabel,
  Spacer,
  Select,
  useBreakpointValue
} from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";

const CreateGroupTour = ({ isOpen, onClose }) => {
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
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
    setSubmitting(true)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      isCentered
      scrollBehavior={winSize == 'sm' ? 'inside' : 'outside'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          boxSize="15px"
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
            fontSize={['1rem']}
          >
            Create Group Tour
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
                      <Stack spacing={2} padding={['10px', '10px 40px']}>
                        <FormControl>
                          <FormLabel fontWeight="600" fontSize="15px">Amount of Time</FormLabel>
                          <Stack
                            direction={{ base: 'column', md: 'row' }}
                            justifyContent="center"
                            paddingLeft={[0, '50px']}
                          >
                            <Stack w={['100%', '20%']} marginTop="5px">
                              <Input
                                size="sm"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                fontSize="12px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              />
                            </Stack>
                            <Spacer padding="0 20px" />
                            <VStack w={['100%', '35%']} lineHeight="40px">
                              <Select
                                size="sm"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                placeholder="Select skill/knowledge"
                                fontSize="12px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </Select>
                              <Select
                                size="sm"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                placeholder="Select Business Space"
                                fontSize="12px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </Select>
                              <Input
                                size="sm"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                placeholder="Custom(Example 10Min Break)"
                                fontSize="10px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              />
                            </VStack>
                            <Spacer padding="0 20px" />
                            <VStack w={['100%', '35%']} lineHeight="40px">
                              <Select
                                size="sm"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                bg="#F9F9F9"
                                borderColor="#3f3d56"
                                borderRadius="5px"
                                name="propertyName"
                                placeholder="Select Stay Space"
                                fontSize="12px"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertyName}
                              >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                              </Select>
                              <HStack w="100%">
                                <Input
                                  size="sm"
                                  type="date"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  name="propertyName"
                                  placeholder="Date In"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                                <Input
                                  size="sm"
                                  type="date"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  fontSize="12px"
                                  name="propertyName"
                                  placeholder="Date Out"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                              <HStack w="100%" justifyContent="flex-end">
                                <Text fontSize="12px">Time Slot:</Text>
                                <Input
                                  w="50%"
                                  size="sm"
                                  type="time"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderColor="#3f3d56"
                                  borderRadius="5px"
                                  fontSize="12px"
                                  name="propertyName"
                                  placeholder="Hours"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                            </VStack>
                          </Stack>
                          <Divider marginTop="10px" />
                        </FormControl>
                        <FormControl>
                          <Flex justifyContent="flex-end">
                            <Button
                              h="30px"
                              colorScheme="teal"
                              borderRadius="5px"
                              fontSize="12px"
                              rightIcon={<GrAddCircle />}
                            >
                              Add More
                            </Button>
                          </Flex>
                        </FormControl>
                      </Stack>
                      <FormControl>
                        <Stack padding={['10px', '10px 40px']}>
                          <FormLabel
                            fontSize="14px"
                            fontWeight="700"
                            textAlign="left"
                          >
                              Group Tour Schedule
                          </FormLabel>
                          <Box
                            textAlign="center"
                            fontSize="11px"
                            boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                            borderRadius="5px"
                            padding="10px"
                          >
                            <Stack
                              direction={{ base: 'column', md: 'row' }}
                              border="1px solid #3f3d56"
                              borderRadius="5px"
                              padding="0"
                            >
                              <Stack borderRight={{ base: 0, md: '1px solid #3f3d56' }}>
                                <HStack borderBottom="1px solid #3f3d56">
                                  <Box borderRight="1px solid #3f3d56" padding="10px">
                                    <VStack>
                                      <Text>Intro to Sewing</Text>
                                      <Text>1 Hour</Text>
                                    </VStack>
                                  </Box>
                                  <Box borderRight="1px solid #3f3d56" padding="10px">
                                    <VStack>
                                      <Text>Practice Time</Text>
                                      <Text>45 Min</Text>
                                    </VStack>
                                  </Box>
                                  <Box padding="10px">
                                    <VStack>
                                      <Text>Altering Clothes</Text>
                                      <Text>1 Hour</Text>
                                    </VStack>
                                  </Box>
                                </HStack>
                                <Box padding="10px">
                                  <Text textAlign="center">+ Western Warehouse</Text>
                                </Box>
                              </Stack>
                              <Stack direction="row" borderTop={{ base: '1px solid #3f3d56', md: 0 }}>
                                <Box borderRight="1px solid #3f3d56" padding="10px">
                                  <VStack>
                                    <Text>Walking Time</Text>
                                    <Text>20 Min</Text>
                                  </VStack>
                                </Box>
                                <Box borderRight="1px solid #3f3d56" padding="10px">
                                  <VStack>
                                    <Text>Sarah's Sandwitches</Text>
                                    <Text>1 Hour</Text>
                                  </VStack>
                                </Box>
                                <Box padding="10px">
                                  <VStack>
                                    <Text>Hilop Manor</Text>
                                    <Text>1 Hour</Text>
                                  </VStack>
                                </Box>
                              </Stack>
                            </Stack>
                          </Box>
                        </Stack>
                      </FormControl>
                      <Flex w="100%" justifyContent="center" padding="10px 0">
                        <Button
                          isLoading={isSubmitting}
                          loadingText="Submitting"
                          bgColor="#3f3d56"
                          color="#FFFFFF"
                          size="sm"
                          padding={['10px 50px', '10px 100px']}
                        >
                          CREATE TOUR
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
  );
};

export default CreateGroupTour;
