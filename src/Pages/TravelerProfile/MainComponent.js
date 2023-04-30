import { useState, useEffect } from "react";
import {
  Stack,
  Spacer,
  Box,
  SkeletonCircle,
  SkeletonText,
  Center,
  Spinner
} from '@chakra-ui/react';

import {
  FeaturedActivities,
  Posts,
  Events,
  Ratings,
  Thoughts,
  Grids
} from "../../Components/Cards";

const MainComponent = ({
  gridData,
  activities,
  pastTravels,
  user,
  events,
  posts,
  Asset,
  onAddPost,
  onDisclosure
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUser, setIsUser] = useState();
  const [isGrid, setIsGrid] = useState([]);
  const [isPastTravels, setIsPastTravels] = useState([]);
  const [isActivities, setIsActivities] = useState([]);
  const [isEvents, setIsEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsGrid(gridData);
    setIsPastTravels(pastTravels);
    setIsActivities(activities);
    setIsUser(user);
    setIsEvents(events);
    setIsLoading(false);
  }, [gridData, activities, pastTravels, user, events]);

  return (
    <>
      {isLoading ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Stack
          direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row' }}
          padding={['1.5rem', '1.5rem', '1.5rem', '3rem']}
          width="100%"
        >
          <Box width={{ base: '100%', lg: '45%'}}>
            <FeaturedActivities
              size="md"
              title="Featured Activities"
              activities={isActivities}
              display="flex"
              callToAction="See Full Library"
            />
            {isGrid.map((data) => (
              <Grids
                title={data.title}
                callToAction="See All"
                images={data.images}
                Asset={Asset}
              />
            ))}
          </Box>
          <Spacer />
          <Box width={{ base: '100%', lg: '55%'}}>
            <Grids
              title={isPastTravels.title}
              callToAction="See More"
              images={isPastTravels.images}
              hoverEffect={isPastTravels.countries}
              Asset={Asset}
            />
            <Stack marginTop={[20, 20, 10, 0]}>
              <Ratings size="lg" Asset={Asset} />
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} alignItems="baseline">
              {isEvents.map((event) => (
                <Events events={event} issetBorder={true} />
              ))}
            </Stack>
            <Thoughts
              user={user}
              Asset={Asset}
              onAddPost={onAddPost}
              onDisclosure={onDisclosure}
            />
            {!isUser ? (
              <>
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
                </>
              ) : (
                <>
                {isUser.post.map((post) => (
                <Posts key={post.id} post={post} user={isUser} />
              ))}
                </>
                )}
          </Box>
        </Stack>
      )}
      
    </>
  );
};

export default MainComponent;
