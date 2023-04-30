import { useContext, useEffect } from "react";
import {
  Stack,
  Center,
  Spinner,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import { GlobalContext } from "../../Context/GlobalState";
import { HeaderPrimary, Footer } from "../../Components/Commons";
import MainComponent from "./MainComponent";
import ChatComponent from "../../Components/Chat";
import { getAllPosts, addPost } from "../../Services/requests";
import Asset from "../../Assets";

const events = [
  { title: 'Party in Bali', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events1 },
  { title: 'Eve in View Lake', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events2 },
];

const featuredICons = [Asset.Icon.Wizard, Asset.Icon.Thread, Asset.Icon.BaseBat, Asset.Icon.BaseBall];

const Activities = () => {
  const toast = useToast();
  const [state, dispatch] = useContext(GlobalContext);
  const onDisclosure = useDisclosure();

  useEffect(async() => {
    await dispatch({ type: 'START' });
    const payload = await getAllPosts();
    await dispatch({ type: 'FETCH_POSTS', payload });
    await dispatch({ type: 'COMPLETE' });
  }, []);

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
    {state.loading || !state.currentUser ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
     ) : (
      <Stack>
        <HeaderPrimary user={state.currentUser} Asset={Asset} />
        <ChatComponent user={state.currentUser} Asset={Asset} />
        <MainComponent
          posts={state.posts}
          activities={featuredICons}
          user={state.currentUser}
          events={events}
          Asset={Asset}
          onAddPost={handleAddPost}
          onDisclosure={onDisclosure}
        />
        <Footer Asset={Asset} />
      </Stack>
     )}
    </>
  );
};

export default Activities;
