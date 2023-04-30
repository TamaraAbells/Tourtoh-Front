import {
  Stack,
  Center,
  Heading,
  Spacer, 
  Button
} from '@chakra-ui/react';

import AddSpace from './AddSpace';
import GeneralAmenities from './GeneralAmenities';
import BedroomOptions from './BedroomOptions';
import BathroomOptions from './BathroomOptions';
import KitchenOptions from './KitchenOptions';
import OfficeWorkspace from './OfficeWorkspace';
import Additionals from './Additionals';
import Rules from './Rules';
import Photos from './Photos';
import Info from './Info';

const MainComponent = ({ Asset }) => {
  return (
    <>
      <Stack
        padding={['1rem', '1rem', '2rem', '3rem']}
        justifyContent="space-between"
      >
        <Center>
          <Heading fontFamily="inherit" fontWeight="400" margin="20px 0">
            Add Stay Space
          </Heading>
        </Center>
        <AddSpace Asset={Asset} />
        <Spacer />
        <GeneralAmenities Asset={Asset} />
        <Spacer />
        <BedroomOptions Asset={Asset} />
        <Spacer />
        <BathroomOptions Asset={Asset} />
        <Spacer />
        <KitchenOptions Asset={Asset} />
        <Spacer />
        <OfficeWorkspace Asset={Asset} />
        <Spacer />
        <Additionals Asset={Asset} />
        <Spacer />
        <Rules Asset={Asset}/>
        <Spacer />
        <Photos Asset={Asset} />
        <Spacer />
        <Info Asset={Asset} />
        <Center paddingTop="50px">
          <Button
            color="#FFF"
            bgColor="#063154"
            fontFamily="inherit"
            fontSize={[12, 12, 16, 20]}
            padding="20px"
          >
            ADD STAY SPACE
          </Button>
        </Center>
      </Stack>
    </>
  );
};

export default MainComponent;
