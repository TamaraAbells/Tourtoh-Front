import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Box,
  HStack,
  VStack,
  Stack,
  Flex,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  Avatar,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

const Grids = ({ title, callToAction, images, hoverEffect, Asset }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagesac = [
    {
      original: Asset.Image.carousel1,
      thumbnail: Asset.Image.carousel1sm,
      originalTitle: 'This is a Title',
      description: 'This is a Description',
    },
    {
      original: Asset.Image.carousel2,
      thumbnail: Asset.Image.carousel2sm,
      originalTitle: 'This is a Title',
      description: 'This is a Description',
    },
    {
      original: Asset.Image.carousel3,
      thumbnail: Asset.Image.carousel3sm,
      originalTitle: 'This is a Title',
      description: 'This is a Description',
    },
  ];

  return (
    <>
      <Box
        marginTop="2rem"
        padding="1.5rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
      >
        <HStack justifyContent="space-between" marginBottom="10px">
          <Heading
            fontWeight="700"
            fontSize={[12, 12, 16, 20]}
            margin="0"
          >
            {title}
          </Heading>
          <Button
            variant="ghost"
            fontWeight="500"
            fontSize={[11, 18]}
            textAlign="center"
            color="#fee05f"
            margin="0"
            onClick={onOpen}
          >
            {callToAction}
          </Button>
        </HStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {images &&
              images.map((_, index) => (
                <GridItem
                  colSpan={1}
                  borderRadius="20px"
                  transition="transform 0.5s ease-in-out"
                  _hover={{ transform: 'scale(1.05)' }}
                  cursor="pointer"
                  position="relative"
                >
                  <Image src={_} alt={_} />
                  {hoverEffect && hoverEffect.length ? (
                    <HStack
                      position="absolute"
                      zIndex="2"
                      width={{ base: '70px', md: '170px', lg: '90%' }}
                      height={{ base: '70px', md: '170px', lg: '80%' }}
                      left={{ base: '40px', md: '48%', lg: '50%' }}
                      top={{ base: '40px', md: '48%', lg: '50%' }}
                      transform="translate(-50%, -50%)"
                      background="rgba(63, 61, 86, 0.67)"
                      borderRadius="10px"
                      justifyContent="center"
                      alignItems="center"
                      margin="auto"
                      visibility="visible"
                      _hover={{ visibility: 'visible'}}
                      transition="all 0.5s ease-in-out"
                    >
                    <Text
                      color="#fee05f"
                      fontWeight="bold"
                      fontStyle="inherit"
                      textAlign="center"
                      fontSize={[12, 16, 25, 25]}
                    >
                      {hoverEffect[index]}
                    </Text>
                  </HStack>
                ) : null}
                </GridItem>
              ))}
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent sx={{ background: 'transparent', boxShadow: 0 }}>
          <ModalCloseButton borderRadius="50%" bg="#FFF" _hover={{ bg: '#000', color: '#FFF' }} />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            <VStack bg="#FFFFFF" w="80%">
              <Stack justifyContent="flex-start" direction="row">
                <Flex w="80%" justifyContent="flex-start">
                  <ImageGallery
                    lazyLoad={true}
                    showIndex={true}
                    autoPlay={true}
                    items={imagesac}
                    showThumbnails={false}
                  />
                </Flex>
                <Stack w="30%" alignSelf="start" padding="20px">
                  <HStack alignItems="center">
                    <Avatar size="sm" />
                  <Text fontSize="20px">My username</Text>
                </HStack>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</Text>
                </Stack>
              </Stack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Grids;
