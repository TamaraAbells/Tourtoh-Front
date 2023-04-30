import { useContext } from "react";
import { Stack, Center, Spinner } from "@chakra-ui/react";
import { GlobalContext } from "../../Context/GlobalState";
import { HeaderPrimary, Footer } from "../../Components/Commons";
import MainComponent from "./MainComponent";
import Asset from "../../Assets";

const events = [
    { title: 'Party in Bali', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events1 },
    { title: 'Eve in View Lake', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Events2 },
  ];
const destinations = [
    { title: 'I believe in evolution. But I also believe, when I hike the Grand Canyon and see it at sunset, that the hand of God is there also.', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Placeholder150 },
    { title: 'But I also believe, when I hike the Grand Canyon and see it at sunset, that the hand of God is there also.', datetime: new Date().toISOString(), description: 'Event description here.Event description here.Event description here.', image: Asset.Image.Placeholder150 },
  ];

const Destinations = () => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <>
      {!state.currentUser ? (
        <Center marginTop="50vh">
          <Spinner />
        </Center>
      ) : (
        <Stack>
          <HeaderPrimary Asset={Asset} user={state.currentUser} />
          <MainComponent
            Asset={Asset}
            events={events}
            destinations={destinations}
          />
          <Footer Asset={Asset} />
        </Stack>
      )} 
    </>
  );
};

export default Destinations;
