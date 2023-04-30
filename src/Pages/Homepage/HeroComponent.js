import {
  VStack,
  HStack,
  Box,
  Heading,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CalendarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { HeaderSecondary } from "../../Components/Commons";

const HeroComponent = ({ Asset }) => (
  <Box
    width="100%"
    height="100vh"
    bgImage={Asset.Image.HeroBg}
    bgPosition="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <HeaderSecondary Asset={Asset} />
    <VStack width="90%" margin="4rem auto 2rem">
      <Heading
        color="var(--white-color)"
        fontSize={useBreakpointValue({ base: '3em', sm: '5em', md: '7em', lg: '7em' })}
        textTransform="uppercase"
        fontFamily="inherit"
      >
        TOURTOH
      </Heading>
      <Box
        background="rgba(0, 0, 0, 0.3)"
        borderRadius="20px"
        marginTop="2rem"
        padding="1.5rem"
      >
        <FormControl>
          <HStack
            flexWrap="wrap"
            justifyContent="center"
            marginTop="-10px"
            marginLeft="-10px"
          >
          <InputGroup
            marginLeft="10px"
            width={useBreakpointValue(['100%', '100%', '45%', '23%'])}
          >
            <InputLeftElement
              pointerEvents="none"
              marginTop="10px"
              children={<InfoOutlineIcon color="#2f2e41" />}
            />
            <Input
              placeholder="Where"
              variant="filled"
              height="45px"
              padding="0 2rem"
              borderRadius="6px"
              marginTop="10px"
              _focus={{ background: 'whiteAlpha.900' }}
            />
          </InputGroup>
          <InputGroup
            marginLeft="10px"
            width={useBreakpointValue(['100%', '100%', '45%', '23%'])}
          >
            <InputLeftElement
              pointerEvents="none"
              marginTop="10px"
              children={<CalendarIcon color="#2f2e41" />}
            />
            <Input
              placeholder="When"
              variant="filled"
              height="45px"
              padding="0 2rem"
              borderRadius="6px"
              marginTop="10px"
              _focus={{ background: 'whiteAlpha.900' }}
            />
          </InputGroup>
          <InputGroup 
            marginLeft="10px"
            width={useBreakpointValue(['100%', '100%', '45%', '23%'])}
          >
            <InputLeftElement
              pointerEvents="none"
              marginTop="10px"
              children={<CalendarIcon color="#2f2e41" />}
            />
            <Input
              placeholder="Why"
              variant="filled"
              height="45px"
              padding="0 2rem"
              borderRadius="6px"
              marginTop="10px"
              _focus={{ background: 'whiteAlpha.900' }}
            />
          </InputGroup>
          <InputGroup
            marginLeft="10px"
            width={useBreakpointValue(['100%', '100%', '45%', '23%'])}
          >
            <Button
              width="100%"
              height="45px"
              padding="0 90px"
              marginTop="10px"
              borderRadius="6px"
              background="var(--off-color-1)"
              color="var(--yellow-color-4)"
              fontWeight="bold"
              fontSize="1.1rem"
              fontFamily="inherit"
              textTransform="uppercase"
              transition="all 0.3s"
            >
              Explore
            </Button>
          </InputGroup>
          </HStack>
        </FormControl>
      </Box>
    </VStack>
  </Box>
);

export default HeroComponent;

