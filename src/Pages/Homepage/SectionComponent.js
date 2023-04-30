import { Box, Stack } from "@chakra-ui/react";
import {
  ThingsToDo,
  PeopleToMeet,
  PlacesToStay,
  PlacesToVisit,
  StuffsToExplore,
  Intro
} from "../../Components/Galleries";

const SectionComponent = ({ Asset, sliderAsset }) => {
  return (
    <>
      <Box>
        <Stack paddingTop="100px">
          <Intro
            title="THINGS TO DO"
            text="Doing what you like is freedom, liking what you do is happiness."
            color={"#213F5C"}
          />
          <ThingsToDo Asset={Asset} sliderAsset={sliderAsset} />
        </Stack>
        <Stack paddingTop="100px">
          <Intro
            title="PLACES TO STAY"
            text="At the end of the day your feet should be dirty, your hair messy and your eyes sparkling."
            color={"#285AAE"}
          />
          <PlacesToStay Asset={Asset} sliderAsset={sliderAsset} />
        </Stack>
        <Stack paddingTop="100px">
          <Intro
            title="PEOPLE TO MEET"
            text="Remember that happiness is a way of travel, not a destination."
            color={"#F58642"}
          />
          <PeopleToMeet Asset={Asset} sliderAsset={sliderAsset} />
        </Stack>
        <Stack paddingTop="100px">
          <Intro
            title="PLACES TO VISIT"
            text="We have nothing to lose and a world to see."
            color={"#FEE05F"}
          />
          <PlacesToVisit Asset={Asset} sliderAsset={sliderAsset} />
        </Stack>
        <Stack paddingTop="100px">
          <Intro
            title="STUFF TO EXPLORE"
            text="Once a year, go someplace you’ve never been before."
            color={"#0693A0"}
          />
          <StuffsToExplore Asset={Asset} sliderAsset={sliderAsset} />
        </Stack>
      </Box>
    </>
  );
};

export default SectionComponent;
