import {
  Heading,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  useBreakpointValue
} from "@chakra-ui/react";

const Additionals = ({ Asset }) => {
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
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
                Additionals
              </Heading>
            </Box>
            <Stack
              justifyContent="space-between"
              w="100%"
              alignItems="inherit"
              
            >
              <Stack marginLeft={[0, 0, 0, '100px']} w="100%">
                <CheckboxGroup
                  size={winSize != 'sm' ? 'lg' : 'md' }
                  colorScheme="orange"
                  defaultValue={["wifi", "pool"]}
                  
                >
                  <Checkbox value="shared" marginRight={[0, 0, 0, '50px']}>Private Entrance</Checkbox>
                  <Checkbox value="private">Owner On Premises</Checkbox>
                </CheckboxGroup> 
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box> 
    </>
  );
};

export default Additionals;
