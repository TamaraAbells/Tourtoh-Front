import {
  Box,
  HStack,
  VStack,
  Heading
} from "@chakra-ui/react";

const Stats = ({ Asset }) => {
  return (
    <>
      <Box
         padding="0.5rem"
         boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
         borderRadius="20px"
      >
        <HStack
          padding="1.5rem"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="20px"
          width="100%"
          justifyContent="space-around"
          bgGradient="linear(to-b, 0deg, rgba(255, 255, 255, 0.75) 48.44%, rgba(255, 255, 255, 0.75) 100%)"
          bgImage={Asset.Image.StatsBg}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
        >
          <VStack textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)" color="#2c66b8">
            <Heading fontSize={[14, 14, 18, 25]} fontWeight="700" fontStyle="inherit">325</Heading>
            <Heading fontSize={[12, 12, 16, 18]} fontStyle="inherit" textAlign="center">Traveled Destinations</Heading>
          </VStack>
          <VStack textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)" color="#ffd20b">
            <Heading fontSize={[14, 14, 18, 25]} fontWeight="700" fontStyle="inherit">8</Heading>
            <Heading fontSize={[12, 12, 16, 18]} fontStyle="inherit" textAlign="center">Country Visits</Heading>
          </VStack>
          <VStack textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)" color="#f58642">
            <Heading fontSize={[12, 12, 16, 25]} fontWeight="700" fontStyle="inherit">125</Heading>
            <Heading fontSize={[12, 12, 16, 18]} fontStyle="inherit" textAlign="center">Tour Guides</Heading>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Stats;
