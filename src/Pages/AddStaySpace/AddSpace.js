import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
  Heading,
  Checkbox,
  CheckboxGroup,
  HStack,
  VStack,
  Stack,
  Flex,
  Box,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const AddSpace = ({ Asset }) => {
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  return (
    <>
      <Stack
        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row'}}
        justifyContent="space-between"
        width="100%"
        marginTop="2rem"
        padding={[3, 3, 5, 10]}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        fontFamily="inherit"
      >
        <Stack w="100%">
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Input
              type="text" 
              placeholder="Name of the property"
              variant="filled"
              borderColor="#063154"
              bgColor="#edf2f7"
              borderWidth="2px"
              padding="15px"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Textarea
              placeholder="Address"
              variant="filled"
              borderColor="#063154"
              bgColor="#edf2f7"
              borderWidth="2px"
              padding="15px"
              height="150px"
              resize="none"
            />
          </InputGroup>
          <Stack
            w="100%"
            direction={{ base: 'column', lg: 'row' }}
          >
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<Image boxSize="25px" objectFit="contain" src={Asset.Icon.CheckInTime} />}
              />
              <Input
                placeholder="Check-in Times"
                variant="filled"
                borderColor="#063154"
                bgColor="#edf2f7"
                borderWidth="2px"
                padding="15px"
              />
            </InputGroup>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<Image boxSize="25px" objectFit="contain" src={Asset.Icon.CheckOutTime} />}
              />
              <Input
                placeholder="Check-out Times"
                variant="filled"
                borderColor="#063154"
                bgColor="#edf2f7"
                borderWidth="2px"
                padding="15px"
              />
            </InputGroup>
          </Stack>
        </Stack>
        <Box w={[0, 0, 0, 200]} />
        <Stack width="100%">
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row'}}  
          >
            <VStack w={['100%', '100%', '100%', '60%']}>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children=""
                />
                <Input
                  placeholder="Nightly Rate"
                  variant="filled"
                  borderColor="#063154"
                  bgColor="#edf2f7"
                  borderWidth="2px"
                  padding="15px"
                />
              </InputGroup>
              <HStack justifyContent="center">
                <CheckboxGroup colorScheme="orange" defaultValue={["20", "40"]}>
                  <HStack>
                    <Checkbox value="20" color="grey">20</Checkbox>
                    <Checkbox value="40" color="grey">40</Checkbox>
                    <Checkbox value="60" color="grey">60</Checkbox>
                    <Checkbox value="80" color="grey">80</Checkbox>
                  </HStack>
                </CheckboxGroup>
              </HStack>
            </VStack>
            <Box>
              <Checkbox value="20" color="#113a5b">Donation</Checkbox>
            </Box>
          </Stack>
          <Stack w="100%">
            <Flex
              marginTop="15px"
              w="100%"
              justifyContent={{ base: 'center', lg: 'flex-start' }}
            >
              <Heading fontFamily="inherit" fontWeight="700" fontSize="18px">Kind of Space</Heading>
            </Flex>
            <HStack
              fontFamily="inherit"
              alignItems="flex-start"
              justifyContent={{ base: 'center', md: 'space-around', lg: 'flex-start' }}
            >
              <CheckboxGroup colorScheme="orange" defaultValue={["20", "40"]}>
                <VStack alignItems="baseline">
                  <Checkbox value="house" color="#113a5b">House</Checkbox>
                  <Checkbox value="apartment" color="#113a5b">Apartment</Checkbox>
                  <Checkbox value="private room" color="#113a5b">Private Room</Checkbox>
                </VStack>
              </CheckboxGroup>
              <CheckboxGroup colorScheme="orange" defaultValue={["20", "40"]}>
                <VStack alignItems="baseline">
                  <Checkbox value="hotel room" color="#113a5b">Hotel Room</Checkbox>
                  <Checkbox value="hostel" color="#113a5b">Hostel</Checkbox>
                  <Checkbox value="composite" color="#113a5b">Composite</Checkbox>
                  {winSize != 'sm' && <Checkbox size="sm" paddingLeft="20px" value="80" color="grey">tents/sleeping accomodations included</Checkbox>}
                </VStack>
              </CheckboxGroup>
            </HStack>
            {winSize != 'sm' && <Checkbox size="sm" paddingLeft="20px" value="80" color="grey">tents/sleeping accomodations included</Checkbox>}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AddSpace;

