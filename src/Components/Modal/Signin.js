import { useState, useContext } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
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
  Stack,
  ButtonGroup,
  Button,
  Box,
  HStack,
  Flex,
  Image,
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

import { GlobalContext } from "../../Context/GlobalState";
import { signin } from "../../Services/requests";
import { useRouter } from "../../Hooks/useRouter";

const Signin = ({ isOpen, onClose, Asset }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  const router = useRouter();

  const isLoggedInData = async (values, setSubmitting) => {
    try{
      const payload = await signin(values);
      dispatch({ type: 'FETCH_CURRENT_USER', payload });
      toast({
        title: "Success!",
        description: "Account logged in successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
        variant: "left-accent"
      });
      setSubmitting(false);
      return setTimeout(() => {router.push('/activities')}, 3000);
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
      // setSubmitting(false);
    };
  };

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
            <HStack justifyContent="center">
              <Image
                src={Asset.Icon.Logo}
                display="block"
                boxSize={useBreakpointValue(['30px', '40px'])}
                margin-right="1rem"
              />
              <Heading
                fontWeight="bold"
                fontFamily="inherit"
                fontSize={useBreakpointValue(['2rem', '2rem', '2rem', '2rem'])}
                lineHeight="50px"
                color="#3f3d56"
                textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              >
                Login
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
                display={useBreakpointValue({ base: 'none', sm: 'none', md: 'flex', lg: 'flex' })}
              >
                <Image height="100%" width="100%" objectFit="cover" src={Asset.Image.AuthBg} alt="phone" />
              </Stack>
              <Box
                bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
                color="#fff"
                padding="0.3rem"
                width={useBreakpointValue(['100%', '100%', '50%', '50%'])}
                textAlign="center"
                padding="40px"
              >
                <Heading  
                  fontSize={useBreakpointValue(['1rem', '2rem'])}
                  fontFamily="inherit"
                  lineHeight="40px"
                  textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                >
                  TOURTOH
                </Heading>
                <Text
                  fontSize={useBreakpointValue(['1rem', '1rem'])}
                  fontFamily="inherit"
                  lineHeight="38px"
                  textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
                >
                  Your adventures are waiting
                </Text>
                <Formik
                  initialValues={{
                    email: '',
                    password: ''
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().max(255).required('Username or Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    isLoggedInData(values, setSubmitting)
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
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
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
                        <Button
                          size="sm"
                          bgColor="#3f3d56"
                          marginTop="0.9rem"
                          _hover={{ opacity: '0.8' }}
                          type="submit"
                          isLoading={isSubmitting}
                          loadingText="Loading"
                          spinnerPlacement="start"
                        >
                          Login
                        </Button>
                        <HStack>
                          <Divider border="1px solid" bgColor="#fff" />
                          <Text fontSize={['12px', '14px']} padding="0px 10px">OR</Text>
                          <Divider border="0.00001rem solid" bgColor="#fff" />
                        </HStack>
                        <ButtonGroup variant="solid" marginTop="1rem">
                          <Stack width="100%">
                          <Button
                              size="sm"
                              borderRadius="5px"
                              fontSize={['14px', '14px']}
                              lineHeight="33px"
                              color="#ffc367"
                              lineHeight="38px"
                            >
                              <FcGoogle />
                              <Text>Login with Google</Text>
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
                              <Text color="#fee05f">Login with Apple</Text>
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
                              <Text color="#2c66bb">Login with Facebook</Text>
                            </Button>
                          </Stack>
                        </ButtonGroup>
                      </Stack>
                    </form>
                  )}
                </Formik>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signin;
