import { Link as RouterLink } from "react-router-dom";
import {
  useDisclosure,
  Box,
  Flex,
  HStack,
  Stack,
  Image,
  Avatar,
  ButtonGroup,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  List,
  ListItem,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Signin, Signup } from "../Modal";

const HeaderSecondary = ({ Asset, user }) => {
  const { isOpen: signinIsOpen, onClose: signinOnClose, onOpen: signinOnOpen } = useDisclosure();
  const { isOpen: signupIsOpen, onClose: signupOnClose, onOpen: signupOnOpen } = useDisclosure();
  const { isOpen: sidebarIsOpen, onClose: sidebarOnClose, onOpen: sidebarOnOpen } = useDisclosure();

  return (
    <>
      <Box
        Width="100vw"
        height="14vh"
        bgImage={Asset.Icon.NavBg}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        padding="0.5rem 0.5rem 2rem 3rem"
      >
        <HStack justifyContent="space-between">
          <Box boxSize={useBreakpointValue(['40px', '55px'])}>
            <Image src={Asset.Icon.Logo} objectFit="contain" />
          </Box>
            <HStack>
              <ButtonGroup display={useBreakpointValue({ base: 'none', sm: 'none', md: 'flex', lg: 'flex' })}>
                <Button
                  variant="outline" 
                  onClick={signupOnOpen}
                  width="100px"
                  height="30px"
                  padding="0.3rem"
                  marginRight="1rem"
                  border="1.2px solid #2f2e41"
                  borderRadius="15px"
                  transition="all 1s ease-in-out"
                  fontSize="1rem"
                >
                  sign up
                </Button>
                <Button
                  variant="filled"
                  onClick={signinOnOpen}
                  width="100px"
                  height="30px"
                  padding="0.3rem"
                  marginRight="1rem"
                  border="1.2px solid #2f2e41"
                  bgColor="#2f2e41"
                  color="white"
                  borderRadius="15px"
                  transition="all 1s ease-in-out"
                  fontSize="1rem"
                >
                  login
                </Button>
              </ButtonGroup>
              <Button onClick={sidebarOnOpen} variant="ghost">
                <HamburgerIcon />
              </Button>
              <Drawer isOpen={sidebarIsOpen} placement="right" onClose={sidebarOnClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  {user && (
                    <Flex
                      direction="column"
                      justifyContent="space-between"
                      height="350px" 
                      onClick={sidebarOnClose}
                    >
                      <Box
                        width="25px"
                        height="15px"
                        position="absolute"
                        left="65px"
                        top="40px"
                      >
                        <Image src={Asset.Icon.SMHeart} alt="heart" />
                      </Box>
                      <Avatar src={user.avatar} size="sm" border="2px solid #3f3d56" />
                      <List 
                        fontSize="25px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-evenly"
                        height="100%"
                      >
                        <ListItem><Link as={RouterLink} to="">Destinations</Link></ListItem>
                        <ListItem><Link as={RouterLink} to="/activities">Activities</Link></ListItem>
                        <ListItem><Link as={RouterLink} to="search">Search</Link></ListItem>
                        <ListItem><Link as={RouterLink} to="">More</Link></ListItem>
                      </List>
                    </Flex>
                  )}
                  <ButtonGroup width="100%" paddingTop="20vh">
                    <Stack width="100%">
                      <Button
                        variant="outline" 
                        onClick={signupOnOpen}
                        width="100%"
                        height="30px"
                        padding="0.3rem"
                        marginRight="1rem"
                        border="1.2px solid #2f2e41"
                        borderRadius="15px"
                        transition="all 1s ease-in-out"
                        fontSize="1rem"
                      >
                        sign up
                      </Button>
                      <Button
                        variant="filled"
                        onClick={signinOnOpen}
                        width="100%"
                        height="30px"
                        padding="0.3rem"
                        marginRight="1rem"
                        border="1.2px solid #2f2e41"
                        bgColor="#2f2e41"
                        color="white"
                        borderRadius="15px"
                        transition="all 1s ease-in-out"
                        fontSize="1rem"
                      >
                        login
                      </Button>
                    </Stack>
                  </ButtonGroup>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </HStack>
        </HStack>
        <Box>
          <Signin
            isOpen={signinIsOpen}
            onClose={signinOnClose}
            title="Login"
            Asset={Asset}
          />
          <Signup
            isOpen={signupIsOpen}
            onClose={signupOnClose}
            title="Join us"
            Asset={Asset}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeaderSecondary;
