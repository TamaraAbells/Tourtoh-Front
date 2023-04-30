import { useEffect, useState } from "react";
import {
  Stack,
  Box,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Center,
  Spinner,
} from "@chakra-ui/react";

import {
  FeaturedActivities,
  Thoughts,
  Events,
  Posts
} from "../../Components/Cards";

const MainComponent = ({
  posts,
  activities,
  user,
  events,
  Asset,
  onAddPost,
  onDisclosure
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPosts, setIsPosts] = useState([]);
  const [isEvents, setIsEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsPosts(posts);
    setIsEvents(events);
    setIsLoading(false);
  }, [posts, events]);
  
  return (
    <>
      {isLoading ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Stack
          direction="row"
          justifyContent="space-between"
          padding="20px"
          display={{ base: 'block', sm: 'block', md: 'block', lg: 'flex' }}
          width="100%"
        >
          <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
            <FeaturedActivities
              title="Featured Activities"
              activities={activities}
              size="lg"
            />
          </Box>
          <Box width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
            <Thoughts
              user={user}
              Asset={Asset}
              onAddPost={onAddPost}
              onDisclosure={onDisclosure}
            />
            {!isPosts.length ? (
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
              isPosts.map((post) => (
                <Posts key={post.id} post={post} user={post.user} Asset={Asset} />
              ))
            )}
          </Box>
          <Box height="100%" width={{ base: '100%', lg: '24.5%' }}>
            <Box
              marginTop="2rem"
              padding="1.5rem"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
            >
              <Heading
                borderRadius="20px"
                width="100%"
                fontSize={['18px', '20px']}
                fontFamily="inherit"
              >
                Upcoming Events
              </Heading>
              <Stack
                direction={{ base: 'column', md: 'row', lg: 'column' }}
                alignItems="baseline"
              >
                {isEvents.map((event) => (
                  <Events events={event} issetBorder Asset={Asset} />
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default MainComponent;

