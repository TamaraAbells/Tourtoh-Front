import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { GlobalContext } from "../../Context/GlobalState";

import { useRouter } from "../../Hooks/useRouter";
import HeroComponent from "./HeroComponent";
import HYGComponent from "./HYGComponent";
import SectionComponent from "./SectionComponent";
import { Footer } from "../../Components/Commons";
import Asset from "../../Assets";

const Homepage = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const router = useRouter();

  const avatarSlider = [
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
    Asset.Image.User,
  ];


  return (
    <>
      {state.currentUser ? (
        router.push('/activities')
      ) : (
        <Box width="100%" overflow="hidden">
          <HeroComponent Asset={Asset} />
          <HYGComponent Asset={Asset} user={state.currentUser} />
          <SectionComponent Asset={Asset} sliderAsset={avatarSlider} />
          <Footer Asset={Asset} />
        </Box>
      )}
    </>
  );
};

export default Homepage;
