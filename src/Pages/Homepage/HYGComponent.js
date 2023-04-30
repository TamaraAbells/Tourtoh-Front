import {
  HStack,
  Flex,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";

const HYGComponent = ({ Asset }) => (
  <>
    <HStack
      width="100vw"
      marginTop={useBreakpointValue(['-35px', '-35px', '-60px'])}
      justifyContent="space-around"
      padding={useBreakpointValue(['0 18vw', '0 20vw'])}
    >
      <Flex
        justifyContent="center"
        borderRadius="50%"
        background="#ffffff"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        width={useBreakpointValue({ base: '120px', md: '120px', lg: '120px' })}
        height={useBreakpointValue({ base: '70px', md: '120px', lg: '120px' })}
      >
        <Image width="50%" src={Asset.Icon.Globe} alt="globe"
        />
      </Flex>
      <Flex
        justifyContent="center"
        borderRadius="50%"
        background="#ffffff"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        width={useBreakpointValue({ base: '120px', md: '120px', lg: '120px' })}
        height={useBreakpointValue({ base: '70px', md: '120px', lg: '120px' })}
      >
        <Image width="50%" src={Asset.Icon.Heart} alt="heart" />
      </Flex>
      <Flex
        justifyContent="center"
        borderRadius="50%"
        background="#ffffff"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        width={useBreakpointValue({ base: '120px', md: '120px', lg: '120px' })}
        height={useBreakpointValue({ base: '70px', md: '120px', lg: '120px' })}
      >
        <Image width="50%" src={Asset.Icon.Star} alt="star" />
      </Flex>
    </HStack>
  </>
);

export default HYGComponent;

