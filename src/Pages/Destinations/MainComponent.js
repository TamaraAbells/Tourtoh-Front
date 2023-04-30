import { useState, useEffect } from "react";
import {
  Heading,
  Stack,
  Box,
  SkeletonCircle,
  SkeletonText,
  Spacer
} from '@chakra-ui/react';
import SearchBox from './SearchBox';
import { Events, Destinations } from "../../Components/Cards";

const MainComponent = ({ Asset, events, destinations }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDestinations, setIsDestinations] = useState([]);
  const [isEvents, setIsEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsDestinations(destinations);
    setIsEvents(events);
    setIsLoading(false);
  }, [destinations, events]);

  console.log('ISEVENTS', isEvents)

  return (
    <>
      {isLoading ? (
        <Stack w="100%" marginTop="20px">
          <Box padding="6" boxShadow="lg" bg="white" w="100%">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" w="100%">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" w="100%">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </Stack>
      ) : (
        <Stack
          padding={['1rem', '1rem', '2rem', '3rem']}
          justifyContent="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
        <Stack w={['100%', '70%']}>
          <SearchBox
            Asset={Asset}
            destinations={isDestinations}
            events={isEvents}
          />
        </Stack>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Stack w={['100%', '30%']}>
          <Stack
            direction={{ base: 'column', md: 'row', lg: 'column' }}
            alignItems="baseline"
            padding="1rem"
            boxShadow="0px 1px 1px 1px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
          >
            <Heading fontSize={['18px', '20px']} fontFamily="inherit" color="#4a5568">
              Top Destinations
            </Heading>
            <Stack
              w="100%"
              direction={{ base: 'column', md: 'row', lg: 'column' }}
            >
              {isDestinations.map((destination) => (
                <Destinations boxLength="sm" destinations={destination} Asset={Asset} />
              ))}
            </Stack>
          </Stack>
          <Spacer />
          <Spacer />
          <Stack
            direction={{ base: 'column', md: 'row', lg: 'column' }}
            alignItems="baseline"
            padding="1.5rem"
            boxShadow="0px 1px 1px 1px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
          >
            <Heading fontSize={['18px', '20px']} fontFamily="inherit">
              Upcoming Events
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row', lg: 'column' }}
              alignItems="baseline"
            >
              {isEvents.map((event) => (
                <Events events={event} issetBorder={true} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      )}
    </>
  );
};

export default MainComponent;
