import Whirligig from "react-whirligig";
import {
    HStack,
    Image,
    Avatar,
    Button,
    Center,
    useBreakpointValue
  } from "@chakra-ui/react";

const AvatarSlider = ({ Asset, sliderAsset }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  const winSize = useBreakpointValue(['sm', 'md', 'lg']);
  
  return (
    <HStack
      background="#FFFFFF"
      boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      padding="1.2rem"
      justifyContent="space-between"
      width={useBreakpointValue(['90%', '90%', '70%'])}
      position="absolute"
      bottom="0"
    >
      <HStack justifyContent="space-between" overflow="hidden">
        <Button
          padding="0"
          variant="ghost"
          leftIcon={<Image src={Asset.Icon.Previous} boxSize={useBreakpointValue(['20px', '40px'])} />}
          onClick={prev}
        />
        <HStack overflow="hidden">
          <Whirligig
            visibleSlides={useBreakpointValue([4, 4, 5, 8])}
            gutter="0.5em"
            className="whirlig"
            ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            {sliderAsset.map((_) => (
              <>
                <HStack>
                  <Center
                    bgGradient="linear(to-b, #093356 0%, #375672 48.44%, #afb5bb 100%)"
                    borderRadius="50%"
                    padding="3px"
                  >
                    <Avatar size={winSize == 'sm' ? 'sm' : 'lg'} src={_} alt={_} />
                  </Center>
                </HStack>
              </>
            ))}
          </Whirligig>
        </HStack>
        <Button
          padding="0"
          variant="ghost"
          rightIcon={<Image boxSize={useBreakpointValue(['20px', '40px'])} src={Asset.Icon.Next} />}
          onClick={next}
        />
      </HStack>
    </HStack>
  )
};

export default AvatarSlider;