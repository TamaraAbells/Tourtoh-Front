import {
  Heading,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
} from "@chakra-ui/react";

const Rules = ({ Asset }) => {
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
                  fontSize={[18, 18, 20, 35]}
              >
                Rules
              </Heading>
            </Box>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justifyContent="space-around"
              w="100%"
              alignItems="inherit"
            >
            <Stack>
              <CheckboxGroup
                size="lg"
                colorScheme="orange"
                defaultValue={["wifi", "pool"]}
                display="flex"
                justifyContent="space-between"
              >
                <Checkbox value="shared" marginRight="20px">Pets</Checkbox>
                <Checkbox value="private">Good for Kids</Checkbox>
              </CheckboxGroup>
            </Stack>
            <Stack>
              <CheckboxGroup
                size="lg"
                colorScheme="orange"
                defaultValue={["wifi", "pool"]}
                display="flex"
                justifyContent="space-between"
              >
                <Checkbox value="shared" marginRight="20px">Guests</Checkbox>
                <Checkbox value="private">Parties/Events</Checkbox>
              </CheckboxGroup>
            </Stack>
            <Stack>
              <CheckboxGroup
                size="lg"
                colorScheme="orange"
                defaultValue={["wifi", "pool"]}
                display="flex"
                justifyContent="space-between"
              >
                <Checkbox value="shared" marginRight="20px">Smoking</Checkbox>
                <Checkbox value="private">Alcohol</Checkbox>
              </CheckboxGroup>
            </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box> 
    </>
  );
};

export default Rules;
