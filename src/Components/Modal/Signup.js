import { useState, useContext } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwt from "jsonwebtoken";
import Dropzone from "react-dropzone";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  InputLeftAddon,
  Stack,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Select,
  Container,
  Box,
  HStack,
  VStack,
  Flex,
  Image,
  Avatar,
  Heading,
  Text,
  Divider,
  useToast,
  useBreakpointValue
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

import { useFileReader } from "../../Hooks/useFileReader";
import { GlobalContext } from "../../Context/GlobalState";
import { signup } from "../../Services/requests";
import { useRouter } from "../../Hooks/useRouter";

const Signup = ({ isOpen, onClose, Asset }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [isSignupActive, setIsSignupActive] = useState(false);
  const handleClick = () => setShow(!show);
  const { DropReader, uploadedFile } = useFileReader();
  const toast = useToast();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  const router = useRouter();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    username: '',
    phone: '',
    country: '',
    featuredActivities: '',
    avatar: {}
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().max(255).email().required('Username or Email is required'),
    password: Yup.string().max(255).required('Password is required'),
    confirmPassword: Yup.string().max(255).required('Enter password again'),
    name: Yup.string().max(255).required('Please enter your name'),
    username: Yup.string().max(255).required('Please enter your username'),
    phone: Yup.string().max(255).required('Please enter your phone number'),
    country: Yup.string().max(255).required('Please enter your country'),
    featuredActivities: Yup.string().max(255).required('Please select featured activities'),
  })

  const handleSignup = (values) => {
    if(values.password !== values.confirmPassword){
      return toast({
        title: "Warning!",
        description: "Passwords does not match!",
        status: "warning",
        duration: 2000,
        isClosable: true,
        variant: "left-accent"
      });
    }
    return setIsSignupActive(true);
  }

  const isSignupData = async (values, setSubmitting) => {
    try{
      const payload = await signup(values);
      if(payload.token){
        jwt.verify(payload.token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
          if (err) return console.log(err);
          dispatch({ type: 'FETCH_CURRENT_USER', payload });
          toast({
            title: "Success!",
            description: "Account created successfully.",
            status: "success",
            duration: 2000,
            isClosable: true,
            variant: "left-accent"
          });
          setSubmitting(false);
          setTimeout(() => {router.push('/activities')}, 3000);
          console.log('DECODED_TOKEN', decoded[0])
          console.log('RESPO_TOKEN', payload)
        });
      }
    }catch{
      toast({
        title: "Failed!",
        description: "No records found",
        status: "error",
        duration: 2000,
        isClosable: true,
        variant: "left-accent"
      });
      console.log('REQUEST ERRORED OUT');
      setSubmitting(false);
    };
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isSignupActive ? 'md' : '2xl'}
        isCentered
        scrollBehavior={winSize == 'sm' ? 'inside' : 'outside'}
      >
        <ModalOverlay />
        <ModalContent
          bgGradient={
            isSignupActive && ("linear-gradient(180deg, #063154 0%, #385a76 55.21%, #cbcbcb 100%)")
          }
        >
          <ModalCloseButton
            w="15px"
            h="15px"
            fontSize="7px"
            color="white"
            bg="#3f3d56"
            borderRadius="50%"
          />
          <ModalBody>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                await isSignupData(values, setSubmitting)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  {isSignupActive ? (
                    <Box
                      bgGradient="linear-gradient(180deg, #063154 0%, #385a76 55.21%, #cbcbcb 100%)"
                      padding="0 20px"
                    >
                      <VStack>
                        <Box
                          paddingTop="0.5rem"
                          textAlign="center"
                          color="#FFFFFF"
                        >
                          <HStack>
                            <Image w="20px" src={Asset.Icon.Logo} />
                            <Heading
                              fontSize="20px"
                              lineHeight="30px"
                              fontWeight="bold"
                              fontFamily="inherit"
                            >
                              TOURTOH
                            </Heading>
                          </HStack>
                          <Text
                            fontSize="15px"
                            lineHeight="20px"
                          >
                            Create Your Profile
                          </Text>
                        </Box>
                        <VStack pos="relative">
                          <Image src={Asset.Image.SignupBG} />
                          <Dropzone onDrop={acceptedFiles => DropReader(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                            <Box  {...getRootProps()}>
                              <Input {...getInputProps()} />
                              <Image
                                w="20px"
                                pos="absolute"
                                zIndex="2"
                                top="100px"
                                right="130px"
                                cursor="pointer"
                                src={Asset.Icon.Photo}
                              />
                              <Input {...getInputProps()} />
                              <Avatar
                                src={uploadedFile}
                                size="xl"
                                pos="absolute"
                                top="40%"
                                left="130px"
                                border="1px solid #063154"
                                cursor="pointer"
                                onChange={(() => (setFieldValue('avatar', uploadedFile)))}
                                onBlur={handleBlur}
                                value={values.avatar}
                              />
                              <Input {...getInputProps()} />
                            </Box>
                            )}
                          </Dropzone>
                        </VStack>
                        <Box bg="#FFFFFF" w="100%" padding="50px" sx={{ marginTop: '-10px !important' }}>
                          <Container>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.NameTag} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Name</FormLabel>
                              </HStack>
                              <Input
                                placeholder="Name"
                                bg="#f9f9f9"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                borderRadius="5px"
                                h="30px"
                                fontSize="10px"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              {errors.name && touched.name && errors.name}
                            </FormControl>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.NameIdentity} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Username</FormLabel>
                              </HStack>
                              <Input
                                placeholder="Username"
                                bg="#f9f9f9"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                borderRadius="5px"
                                h="30px"
                                fontSize="10px"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                              />
                              {errors.username && touched.username && errors.username}
                            </FormControl>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.Phone} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Phone Number</FormLabel>
                              </HStack>
                              <InputGroup isRequired>
                                <InputLeftAddon
                                  w="30%"
                                  h="30px"
                                  fontSize="10px"
                                  padding="0"
                                  children={
                                    <Select 
                                      placeholder="+1"
                                      bg="#f9f9f9"
                                      boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                      borderRadius="5px"
                                      color="#3f3d56"
                                      fontSize="10px"
                                      h="30px"
                                      fontSize="10px"
                                    >
                                      <option>+2</option>
                                      <option>+3</option>
                                      <option>+4</option>
                                      <option>+5</option>
                                    </Select>
                                  } 
                                />
                                <Input
                                  placeholder="Phone Number"
                                  bg="#f9f9f9"
                                  boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                  borderRadius="5px"
                                  h="30px"
                                  fontSize="10px"
                                  name="phone"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.phone}
                                />
                                {errors.phone && touched.phone && errors.phone}
                              </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.Email} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Email</FormLabel>
                              </HStack>
                              <Input
                                placeholder="Email"
                                bg="#f9f9f9"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                borderRadius="5px"
                                h="30px"
                                fontSize="10px"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              {errors.email && touched.email && errors.email}
                            </FormControl>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.Address} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Country/Region</FormLabel>
                              </HStack>
                              <Select 
                                placeholder="Country/Region"
                                bg="#f9f9f9"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                borderRadius="5px"
                                h="30px"
                                color="#3f3d56"
                                fontSize="10px"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                              >
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>USA</option>
                              </Select>
                              {errors.country && touched.country && errors.country}
                            </FormControl>
                            <FormControl isRequired>
                              <HStack>
                                <Image src={Asset.Icon.Work} w="12px" />
                                <FormLabel marginBottom="0" fontSize="12px">Featured Activities</FormLabel>
                              </HStack>
                              <Select 
                                placeholder="Country/Region"
                                bg="#f9f9f9"
                                boxShadow="inset 1px 1px 1px rgba(0, 0, 0, 0.25)"
                                borderRadius="5px"
                                h="30px"
                                color="#3f3d56"
                                fontSize="10px"
                                name="featuredActivities"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.featuredActivities}
                              >
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>USA</option>
                              </Select>
                              {errors.featuredActivities && touched.featuredActivities && errors.featuredActivities}
                            </FormControl>
                            <Button
                              type="submit"
                              size="md"
                              height="30px"
                              width="100%"
                              backgroundColor="#3f3d56"
                              color="#fff"
                              borderRadius="20px"
                              boxShadow="0px 2px 4px rgba(0,0,0,0.25)"
                              marginTop="15px"
                              type="submit"
                              _hover={{ opacity: '0.8' }}
                              disabled={isSubmitting}
                              isLoading={false}
                              loadingText="Loading"
                              spinnerPlacement="start"
                            >
                              NEXT
                            </Button>
                          </Container>
                        </Box>
                      </VStack>
                    </Box>
                  ) : (
                    <>
                      <HStack justifyContent="center">
                        <Image
                          src={Asset.Icon.Logo}
                          display="block"
                          boxSize={['30px', '40px']}
                          margin-right="1rem"
                        />
                        <Heading
                          fontWeight="bold"
                          fontFamily="inherit"
                          fontSize={['2rem', '2rem', '2rem', '2rem']}
                          lineHeight="50px"
                          color="#3f3d56"
                          textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                        >
                          Join us
                        </Heading>
                      </HStack>
                      <Divider
                        border="none"
                        borderBottom="2px solid #3f3d56"
                        opacity="1"
                        marginBottom="10px"
                      />
                      <Flex>
                        <Stack
                          width="50%"
                          display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
                        >
                          <Image height="100%" width="100%" objectFit="cover" src={Asset.Image.AuthBg} alt="phone" />
                        </Stack>
                        <Box
                          bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
                          color="#fff"
                          padding="0.3rem"
                          width={['100%', '100%', '50%', '50%']}
                          textAlign="center"
                          padding="40px"
                        >
                          <Heading  
                            fontSize={['1rem', '2rem']}
                            fontFamily="inherit"
                            lineHeight="40px"
                            textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                          >
                            TOURTOH
                          </Heading>
                          <Text
                            fontSize={['1rem', '1rem']}
                            fontFamily="inherit"
                            lineHeight="38px"
                            textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                          >
                            How you go
                          </Text>
                          <Stack spacing={2}>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<HiOutlineMail color="gray.300" />}
                              />
                              <Input
                                type="text"
                                size="sm"
                                borderRadius="5px"
                                placeholder="Username or Email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              {errors.email && touched.email && errors.email}
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<RiLockPasswordLine color="gray.300" />}
                              />
                              <Input
                                pr="4.5rem"
                                type="password"
                                size="sm"
                                borderRadius="5px"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                              />
                              {errors.password && touched.password && errors.password}
                              <InputRightElement width="4.5rem">
                                <Box h="1.75rem" size="sm" onClick={handleClick}>
                                  {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </Box>
                              </InputRightElement>
                            </InputGroup>
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents="none"
                                children={<RiLockPasswordLine color="gray.300" />}
                              />
                              <Input
                                pr="4.5rem"
                                type="password"
                                size="sm"
                                borderRadius="5px"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                              />
                              {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                              <InputRightElement width="4.5rem">
                                <Box h="1.75rem" size="sm" onClick={handleClick}>
                                  {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </Box>
                              </InputRightElement>
                            </InputGroup>
                            <Button
                              size="sm"
                              bgColor="#3f3d56"
                              marginTop="0.9rem"
                              _hover={{ opacity: '0.8' }}
                              isLoading={isSubmitting}
                              loadingText="Loading"
                              spinnerPlacement="start"
                              onClick={() => (handleSignup(values))}
                            >
                             Sign up
                            </Button>
                            <HStack>
                              <Divider border="1px solid" bgColor="#fff" />
                              <Text fontSize={['12px', '14px']} padding="0px 10px">OR</Text>
                              <Divider border="0.00001rem solid" bgColor="#fff" />
                            </HStack>
                            <ButtonGroup variant="solid" marginTop="1rem">
                              <Stack width="100%">
                                <Button 
                                  lineHeight="33px"
                                  color="#ffc367"
                                  lineHeight="38px"
                                  size="sm"
                                  borderRadius="5px"
                                  fontSize={['14px', '14px']}
                                >
                                  <FcGoogle />
                                  <Text>Signup with Google</Text>
                                </Button>
                                <Button 
                                  size="sm"
                                  borderRadius="5px"
                                  fontSize={['14px', '14px']}
                                  lineHeight="33px"
                                  color="#ffc367"
                                  lineHeight="38px"
                                >
                                  <DiApple color="#000" />
                                  <Text color="#fee05f">Signup with Apple</Text>
                                </Button>
                                <Button 
                                  size="sm"
                                  borderRadius="5px"
                                  fontSize={['14px', '14px']}
                                  lineHeight="33px"
                                  color="#ffc367"
                                  lineHeight="38px"
                                >
                                  <AiFillFacebook color="#2c66bb" />
                                  <Text color="#2c66bb">Signup with Facebook</Text>
                                </Button>
                              </Stack>
                            </ButtonGroup>
                          </Stack>    
                        </Box>
                      </Flex>
                    </>
                  )}
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
