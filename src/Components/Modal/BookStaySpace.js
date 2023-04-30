import { Formik } from "formik";
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
  Divider,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Spacer,
  useBreakpointValue
} from "@chakra-ui/react";

const BookStaySpace = ({ isOpen, onClose, Asset }) => {

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
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
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
              Book Stay Space
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
                        <Stack
                          spacing={2}
                          padding={['10px 20px', '10px 20px']}
                        >
                          <FormControl>
                            <FormLabel fontWeight="700" fontSize="20px">Date/s & Time</FormLabel>
                            <Stack
                              direction={{ base: 'column', md: 'row' }}
                              justifyContent="center"
                            >
                              <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.CalendarSchedule} />
                                <Input
                                  size="sm"
                                  type="date"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                              <Spacer />
                              <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.CheckInTime} />
                                <Input
                                  size="sm"
                                  type="time"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                              <Spacer />
                              <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.CheckOutTime} />
                                <Input
                                  size="sm"
                                  type="time"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                            </Stack>
                          </FormControl>
                          <FormControl paddingTop="30px">
                            <Stack
                              direction={{ base: 'column', md: 'row' }}
                              justifyContent="space-between"
                            >
                              <HStack w={['100%', '50%']} justifyContent="space-between">
                                <HStack>
                                  <Image boxSize="30px" objectFit="contain" src={Asset.Icon.DonationsOnly} />
                                  <Text fontSize="12px">Or, Check If Donations Only:</Text>
                                </HStack>
                                <Checkbox
                                  sx={{
                                    span: {
                                      w: 10,
                                      h: 8,
                                      borderRadius: 5,
                                      boxShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                                      bg: '#F9F9F9'
                                    }
                                  }}
                                />
                              </HStack>
                              <HStack w={['100%', '50%']}>
                                <HStack>
                                  <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                                  <Text fontSize="12px">Amount Pledged at Booking Request:</Text>
                                </HStack>
                                <Input
                                  size="sm"
                                  w="70%"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                            </Stack>
                          </FormControl>
                          <FormControl paddingTop={['10px', '30px']}>
                            <Stack
                              direction={{ base: 'column', md: 'row' }}
                              justifyContent="space-between"
                            >
                              <Text fontSize="12px">On day of Tour, travellers are asked to input the total amount given:</Text>
                              <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                                <Input
                                  size="sm"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                            </Stack>
                          </FormControl>
                          <FormControl paddingTop={['10px', '30px']}>
                            <Stack
                              direction={{ base: 'column', md: 'row' }}
                              justifyContent="space-between"
                            >
                              <Text fontSize="12px">On day of Tour, Guides are asked to input the total amount recieved:</Text>
                              <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                                <Input
                                  size="sm"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="propertyName"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.propertyName}
                                />
                              </HStack>
                            </Stack>
                          </FormControl>
                        </Stack>
                        <Flex w="100%" justifyContent="center" padding="10px 0">
                          <Button
                            isLoading={isSubmitting}
                            loadingText="Submitting"
                            bgColor="#3f3d56"
                            color="#FFFFFF"
                            size="sm"
                            padding={['10px 50px', '10px 100px']}
                          >
                            BOOK NOW
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

export default BookStaySpace;
