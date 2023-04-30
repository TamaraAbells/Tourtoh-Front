import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spacer,
  Stack,
  Center,
  Spinner,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import { IoIosCamera } from "react-icons/io";
import GuiderComponent from "./GuiderComponent";
import ExperienceComponent from "./ExperienceComponent";
import {
  FeaturedActivities,
  Grids,
  Posts,
  Thoughts,
  AddSpaces,
  Stats
} from "../../Components/Cards";
import { useFileReader } from "../../Hooks";
import { DropzoneUI } from "../../Components/Modal";

const MainComponent = ({
  gridData,
  activities,
  user,
  staySpace,
  businessSpace,
  Asset,
  onAddPost,
  onDisclosure
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUser, setIsUser] = useState([]);
  const [isGrid, setIsGrid] = useState([]);
  const [bgImage, setBgImage] = useState('');
  const [isStaySpace, setIsStaySpace] = useState([]);
  const [isBusinessSpace, setIsBusinessSpace] = useState([]);
  const [isActivities, setIsActivities] = useState([]);
  const [isPosts, setIsPosts] = useState([]);
  const { DropReader, uploadedFile } = useFileReader();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(async () => {
    setIsLoading(true);
    setIsUser(user);
    setIsGrid(gridData);
    setIsStaySpace(staySpace);
    setIsBusinessSpace(businessSpace);
    setIsActivities(activities);
    setIsPosts(user.post);
    setIsLoading(false);
  }, [gridData, activities, staySpace, businessSpace, user]);

  useEffect(() => {
    setBgImage(() => uploadedFile.length ? uploadedFile : user.cover);
  }, [uploadedFile, bgImage]);

  const handleDropzoneBgImage = async(imageFile) => {
    await DropReader(imageFile).then(() => (
      setBgImage(uploadedFile)
    ))
  };

  return (
    <>
      {isLoading ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Stack>
          <Box position="relative">
            <Box h="300px" w="100%">
              <Image src={bgImage} h="300px" w="100%" />
            </Box>
            <Box
              position="absolute"
              fontSize={{ base: '1.2em', md: '2.5em', lg: '3em' }}
              bg="white"
              color="#3f3d56"
              borderRadius="50%"
              padding={1}
              top={{ base: 2 }}
              left={{ base: 2 }}
              zIndex="2"
              cursor="pointer"
              _hover={{ bg: '#3f3d56', color: 'white' }}
              onClick={onOpen}
            >
              <IoIosCamera />
            </Box>
            <DropzoneUI
              isOpen={isOpen}
              onClose={onClose}
              dropzoneFiles={handleDropzoneBgImage}
              title="upload cover image"
              maxFiles={1}
              maxFileSize={2998000}
              fileType="image/*"
            />
          </Box>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            justifyContent="space-between"
            padding={['4rem 1rem 0rem', '1rem', '2rem', '3rem 5rem']}
            alignItems="flex-start"
          >
            <Stack
              dir="column"
              w={{ base: '100%', lg: '45%' }}
            >
              <GuiderComponent user={isUser} Asset={Asset} />
              <ExperienceComponent user={isUser} Asset={Asset} />
              {isGrid.map((data) => (
                <>
                  <Grids
                    title={data.title}
                    callToAction="See All"
                    images={data.images}
                    Asset={Asset}
                  />
                  <Spacer />
                </>
              ))}
              <FeaturedActivities
                title="Skill/Knowledge Share Service"
                activities={isActivities}
                display="flex"
                callToAction="Add New"
                size="md"
                Asset={Asset}
              />
              <Spacer />
              <AddSpaces heading="Stay Spaces" type="staySpace" spaceArray={isStaySpace} Asset={Asset} />
              <Spacer />
              <AddSpaces
                Asset={Asset}
                activities={activities}
                heading="Business Spaces"
                type="businessSpace"
                spaceArray={isBusinessSpace}
              />
            </Stack>
            <Spacer />
            <Flex
              flexDir="column"
              w={{ base: '100%', lg: '55%' }}
            >
              <Stats Asset={Asset} />
              <Thoughts
                user={user}
                Asset={Asset}
                onAddPost={onAddPost}
                onDisclosure={onDisclosure}
              />
              {isPosts.map((post) => (
                <Posts key={post.id} post={post} user={isUser} Asset={Asset} />
              ))}
            </Flex>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default MainComponent;
