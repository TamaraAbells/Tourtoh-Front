import {
  Heading,
  Checkbox,
  CheckboxGroup,
  Stack,
  VStack,
  HStack,
  Image,
  Select,
  Button,
  Text,
  Textarea,
  InputGroup,
  InputLeftElement,
  Box,
  Center,
  SimpleGrid,
  useBreakpointValue
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const BedroomOptions = ({ Asset }) => {
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  return (
    <>
      <Box
        width="100%"
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
                  top={{ base: null, lg: '15rem' }}
                  transform={{ base: null, lg: 'translateX(-50%) translateY(-50%) rotate(-90deg)' }}
                  width="max-content"
                  color="#063154"
                  fontStyle="inherit"
                  fontFamily="inherit"
                  fontSize={[20, 20, 25, 35]}
                  marginBottom={['10px', '10px', '20px', 0]}
              >
                Bedroom Options
              </Heading>
            </Box>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              justifyContent="space-between"
              w="100%"
              alignItems="inherit"
            >
              <VStack
                w={{ base: '100%', lg: '45%' }}
                marginLeft={{ base: null, lg: '100px' }}
              >
                <HStack
                  justifyContent="flex-start"
                  alignItems="inherit"
                  w="100%"
                >
                  <CheckboxGroup
                    size={winSize != 'sm' ? 'lg' : 'md' }
                    colorScheme="orange"
                    defaultValue={["wifi", "pool"]}
                    
                  >
                    <Checkbox value="shared" marginRight={[0, 0, 0, '50px']}>Shared</Checkbox>
                    <Checkbox value="private">Private</Checkbox>
                  </CheckboxGroup>
                </HStack>
                <HStack
                  justifyContent="space-between"
                  alignItems="inherit"
                  w="100%"
                >
                  <Select
                    variant="outline"
                    placeholder="Select option"
                    defaultValue="option1"
                    borderColor="#063154"
                    bgColor="#edf2f7"
                    borderWidth="2px"
                  >
                    <option value="option1">Bed Size</option>
                  </Select>
                  <Button bgColor="#ee8641">
                    <AddIcon />
                  </Button>
                </HStack>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Textarea
                    marginTop="20px"
                    placeholder="Address" 
                    variant="filled"
                    borderColor="#063154"
                    bgColor="#edf2f7"
                    borderWidth="2px"
                    height="33vh"
                    resize="none"
                  />
                </InputGroup>
              </VStack>
              <Box w="100px" />
              <VStack w={{ base: '100%', lg: '45%' }} alignItems="flex-start">
                <CheckboxGroup
                  size={winSize != 'sm' ? 'lg' : 'md' }
                  colorScheme="orange"
                  defaultValue={["wifi", "pool"]}
                >
                  <Stack
                    w="100%"
                    direction={{ base: 'column', md: 'row', lg: 'column' }}
                    justifyContent="space-evenly"
                    alignItems="baseline"
                    fontSize="x-large"
                    margin={['10px 0', '10px 0', '20px 0', 0]}
                  >
                    <HStack>
                      <Checkbox value="extra pillow">Extra Pillows</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ExtraPillowsBlankets} />
                    </HStack>
                    <HStack>
                      <Checkbox value="bathrobes">Bathrobes</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Bathrobe} />
                    </HStack>
                    <HStack>
                      <Checkbox value="slippers">Slippers</Checkbox>
                      <Image boxSize={['30px', '30px', '40px', '40px']} objectFit="contain" src={Asset.Icon.Slippers} />
                    </HStack>
                  </Stack>
                </CheckboxGroup>
                <SimpleGrid
                  columns={[4, 5, 8, 3]}
                  w={{ base: '100%', lg: '50%' }}
                  spacing="10px"
                >
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Center
                    boxSize="100%"
                    borderRadius="10px"
                    borderWidth="2px"
                    borderColor="#063154"
                  >
                    <Button bgColor="#ee8641" size="sm">
                      <AddIcon />
                    </Button>
                  </Center>
                </SimpleGrid>
              </VStack>
            </Stack>
          </Stack>
          <HStack width="100%" justifyContent={{ base: 'center', md: 'flex-end' }}>
            <Button bgColor="#ee8641" marginRight={[0, 0, 0, '13vw']} marginTop="5vh">
              <Text marginRight="10px" fontSize={[11, 11, 16, 18]}>Add Bedroom Option</Text>
              <AddIcon />
            </Button>
          </HStack>
        </Stack>
      </Box> 
    </>
  );
};

export default BedroomOptions;
