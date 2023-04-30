import {
  Heading,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  VStack,
  HStack,
  Image,
  Select,
  Button,
  Text,
  Box,
  useBreakpointValue
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const GeneralAmenities = ({ Asset }) => {
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  
  return (
    <>
      <Box
        width="100%"
        marginTop="2rem"
        padding={[5, 5, 5, 10]}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        justifyContent="center"
        fontFamily="inherit"
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
                  General Amenities
              </Heading>
            </Box>
            <Stack 
              direction={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
              w="100%"
              alignItems="inherit"
            >
            <VStack w="45%">
              <HStack
                justifyContent="space-evenly"
                w="100%"
                alignItems="inherit"
                marginLeft={[0, 0, 0, '100px']}
              >
                <CheckboxGroup
                  size={winSize != 'sm' ? 'lg' : 'md'}
                  colorScheme="orange"
                  defaultValue={["wifi", "pool"]}
                >
                  <VStack alignItems="baseline" color="#063154">
                    <HStack>
                      <Checkbox value="wifi">WiFi</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.WiFi} />
                    </HStack>
                    <HStack>
                      <Checkbox value="desk/workspace">Desk/Workspace</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Desk} />
                    </HStack>
                    <HStack>
                      <Checkbox value="air conditioning">Air Conditioning</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.AirConditioning} />
                    </HStack>
                    <HStack>
                      <Checkbox value="heating">Heating</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Heating} />
                    </HStack>
                    <HStack>
                      <Checkbox value="deck/patio">Deck/Patio</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Deck_Patio} />
                    </HStack>
                    <HStack>
                      <Checkbox value="pool">Pool</Checkbox>
                      <Image boxSize={['30px', '40px']}objectFit="contain" src={Asset.Icon.Pool} />
                    </HStack>
                    <HStack>
                      <Checkbox value="hot tub">Hot Tub</Checkbox>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.HotTub} />
                    </HStack>
                  </VStack>
                </CheckboxGroup>
              </HStack>
            </VStack>
            <VStack w="45%" alignItems="flex-start">
            <HStack
                justifyContent="space-evenly"
                w="100%"
                alignItems="inherit"
              >
                <CheckboxGroup
                  size={winSize != 'sm' ? 'lg' : 'md' }
                  colorScheme="orange"
                  defaultValue={["tv", "dryer"]}
                >
                  <VStack alignItems="baseline" fontSize="x-large">
                    <HStack marginTop="8px">
                      <Flex alignItems="flex-start" flexDirection="column">
                        <Checkbox value="tv">TV</Checkbox>
                        <Select
                          variant="unstyled"
                          defaultValue="option1"
                          placeholder="Select option"
                          w="80%"
                          marginTop="-10px"
                          marginLeft="30px"
                        >
                          <option value="option1">LED</option>
                        </Select>
                      </Flex>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.TV} />
                    </HStack>
                    <HStack marginTop="8px">
                      <Flex alignItems="flex-start" flexDirection="column">
                        <Checkbox value="cleaning services">Cleaning Service</Checkbox>
                        <Select
                          variant="outline"
                          placeholder="Select option"
                          defaultValue="option1"
                          w="60%"
                          h="20px"
                          marginTop="-10px"
                          marginLeft="30px"
                          borderRadius="30px"
                        >
                          <option value="option1">Daily</option>
                        </Select>
                        <CheckboxGroup size="sm" colorScheme="orange" defaultValue={["wifi", "pool"]}>
                          <Flex alignItems="baseline" marginLeft="30px" flexDirection="column">
                            <Checkbox value="complementary">For Complementary</Checkbox>
                            <Checkbox value="free">For Free</Checkbox>
                          </Flex>
                        </CheckboxGroup>
                      </Flex>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.CleaningService} />
                    </HStack>
                    <HStack marginTop="8px">
                      <Flex alignItems="flex-start" flexDirection="column">
                        <Checkbox value="washer">Washer</Checkbox>
                        <CheckboxGroup size="sm" colorScheme="orange" defaultValue={["wifi", "pool"]}>
                          <Flex alignItems="baseline" marginLeft="30px" flexDirection="column">
                            <Checkbox value="complementary">For Complementary</Checkbox>
                            <Checkbox value="free">For Free</Checkbox>
                          </Flex>
                        </CheckboxGroup>
                      </Flex>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Washer} />
                    </HStack>
                    <HStack marginTop="8px">
                      <Flex alignItems="flex-start" flexDirection="column">
                        <Checkbox value="dryer">Dryer</Checkbox>
                        <CheckboxGroup size="sm" colorScheme="orange" defaultValue={["wifi", "pool"]}>
                          <Flex alignItems="baseline" marginLeft="30px" flexDirection="column">
                            <Checkbox value="complementary">For Complementary</Checkbox>
                            <Checkbox value="free">For Free</Checkbox>
                          </Flex>
                        </CheckboxGroup>
                      </Flex>
                      <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Dryer} />
                    </HStack>
                  </VStack>
                </CheckboxGroup>
              </HStack>
            </VStack>
          </Stack>
          </Stack>
          <HStack width="100%" justifyContent={{ base: 'center', md: 'flex-end', lg: 'flex-end' }}>
            <Button bgColor="#ee8641" marginRight={[0, 0, 0, '13vw']} marginTop="5vh">
              <Text marginRight="10px" fontSize={[11, 11, 16, 18]}>Add Custom Amenity</Text>
              <AddIcon />
            </Button>
          </HStack>
        </Stack>
      </Box> 
    </>
  );
};

export default GeneralAmenities;
