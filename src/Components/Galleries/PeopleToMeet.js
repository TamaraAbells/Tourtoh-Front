import {
  Stack,
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Center,
  useBreakpointValue
} from "@chakra-ui/react";
import AvatarSlider from "./AvatarSlider";

const PeopleToMeet = ({ Asset, sliderAsset }) => {
  return (
    <>
      <Stack>
        <Grid
          templateRows={{
            sm: 'repeat(auto-fit, 2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          templateColumns={{
            sm: 'repeat(auto-fit, 5, 1fr)',
            md: 'repeat(5, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={4}
          padding={useBreakpointValue(['20px', '50px'])}
          bgImage={Asset.Image.PatternBg}
          paddingBottom={useBreakpointValue(['50px', '100px'])}
          marginBottom="50px"
        >
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square1} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square2} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square3} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square4} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square5} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square6} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square7} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square8} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square9} w="100%" height="100%" />
          </GridItem>
          <GridItem
            colSpan={1}
            borderRadius="20px"
            transition="transform 0.5s ease-in-out"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
          >
            <Image src={Asset.Image.Square1} w="100%" height="100%" />
          </GridItem>
          <Box
            position="absolute"
            right="0"
            width="70px"
            height="70px"
            bgGradient="linear(to-b, #f2f2f2 0%, #f2f2f2 48.44%, #ffffff 100%)"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Image
              src={Asset.Image.Square1}
              alt="rectangle1"
              width="40px"
              height="40px"
              border="1px solid #f2f2f2"
              borderRadius="100%"
              objectFit="cover"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
            />
            <Text
              fontSize="12px"
              lineHeight="18px"
              color="#213f5c;"
            >
              TravelGirl
            </Text>
          </Box>
        </Grid>
        <Center pos="relative" w="100%">
          <AvatarSlider Asset={Asset} sliderAsset={sliderAsset} />
        </Center>
      </Stack>
    </>
  );
};

export default PeopleToMeet;
