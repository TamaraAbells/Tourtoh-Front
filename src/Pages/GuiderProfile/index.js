import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import {
  Box,
  Center,
  Spinner,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { HeaderPrimary, Footer } from "../../Components/Commons";
import MainComponent from "./MainComponent";
import { GlobalContext } from "../../Context/GlobalState";
import { fetchUserData, addPost } from "../../Services/requests";
import Asset from "../../Assets";

const featuredICons = [Asset.Icon.Wizard, Asset.Icon.Thread, Asset.Icon.BaseBat, Asset.Icon.BaseBall];
const firstGridImages = [Asset.Image.Connect1, Asset.Image.Connect2, Asset.Image.Connect3, Asset.Image.Connect4, Asset.Image.Connect5, Asset.Image.Connect6];
const thirdGridImages = [Asset.Image.Connect13, Asset.Image.Connect14, Asset.Image.Connect15, Asset.Image.Connect16, Asset.Image.Connect17, Asset.Image.Connect18];
const gridData = [
  { title: 'Travel Connections', images: firstGridImages },
  { title: 'Group Tours', images: thirdGridImages },
];
const Spaces1 = [
  { title: "Nest by Pool", imgUrl: Asset.Image.Space1, location: "Las Vegas, USA", bedrooms: "1", bathrooms: "2", price: "36", moreFx: () => { return; }, editFx: () => { return; }, },
  { title: "House on Mount", imgUrl: Asset.Image.Space2, location: "Montana, USA", bedrooms: "3", bathrooms: "2", price: "49", moreFx: () => { return; }, editFx: () => { return; } },
];
const Spaces2 = [
  { title: "Close to ", imgUrl: Asset.Image.Space3, location: "Las Vegas, USA", bedrooms: "2", bathrooms: "1",price: "35",moreFx: () => { return; }, editFx: () => { return; } },
  { title: "House on Mount", imgUrl: Asset.Image.Space4, location: "Montana, USA", bedrooms: "3", bathrooms: "2", price: "49", moreFx: () => { return; }, editFx: () => { return; }, },
];

const GuiderProfile = () => {
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
          <HeaderPrimary Asset={Asset} user={state.user} />
          <MainComponent
            gridData={gridData}
            activities={featuredICons}
            user={state.user}
            staySpace={Spaces1}
            businessSpace={Spaces2}
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

export default GuiderProfile;
