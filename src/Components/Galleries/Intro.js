import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const Intro = ({ title, text, color }) => {
  return (
    <>
      <Box setColor={color} textAlign="center" padding="5px 20px">
        <Heading
          fontSize={useBreakpointValue({ base: '1.5em', sm: '1.5em', md: '3.5em', lg: '3.5em' })}
          fontFamily="inherit"
          color="#163c5a"
          textShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          letterSpacing="5px"
          lineHeight="4rem"
        >
          {title}
        </Heading>
        <Text
          fontStyle="italic"
          color="#163c5a"
          fontFamily="inherit"
        >
          {text}
        </Text>
      </Box>
    </>
  );
};

export default Intro;
