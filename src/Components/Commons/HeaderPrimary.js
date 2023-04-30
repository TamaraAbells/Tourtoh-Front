import {
  Flex,
  HStack,
  Box,
  Stack,
  List,
  ListItem,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useBreakpointValue
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useRouter } from "../../Hooks/useRouter";
import { signout } from "../../Services/requests";
import {
  Signin,
  Signup,
  Search,
  BecomeAGuide,
  CreateGroupTour,
  TravellersBookGroupTour,
  BookStaySpace,
  // AddBusinessSpace,
  // CreateReview,
  // CreateSkills
} from "../Modal";

const HeaderPrimary = ({ user, Asset }) => {
  const router = useRouter();
  const { isOpen: onSigninIsOpen, onOpen: onSigninOnOpen, onClose: onSigninOnClose } = useDisclosure();
  const { isOpen: onSignupIsOpen, onOpen: onSignupOnOpen, onClose: onSignupOnClose } = useDisclosure();
  const { isOpen: onSidebarIsOpen, onOpen: onSidebarOnOpen, onClose: onSidebarOnClose } = useDisclosure();
  const { isOpen: onSearchIsOpen, onOpen: onSearchOnOpen, onClose: onSearchOnClose } = useDisclosure();
  const { isOpen: onGuideIsOpen, onOpen: onGuideOnOpen, onClose: onGuideOnClose } = useDisclosure();
  const { isOpen: onGroupTourIsOpen, onOpen: onGroupTourOnOpen, onClose: onGroupTourOnClose } = useDisclosure();
  const { isOpen: onTravellerTourIsOpen, onOpen: onTravellerTourOnOpen, onClose: onTravellerTourOnClose } = useDisclosure();
  const { isOpen: staySpaceIsOpen, onOpen: staySpaceOnOpen, onClose: staySpaceOnClose } = useDisclosure();
  // const { isOpen: businessSpaceIsOpen, onOpen: businessSpaceOnOpen, onClose: businessSpaceOnClose } = useDisclosure();
  // const { isOpen: reviewIsOpen, onOpen: reviewOnOpen, onClose: reviewOnClose } = useDisclosure();
  // const { isOpen: skillsIsOpen, onOpen: skillsOnOpen, onClose: skillsOnClose } = useDisclosure();

  return (
    <>
      <Flex
        width="100%"
        height={useBreakpointValue(['10vh', '12vh'])}
        alignItems="center"
        justifyContent="space-between"
        padding={useBreakpointValue([ '1rem', '1rem 3rem' ])}
        background="#FFF"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <HStack width="100%">
          <Box
            boxSize="50px"
            borderRadius="100%"
            overflow="hidden"
            marginRight="2rem"
          >
            <RouterLink to="/">
              <Box boxSize={useBreakpointValue(['40px', '55px'])}>
                <Image src={Asset.Icon.Logo} objectFit="contain" />
              </Box>
            </RouterLink>
          </Box>
          <List
            display={useBreakpointValue({ base: 'none', md: 'flex' })}
            alignItems="center"
            justifyContent="space-evenly"
            width={useBreakpointValue({ base: 'none', md: '100%', lg: '50%' })}
            listStyle="none"
            marginBottom="0"
            fontStyle="normal"
            fontWeight="500"
            fontSize="1.3rem"
            lineHeight="28px"
            color="#3f3d56"
            textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
          >
            <ListItem as={RouterLink} to="/destinations">Destinations</ListItem>
            <ListItem as={RouterLink} to="/activities">Activities</ListItem>
            <ListItem as={RouterLink} onClick={onSearchOnOpen}>Search</ListItem>
            <ListItem>
              <Menu isLazy>
                <MenuButton as={Link} rightIcon={<ChevronDownIcon />}>More</MenuButton>
                <MenuList fontSize="16px">
                  <MenuGroup title="LINKS">
                    <MenuItem as={RouterLink} to="/add-stay-space">Add Stay Space</MenuItem>
                    <MenuItem as={RouterLink} to="/private-tour-request">Private Tour Request</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="MODALS">
                    <MenuItem onClick={onGuideOnOpen}>Become a Guide</MenuItem>
                    <MenuItem onClick={onGroupTourOnOpen}>Create Group Tour</MenuItem>
                    <MenuItem onClick={onTravellerTourOnOpen}>Create Traveller Group Tour</MenuItem>
                    <MenuItem onClick={staySpaceOnOpen}>Book Stay Space</MenuItem>
                    {/* <MenuItem onClick={businessSpaceOnOpen}>Add Business Space</MenuItem>
                    <MenuItem onClick={reviewOnOpen}>Create Reviews</MenuItem>
                    <MenuItem onClick={skillsOnOpen}>Create Skills</MenuItem> */}
                  </MenuGroup>
                </MenuList>
              </Menu>
            </ListItem>
          </List>
        </HStack>
        <HStack>
          <Link
            display={{base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
            as={RouterLink} to={`/${user.role == 'traveller'? 't' : 'g'}/${user.username}`}
          >
            <Box
              position="relative"
              width={['15px', '15px', '20px', '20px']}
              top="30px"
              left="15px"
              zIndex="2"
            >
              <Image src={Asset.Icon.SMHeart} alt="heart" />
            </Box>
            <Avatar
              src={user.avatar}
              alt={user.username}
              size="md"
              border="2px solid #3f3d56"
              borderRadius="100%"
            />
          </Link>
          <Button onClick={onSidebarOnOpen} variant="ghost" fontSize="20px">
            <HamburgerIcon />
          </Button>
          <Drawer isOpen={onSidebarIsOpen} placement="right" onClose={onSidebarOnClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                {user && (
                  <Flex
                    direction="column"
                    justifyContent="space-between"
                    height="350px" 
                    onClick={onSidebarOnClose}
                  >
                    <Link as={RouterLink} to={`/${user.role == 'traveller'? 't' : 'g'}/${user.username}`}>
                      <Box
                        width={15}
                        position="absolute"
                        left="60px"
                        top="40px"
                        zIndex="2"
                      >
                        <Image src={Asset.Icon.SMHeart} alt="heart" />
                      </Box>
                      <Avatar
                        src={user.avatar}
                        alt={user.username}
                        size="md"
                        border="2px solid #3f3d56"
                        borderRadius="100%"
                      />
                    </Link>
                    <List
                      fontSize="25px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-evenly"
                      height="100%"
                    >
                      <ListItem as={RouterLink} to="/destinations">Destinations</ListItem>
                      <ListItem as={RouterLink} to="/activities">Activities</ListItem>
                      <ListItem as={RouterLink} onClick={onSearchOnOpen}>Search</ListItem>
                      <ListItem>
                        <Menu isLazy>
                          <MenuButton as={Link} rightIcon={<ChevronDownIcon />}>More</MenuButton>
                          <MenuList fontSize="16px">
                            <MenuGroup title="LINKS">
                              <MenuItem as={RouterLink} to="/add-stay-space">Add Stay Space</MenuItem>
                              <MenuItem as={RouterLink} to="/private-tour-request">Private Tour Request</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="MODALS">
                              <MenuItem onClick={onGuideOnOpen}>Become a Guide</MenuItem>
                              <MenuItem onClick={onGroupTourOnOpen}>Create Group Tour</MenuItem>
                              <MenuItem onClick={onTravellerTourOnOpen}>Create Traveller Group Tour</MenuItem>
                              <MenuItem onClick={staySpaceOnOpen}>Book Stay Space</MenuItem>
                              {/* <MenuItem onClick={businessSpaceOnOpen}>Add Business Space</MenuItem>
                              <MenuItem onClick={reviewOnOpen}>Create Reviews</MenuItem>
                              <MenuItem onClick={skillsOnOpen}>Create Skills</MenuItem> */}
                            </MenuGroup>
                          </MenuList>
                        </Menu>
                      </ListItem>
                    </List>
                  </Flex>
                )}
                {user ? (
                  <Button
                    onClick={(() => {
                      signout();
                      router.push('/');
                    })}
                    width="100%"
                    height="30px"
                    padding="0.3rem"
                    marginRight="1rem"
                    border="1.2px solid #2f2e41"
                    borderRadius="15px"
                    transition="all 1s ease-in-out"
                    fontSize="1rem"
                  >
                    Log Out
                  </Button>
                ) : (
                  <Stack w="100%">
                    <Button
                      variant="outline" 
                      onClick={onSignupOnOpen}
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
                      onClick={onSigninOnOpen}
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
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Flex>
      <>
        <Search isOpen={onSearchIsOpen} onClose={onSearchOnClose} />
        <Signup isOpen={onSignupIsOpen} onClose={onSignupOnClose} Asset={Asset} />
        <Signin isOpen={onSigninIsOpen} onClose={onSigninOnClose} Asset={Asset} />
        <BecomeAGuide isOpen={onGuideIsOpen} onClose={onGuideOnClose} Asset={Asset} />
        <CreateGroupTour isOpen={onGroupTourIsOpen} onClose={onGroupTourOnClose} />
        <TravellersBookGroupTour isOpen={onTravellerTourIsOpen} onClose={onTravellerTourOnClose} Asset={Asset} />
        <BookStaySpace isOpen={staySpaceIsOpen} onClose={staySpaceOnClose} Asset={Asset} />
        {/* <AddBusinessSpace isOpen={businessSpaceIsOpen} onClose={businessSpaceOnClose} Asset={Asset} />
        <CreateSkills isOpen={skillsIsOpen} onClose={skillsOnClose} Asset={Asset} />
        <CreateReview isOpen={reviewIsOpen} onClose={reviewOnClose} Asset={Asset} /> */}
      </>
    </>
  );
};

export default HeaderPrimary;
