import { useContext } from "react";
import { Stack, Center, Spinner } from "@chakra-ui/react";
import { GlobalContext } from "../../Context/GlobalState";
import { HeaderPrimary, Footer } from "../../Components/Commons";
import ChatComponent from "../../Components/Chat";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Asset from "../../Assets";

const AddStaySpace = () => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <>
    {state.loading || !state.currentUser ? (
      <Center marginTop="50vh">
        <Spinner />
      </Center>
    ) : (
      <Stack>
        <HeaderPrimary Asset={Asset} user={state.currentUser} />
        <HeaderComponent user={state.currentUser} Asset={Asset} />
        <ChatComponent user={state.currentUser} Asset={Asset} />
        <MainComponent Asset={Asset} user={state.currentUser} />
        <Footer Asset={Asset} />
      </Stack>
    )} 
  </>
  );
};

export default AddStaySpace;
