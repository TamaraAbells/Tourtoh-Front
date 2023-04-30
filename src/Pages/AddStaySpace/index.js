import { useContext } from "react";
import { Stack, Center, Spinner } from "@chakra-ui/react";
import { GlobalContext } from "../../Context/GlobalState";
import { HeaderPrimary, Footer } from "../../Components/Commons";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Asset from "../../Assets";

const AddStaySpace = () => {
  const [state, dispatch] = useContext(GlobalContext);
  console.log('LOADINGSTATE', state)

  return (
    <>
      {state.loading ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Stack>
          <HeaderPrimary Asset={Asset} user={state.currentUser} />
          <HeaderComponent user={state.currentUser} Asset={Asset} />
          <MainComponent Asset={Asset} />
          <Footer Asset={Asset} />
        </Stack>
      )} 
    </>
  );
};

export default AddStaySpace;
