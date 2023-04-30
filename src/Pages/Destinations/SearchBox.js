import {
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Divider,
    Select,
    FormControl,
    FormLabel,
    SimpleGrid,
    Collapse,
    useDisclosure
  } from '@chakra-ui/react';
  import { GoSearch, GoSettings } from 'react-icons/go';
  import { Destinations, Events } from '../../Components/Cards';
  
  const SearchBox = ({ Asset, destinations, events }) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
      <>
        <Stack>
          <InputGroup size="lg" bg="#edf2f7" borderRadius="5px">
            <InputLeftElement
              children={
                <IconButton
                  onClick={onToggle}
                  icon={<GoSettings />}
                />
              }
            />
            <Input placeholder="Search Destinations, Tours, Upcoming Events, Activities etc..." />
            <InputRightElement children={<IconButton icon={<GoSearch />} />} />
          </InputGroup>
          <Collapse in={isOpen} animateOpacity>
            <Stack padding={2}>
              <FormLabel fontSize="xl">Advanced Search</FormLabel>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <FormControl>
                  <Select placeholder="Filter By Account Type">
                    <option>Guide</option>
                    <option>Traveller</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select placeholder="Filter By Tour Type">
                    <option>Group Tour</option>
                    <option>Private Tour</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select placeholder="Filter By Group Tours">
                    <option>Guide Group Tour</option>
                    <option>Traveller Group Tour</option>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <FormControl>
                  <Select placeholder="Filter By Activities">
                    <option>Activity 1</option>
                    <option>Activity 2</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select placeholder="Filter By Events">
                    <option>Events 1</option>
                    <option>Event 2</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Select placeholder="Custom Filter">
                    <option>Custom 1</option>
                    <option>Custom 2</option>
                  </Select>
                </FormControl>
              </Stack>
              <Stack w={['100%', '33%']} alignSelf={{ base: 'center', md: 'flex-end' }}>
                <Button
                  isLoading={false}
                  loadingText="Submitting"
                  bg="#bee3f8"
                  color="#3a5782"
                >
                  Search
                </Button>
              </Stack>
              <Divider />
            </Stack>
          </Collapse>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList flexWrap="wrap">
              <Tab>Destinations</Tab>
              <Tab>Recent Tours</Tab>
              <Tab>Upcoming Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={[2, null, 2]} spacing="40px">
                  {destinations.map((destination) => (
                    <Destinations boxLength="lg" destinations={destination} Asset={Asset} />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={[2, null, 2]} spacing="40px">
                  {destinations.map((destination) => (
                    <Destinations boxLength="lg" destinations={destination} Asset={Asset} />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={[2, null, 2]} spacing="40px">
                  {events.map((event) => (
                    <Events boxLength="lg" events={event} Asset={Asset} issetBorder />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </>
    );
  };
  
  export default SearchBox;
  