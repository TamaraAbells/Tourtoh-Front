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
  Button,
  HStack,
  Text,
  Input,
  InputGroup,
  Textarea,
  Divider,
  Checkbox,
  FormControl,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";

const BecomeAGuide = ({ isOpen, onClose, Asset }) => {
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
              fontSize={useBreakpointValue(['1rem', '1rem'])}
            >
              Become A Giude
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
                        <Stack spacing={2} padding="10px">
                          <FormControl>
                            <HStack
                              flexDir={{ base: 'column', md: 'row' }}
                              justifyContent="space-between"
                              alignItems="start"
                            >
                              <HStack w={['100%', '35%']}>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.TranslationTranslator} />
                                <Text fontSize="12px">Spoken Language:</Text>
                              </HStack>
                              <HStack w="100%" alignItems="center" justifyContent="space-between">
                                <Stack w="60%" alignItems="flex-end">
                                  <Input
                                    size="sm"
                                    boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                    bg="#F9F9F9"
                                    borderRadius="5px"
                                    name="language"
                                    fontSize="12px"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.language}
                                  />
                                  <Button
                                    w={['45%', '30%']}
                                    alignSelf={{ base: 'start', md: 'inherit' }}
                                    h="20px"
                                    colorScheme="twitter"
                                    borderRadius="5px"
                                    fontSize="10px"
                                    rightIcon={<GrAddCircle />}
                                  >
                                    Language
                                  </Button>
                                </Stack>
                                <HStack w="25%" justifyContent="flex-end">
                                  <VStack>
                                    <Checkbox
                                      sx={{
                                        span: {
                                          w: 8,
                                          h: 8,
                                          borderRadius: 5,
                                          boxShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                                          bg: '#F9F9F9'
                                        }
                                      }}
                                    />
                                    <Text fontSize="12px">Ok</Text>
                                  </VStack>
                                  <VStack>
                                    <Checkbox
                                      sx={{
                                        span: {
                                          w: 8,
                                          h: 8,
                                          borderRadius: 5,
                                          boxShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                                          bg: '#F9F9F9'
                                        }
                                      }}
                                    />
                                    <Text fontSize="12px">Nicely</Text>
                                  </VStack>
                                  <VStack>
                                    <Checkbox
                                      sx={{
                                        span: {
                                          w: 8,
                                          h: 8,
                                          borderRadius: 5,
                                          boxShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                                          bg: '#F9F9F9'
                                        }
                                      }}
                                    />
                                    <Text fontSize="12px">Fluent</Text>
                                  </VStack>
                                </HStack>
                              </HStack>
                            </HStack>
                          </FormControl>
                          <FormControl paddingTop="10px">
                            <HStack
                              justifyContent="space-between"
                              alignItems="start"
                              flexDir={{ base: 'column', md: 'row' }}
                            >
                              <HStack w={['100%', '40%']}>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.Guide} />
                                <Text fontSize="12px">Time Working as Giude:</Text>
                              </HStack>
                              <InputGroup>
                                <HStack>
                                  <Input
                                    w={['44%', '50%']}
                                    size="sm"
                                    type="date"
                                    boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                    bg="#F9F9F9"
                                    borderRadius="5px"
                                    name="workingTime"
                                    fontSize="12px"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.workingTime}
                                  />
                                  <Input
                                    w={['44%', '50%']}
                                    size="sm"
                                    type="date"
                                    boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                    bg="#F9F9F9"
                                    borderRadius="5px"
                                    name="workingTime"
                                    fontSize="12px"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.workingTime}
                                  />
                                </HStack>
                              </InputGroup>
                            </HStack>
                          </FormControl>
                          <FormControl paddingTop="10px">
                            <HStack
                              alignItems={{ base: 'center', md: 'start' }}
                              flexDir={{ base: 'column', md: 'row' }}
                              marginRight="10px"
                              
                            >
                              <HStack
                                justifyContent={{ base: 'space-between', md: 'start'}}
                                w={['100%', 'inherit']}
                                marginRight={['-10px', 0]}
                                paddingBottom={['10px', 0]}
                              >
                                <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.GroupTour} />
                                <Text fontSize="12px">Private Tours:</Text>
                                </HStack>
                                <HStack>
                                  <Text fontSize="12px">Yes</Text>
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
                              </HStack>
                              <HStack
                                justifyContent={{ base: 'space-between', md: 'start'}}
                                w={['100%', 'inherit']}
                                paddingBottom={['10px', 0]}
                              >
                                <HStack>
                                <Image boxSize="30px" objectFit="contain" src={Asset.Icon.MoneyPayment} />
                                <Text fontSize="12px">Hourly Rate:</Text>
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
                              <HStack
                                justifyContent={{ base: 'space-between', md: 'start'}}
                                w={['100%', 'inherit']}
                              >
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
                            </HStack>
                          </FormControl>
                          <FormControl paddingTop="10px">
                            <Stack justifyContent="space-between">
                              <HStack
                                padding={['0px 0px', '0 40px']}
                                flexDir={{ base: 'column', md: 'row' }}
                                alignItems={{ base: 'start', md: 'center' }}
                              >
                                <Text
                                  w={['100%', '50%']}
                                  fontSize="12px"
                                >
                                  Common Traveller Needs (Check all that apply)
                                </Text>
                                <Input
                                  size="sm"
                                  w={['100%', '50%']}
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="suggestedDonation"
                                  fontSize="12px"
                                  placeholder="Suggested Donation/per hour"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.suggestedDonation}
                                />
                              </HStack>
                              <Stack
                                padding={['10px 10px', '10px 40px']}
                                alignSelf="start"
                                w={['100%', 'inherit']}
                              >
                                <Stack
                                  direction={{ base: 'column', md: 'row' }}
                                  justifyContent="space-between"
                                >
                                  <HStack justifyContent="space-between" w={['100%', '40%']}>
                                    <HStack>
                                    <Image boxSize="30px" objectFit="contain" src={Asset.Icon.NavigationNavigator} />
                                    <Text fontSize="12px">Navigator</Text>
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
                                  <HStack justifyContent="space-between" w={['100%', '40%']}>
                                    <HStack>
                                    <Image boxSize="30px" objectFit="contain" src={Asset.Icon.TranslationTranslator} />
                                    <Text fontSize="12px">Translator</Text>
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
                                </Stack>
                                <Stack
                                  direction={{ base: 'column', md: 'row' }}
                                  justifyContent="space-between"
                                >
                                  <HStack justifyContent="space-between" w={['100%', '40%']}>
                                    <HStack>
                                    <Image boxSize="30px" objectFit="contain" src={Asset.Icon.Shopping} />
                                    <Text fontSize="12px">Shopping Helper</Text>
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
                                  <HStack justifyContent="space-between" w={['100%', '40%']}>
                                    <HStack>
                                    <Image boxSize="30px" objectFit="contain" src={Asset.Icon.Safety} />
                                    <Text fontSize="12px">Safety Companion</Text>
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
                                </Stack>
                              </Stack>
                              <Stack padding={['0', '0 40px']}>
                                <HStack>
                                  <Image objectFit="contain" boxSize="4" src={Asset.Icon.Write} />
                                  <Text w="50%" fontSize="12px">Greeting</Text>
                                </HStack>
                                <Textarea
                                  resize="none"
                                  size="sm"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  bg="#F9F9F9"
                                  borderRadius="5px"
                                  name="greeting"
                                  fontSize="12px"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.greeting}
                                />
                              </Stack>
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
                            Become a Guide
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

export default BecomeAGuide;
