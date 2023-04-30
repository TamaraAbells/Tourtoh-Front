import {
  Heading,
  Stack,
  Box,
  Center,
  Button,
  Image,
  SimpleGrid
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const Photos = ({ Asset }) => {
  return (
    <>
      <Box
        width="100%"
        height={{ base: null, lg: '250px' }}
        marginTop="2rem"
        padding={[3, 3, 5, 10]}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        justifyContent="center"
      >
        <Stack>
          <Stack>
            <Box position="relative">
              <Heading
                  position={{ base: null, lg: 'relative' }}
                  top={{ base: null, lg: '5rem' }}
                  transform={{ base: null, lg: 'translateX(-50%) translateY(-50%) rotate(-90deg)' }}
                  width="max-content"
                  color="#063154"
                  fontStyle="inherit"
                  fontFamily="inherit"
                  fontSize={[20, 20, 25, 35]}
                  marginBottom={['10px', '10px', '20px', 0]}
              >
                Photos
              </Heading>
            </Box>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justifyContent="space-around"
              w="100%"
              alignItems="inherit"
            >
              <Box marginLeft={[0, 0, 0, '100px']}>
                <SimpleGrid
                  columns={[4 , 7, 7, 12]}
                  w={{ base: '100%', lg: '100%' }}
                  spacing="10px"
                >
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Image borderRadius="10px" objectFit="cover" src={Asset.Image.Placeholder150} />
                  <Center
                    boxSize="100%"
                    borderRadius="10px"
                    borderWidth="2px"
                    borderColor="#063154"
                  >
                    <Button bgColor="#ee8641" size="sm">
                      <AddIcon />
                    </Button>
                  </Center>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box> 
    </>
  );
};

export default Photos;
