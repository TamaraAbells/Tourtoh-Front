import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import {
  Box,
  Center,
  Spinner,
  useToast,
  useDisclosure
} from "@chakra-ui/react";

import { HeaderPrimary, Footer } from "../../Components/Commons";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import ChatComponent from "../../Components/Chat";
import { GlobalContext } from "../../Context/GlobalState";
import { fetchUserData, addPost } from "../../Services/requests";
import Asset from "../../Assets";

const singleGrid = {
  title: 'Past Travels',
  images: [Asset.Image.Past1, Asset.Image.Past2, Asset.Image.Past3],
  countries: ["Switzerland", "Greenland", "Canada"]
}

const featuredICons = [Asset.Icon.Wizard, Asset.Icon.Thread, Asset.Icon.BaseBat, Asset.Icon.BaseBall];

const firstGridImages = [Asset.Image.Connect1, Asset.Image.Connect2, Asset.Image.Connect3, Asset.Image.Connect4, Asset.Image.Connect5, Asset.Image.Connect6];
const secondGridImages = [Asset.Image.Connect7, Asset.Image.Connect8, Asset.Image.Connect9, Asset.Image.Connect10, Asset.Image.Connect11, Asset.Image.Connect12];
const thirdGridImages = [Asset.Image.Connect13, Asset.Image.Connect14, Asset.Image.Connect15, Asset.Image.Connect16, Asset.Image.Connect17, Asset.Image.Connect18];

const gridData = [
  { title: 'Travel Connections', images: firstGridImages },
  { title: 'Travel Wishlist', images: secondGridImages },
  { title: 'Group Tours', images: thirdGridImages },
];

const events = [
  { title: 'Party in Bali', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events1 },
  { title: 'Eve in View', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events2 },
];

const TravelerProfile = () => {
  const { username } = useParams();
  const toast = useToast();
  const [state, dispatch] = useContext(GlobalContext);
  const onDisclosure = useDisclosure();

  useEffect(async() => {
    await dispatch({ type: 'START' });
    const payload = await fetchUserData(username);
    await dispatch({ type: 'FETCH_USER_DATA', payload });
    await dispatch({ type: 'COMPLETE' });
  }, [username, dispatch]);

  const handleAddPost = async (value) => {
    let payload = [...state.posts];
    const request = await addPost(value);
    if(request){
      payload.unshift(value);
      await dispatch({ type: 'ADD_POST', payload });
      toast({
        title: "Success!",
        description: "Post created in successfully.",
        status: "success",
        duration: 2000, 
        isClosable: true,
        variant: "left-accent"
      });
      return onDisclosure.onToggle();
    }
  }

  return (
    <>
      {state.loading || !state.user ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Box>
          <HeaderPrimary user={state.user} Asset={Asset} />
          <HeaderComponent user={state.user} Asset={Asset} />
          <ChatComponent user={state.user} Asset={Asset} />
          <MainComponent
            gridData={gridData}
            activities={featuredICons}
            pastTravels={singleGrid}
            user={state.user}
            posts={state.posts}
            events={events}
            Asset={Asset}
            onAddPost={handleAddPost}
            onDisclosure={onDisclosure}
          />
          <Footer Asset={Asset} />
        </Box>
      )}
    </>
  );
};

export default TravelerProfile;

