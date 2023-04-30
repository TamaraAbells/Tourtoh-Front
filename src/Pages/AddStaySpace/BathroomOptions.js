import {
  Heading,
  Checkbox,
  CheckboxGroup,
  Stack,
  VStack,
  HStack,
  Image,
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

const BathroomOptions = ({ Asset }) => {
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
                Bathroom Options
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
                  marginBottom={['10px', '10px', '20px', 0]}
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
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Textarea
                    placeholder="Description" 
                    variant="filled"
                    borderColor="#063154"
                    bgColor="#edf2f7"
                    borderWidth="2px"
                    height="20vh"
                    resize="none"
                    marginBottom={['10px', '10px', '20px', 0]}
                  />
                </InputGroup>
                <SimpleGrid
                  columns={[4, 5, 8, 3]}
                  w={{ base: '100%', lg: '100%' }}
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
              <Box w="100px" />
              <Stack
                w="100%"
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-around"
              >
                <VStack w="33%" align="flex-start">
                  <CheckboxGroup
                    size={winSize != 'sm' ? 'lg' : 'md' }
                    colorScheme="orange"
                    defaultValue={["wifi", "pool"]}
                  >
                    <VStack alignItems="baseline" fontSize="x-large">
                      <HStack>
                        <Checkbox value="towels">Towels</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Towels} />
                      </HStack>
                      <HStack>
                        <Checkbox value="soap">Soap</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Soap} />
                      </HStack>
                      <HStack>
                        <Checkbox value="shampoo conditioner">Shampoo Conditioner</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ShampooConditioner} />
                      </HStack>
                      <HStack>
                        <Checkbox value="standing shower">Standing Shower</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.StandingShower} />
                      </HStack>
                      <HStack>
                        <Checkbox value="shower bath combo">Shower/Bath Combo</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ShowerBathtubCombo} />
                      </HStack>
                      <HStack>
                        <Checkbox value="deep soaking tub">Deep Soaking Tub</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.DeepSoakingTub} />
                      </HStack>
                      <HStack>
                        <Checkbox value="shampoo conditioner">Toothpaste/Fresh Brush</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ToothpasteToothbrush} />
                      </HStack>
                    </VStack>
                  </CheckboxGroup>
                </VStack>
                <VStack w="33%" align="flex-end">
                  <CheckboxGroup
                    size={winSize != 'sm' ? 'lg' : 'md' }
                    colorScheme="orange"
                    defaultValue={["wifi", "pool"]}
                  >
                    <VStack alignItems="baseline" fontSize="x-large">
                      <HStack>
                        <Checkbox value="hand soap">Hand Soap</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.Soap} />
                      </HStack>
                      <HStack>
                        <Checkbox value="body wash">Body Wash</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ShampooConditioner} />
                      </HStack>
                      <HStack>
                        <Checkbox value="hair dryer">Hair Dryer</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.HairDryer} />
                      </HStack>
                      <HStack>
                        <Checkbox value="seat toilet">Seat Toilet</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.SeatToilet} />
                      </HStack>
                      <HStack>
                        <Checkbox value="squat toilet">Squat Toilet</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.SquatToilet} />
                      </HStack>
                      <HStack>
                        <Checkbox value="toilet paper">Toilet Paper</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ToiletPaper} />
                      </HStack>
                      <HStack>
                        <Checkbox value="toilet hose">Toilet Hose</Checkbox>
                        <Image boxSize={['30px', '40px']} objectFit="contain" src={Asset.Icon.ToiletHose} />
                      </HStack>
                    </VStack>
                  </CheckboxGroup>
                </VStack>
              </Stack>
            </Stack>
          </Stack>
          <HStack width="100%" justifyContent={{ base: 'center', md: 'flex-end', lg: 'flex-end' }}>
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

export default BathroomOptions;
