import {
  Heading,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Box,
} from "@chakra-ui/react";

const Info = ({ Asset }) => {
  return (
    <>
      <Box
        width="100%"
        height={{ base: null, lg: '250px' }}
        marginTop="2rem"
        padding={[3, 3, 5, 10]}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        justifyContent="center"
      >
        <Stack>
          <Stack>
            <Box position="relative">
              <Heading
                  position={{ base: null, lg: 'relative' }}
                  top={{ base: null, lg: '5rem' }}
                  transform={{ base: null, lg: 'translateX(-50%) translateY(-50%) rotate(-90deg)' }}
                  width="max-content"
                  color="#063154"
                  fontStyle="inherit"
                  fontFamily="inherit"
                  fontSize={[20, 20, 25, 35]}
                  marginBottom={['10px', '10px', '20px', 0]}
              >
                Info
              </Heading>
            </Box>
            <Stack
              justifyContent="space-between"
              w="100%"
              alignItems="inherit"
              marginLeft="100px"
            >
              <Box marginLeft={[0, 0, 0, '100px']}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Textarea
                    placeholder="Info About the Place" 
                    variant="filled"
                    borderColor="#063154"
                    bgColor="#edf2f7"
                    borderWidth="2px"
                    height="20vh"
                    resize="none"
                  />
                </InputGroup>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box> 
    </>
  );
};

export default Info;
