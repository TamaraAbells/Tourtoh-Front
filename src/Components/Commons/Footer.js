import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Stack,
  Image,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  FormControl,
  Input,
  Button,
  Divider,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { IoLocationOutline, IoLogoTwitter } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Footer = ({ Asset }) => {
  return (
    <>
      <Box
        width="100%"
        marginTop="5rem"
        padding="3rem"
        bgImage={Asset.Image.FooterBg}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="#fff"
      >
        <Stack
          direction={useBreakpointValue({ base: 'column', sm: 'column', md: 'row', lg: 'row'})}
          justifyContent="space-evenly"
        >
          <Stack
            width={useBreakpointValue({ base: '100%', sm: '100%', md: '50%', lg: '20%'})}
            alignItems={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            paddingTop={useBreakpointValue({ base: '10px', sm: '10px ', md: null, lg: null })}
          >
            <Image boxSize={useBreakpointValue(['70px', '100px'])} src={Asset.Icon.Logo} alt="logo" />
          </Stack>
          <Stack
            width={useBreakpointValue({ base: '100%', sm: '100%', md: '50%', lg: '20%'})}
            alignItems={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            paddingTop={useBreakpointValue({ base: '20px', sm: '20px ', md: null, lg: null })}
          >
            <Heading fontSize="lg">Contact Us</Heading>
            <HStack>
              <Text><IoLocationOutline /></Text>
              <Text textAlign={useBreakpointValue(['center', 'left'])}>389 South Hill Field Drive Fenton, MI 48430</Text>
            </HStack>
            <HStack>
              <Text><AiOutlineMail /></Text>
              <Text>tourtor@tourtor.com</Text>
            </HStack>
            <HStack>
              <Text><AiOutlinePhone /></Text>
              <Text>+1-202-555-0174 </Text>
            </HStack>
          </Stack>
          <Stack
            width={useBreakpointValue({ base: '100%', sm: '100%', md: '50%', lg: '20%'})}
            alignItems={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            paddingTop={useBreakpointValue({ base: '20px', sm: '20px ', md: null, lg: null })}
          >
            <Heading fontSize="lg">Recently Visited</Heading>
            <HStack>
              <Image src={Asset.Image.Fot1} alt="img" />
              <Box>
                <Link as={RouterLink} to="#"><Text>Hikes</Text></Link>
                <Link as={RouterLink} to="#"><Text>Preview</Text></Link>
              </Box>
            </HStack>
            <HStack>
              <Image src={Asset.Image.Fot1} alt="img" />
              <Box>
                <Link as={RouterLink} to="#"><Text>Hikes</Text></Link>
                <Link as={RouterLink} to="#"><Text>Preview</Text></Link>
              </Box>
            </HStack>
            <HStack>
              <Link as={RouterLink} to="#"><Text>BROWSE ALL</Text></Link>
              <Link as={RouterLink} to="#"><Text>{" "}<BsArrowRight /></Text></Link>
            </HStack>
          </Stack>
          <Stack
            width={useBreakpointValue({ base: '100%', sm: '100%', md: '50%', lg: '20%'})}
            alignItems={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            paddingTop={useBreakpointValue({ base: '20px', sm: '20px ', md: null, lg: null })}
          >
            <Heading fontSize="lg">Quick links</Heading>
            <List>
              <Stack>
                <ListItem as={RouterLink} to="#">- {' '}Home Page</ListItem>
                <ListItem as={RouterLink} to="#">- {' '}About Us</ListItem>
                <ListItem as={RouterLink} to="#">- {' '}Destinations</ListItem>
              </Stack>
            </List>
          </Stack>
          <Stack
            width={useBreakpointValue({ base: '100%', sm: '100%', md: '50%', lg: '20%'})}
            alignItems={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            paddingTop={useBreakpointValue({ base: '20px', sm: '20px ', md: null, lg: null })}
          >
            <Heading fontSize="lg">Newsletter</Heading>
            <Text textAlign="center">Register with us to receive latest travel promotions from us.</Text>
            <FormControl>
              <Stack>
                <Input type="text" placeholder="Enter Your Email Here" />
                <Button colorScheme="cyan" color="white">Sign Up</Button>
              </Stack>
            </FormControl>
          </Stack>
        </Stack>
        <Stack>
          <HStack
            justifyContent={useBreakpointValue({ base: 'center', sm: 'center ', md: 'flex-start', lg: 'flex-start' })}
            marginTop={useBreakpointValue({ base: '20px', sm: '20px ', md: null, lg: null })}
          >
            <Box>Follow Us On</Box>
            <Box as={RouterLink} to="#"><IoLogoTwitter /></Box>
            <Box as={RouterLink} to="#"><AiFillFacebook /></Box>
            <Box as={RouterLink} to="#"><AiOutlineInstagram /></Box>
            <Box as={RouterLink} to="#"><AiOutlineYoutube /></Box>
          </HStack>
          <Divider />
          <Flex
            justifyContent="space-between"
            flexDirection={useBreakpointValue({ base: 'column', sm: 'column', md: 'row', lg: 'row' })}
          >
            <HStack
              justifyContent={useBreakpointValue({ base: 'center', sm: 'center ', md: 'space-between', lg: 'space-between' })}
            >
              <Link as={RouterLink} to="#">
                <Text
                  fontSize={useBreakpointValue({ base: '12px', sm: '12px ', md: '16px', lg: '16px'})}
                >
                  Privacy Policy | 
                </Text>
              </Link>
              <Link as={RouterLink} to="#">
                <Text
                  fontSize={useBreakpointValue({ base: '12px', sm: '12px ', md: '16px', lg: '16px'})}
                >
                  Terms of Use | 
                </Text>
              </Link>
              <Link as={RouterLink} to="#">
                <Text
                  fontSize={useBreakpointValue({ base: '12px', sm: '12px ', md: '16px', lg: '16px'})}
                > 
                  Compliance
                </Text>
              </Link>
            </HStack>
            <Flex
              justifyContent={useBreakpointValue({ base: 'center', sm: 'center ', md: 'space-between', lg: 'space-between' })}
              marginTop={useBreakpointValue({ base: '10px', sm: '10px ', md: null, lg: null })}
            >
              <Text
                fontSize={useBreakpointValue({ base: '12px', sm: '12px ', md: '16px', lg: '16px' })}
              >
                Copyright @{new Date().getFullYear()} Tourtor, All rights
                reserved.
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
