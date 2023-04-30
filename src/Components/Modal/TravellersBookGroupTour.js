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
  Checkbox,
  FormControl,
  Image,
  Spacer,
  useBreakpointValue
} from "@chakra-ui/react";

const TravellersBookGroupTour = ({ isOpen, onClose, Asset }) => {
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
            fontSize={['1rem']}
          >
            Travellers Book Group Tour Page
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
                      <Stack spacing={2} padding={['10px 20px', '10px 40px']}>
                        <FormControl>
                          <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
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
                          </Stack>
                        </FormControl>
                      </Stack>
                      <FormControl>
                        <Stack padding={['10px', '10px 40px']}>
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
                      <FormControl paddingTop="30px">
                        <Stack
                          direction={{ base: 'column', md: 'row' }}
                          justifyContent="space-between"
                          padding={['0 10px', '0 60px']}
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
                          <HStack w={['100%', '50%']} justifyContent="space-between">
                            <HStack>
                              <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                              <Text fontSize="12px">Amount Pledged:</Text>
                            </HStack>
                            <Input
                              size="sm"
                              w="53%"
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
                          padding={['0 10px', '0 60px']}
                        >
                          <Text fontSize="12px">On day of Tour, travellers are asked to input the total amount given:</Text>
                          <HStack>
                            <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                            <Input
                              size="sm"
                              w="100%"
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
                          padding={['0 10px', '0 60px']}
                        >
                          <Text fontSize="12px">On day of Tour, Guides are asked to input the total amount recieved:</Text>
                          <HStack>
                            <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                            <Input
                              size="sm"
                              w="100%"
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
                      <Flex w="100%" justifyContent="center" padding="20px 0">
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
  );
};

export default TravellersBookGroupTour;
