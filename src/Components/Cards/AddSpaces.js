import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  HStack,
  Stack,
  ButtonGroup,
  Button,
  Heading,
  Text,
  Image,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiBed, BiBath } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AddBusinessSpace } from "../Modal";

const AddSpaces = ({ spaceArray, type, heading, activities }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box
        padding="1.5rem"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="20px"
        width="100%"
      >
        <HStack justifyContent="space-between" marginBottom="20px">
          <Heading
            fontFamily="inherit"
            fontSize="20px"
            fontWeight="700"
          >
            {heading}
          </Heading>
          {type == 'businessSpace' ? (
            <Button
              background="rgba(76, 175, 80, 0.51)"
              borderRadius="10px"
              onClick={onOpen}
              size="sm"
            >
              <Text>Add New</Text>
              <Spacer w={2} />
              <IoAddCircleOutline />
            </Button>
          ) : type == 'staySpace' ?(
            <Link as={RouterLink} to="/add-stay-space">
              <Button
                background="rgba(76, 175, 80, 0.51)"
                borderRadius="10px"
              >
                <Text>Add New</Text>
                <Spacer w={2} />
                <IoAddCircleOutline />
              </Button>
            </Link>
          ) : (null)}
        </HStack>
        {spaceArray.length &&
          spaceArray.map((data) => (
            <Stack
              direction={{ base: 'row' }}
              flexWrap="wrap"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="20px"
              padding="1rem"
              justifyContent={{ base: 'start', md: 'start' }}
              marginBottom="15px"
            >
              <Image src={data.imgUrl} alt={data.imgUrl} w={['100%', '36%']} />
              <Stack
                direction={{ base: 'row' }}
                justifyContent="space-between"
                flexWrap="wrap"
                w={['100%', '60%']}
                fontSize={['16px', '16px', '22px', '12px']}
                color="turquoise"
              >
                <Stack w={['100%', '50%']} flexWrap="wrap">
                  <Stack>
                    <Heading
                      fontFamily="inherit"
                      fontSize={['20px', '20px', '30px', '18px']}
                      fontWeight="700"
                      color="#2c66b8"
                    >
                      {data.title}
                    </Heading>
                    <HStack>
                      <HiOutlineLocationMarker />
                      <Text>{data.location}</Text>
                    </HStack>
                  </Stack>
                  <Stack>
                    <HStack>
                      <BiBed />
                      <Text>{data.bedrooms} Bedrooms</Text>
                    </HStack>
                    <HStack>
                      <BiBath />
                      <Text>{data.bathrooms} Full Bath</Text>
                    </HStack>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent="space-between"
                  w={['100%', '45%']}
                  flexWrap="wrap"
                >
                  <HStack
                    color="#2c66b8"
                    alignSelf={{ base: 'flex-end' }}
                    fontSize={['18px', '18px', '20px', '14px']}
                  >
                    <AiFillDollarCircle />
                    <Text>{data.price}/Night</Text>
                  </HStack>
                  <ButtonGroup color="white" size="sm" justifyContent="flex-end">
                    <HStack
                      flexWrap="wrap"
                      justifyContent="flex-end"
                    >
                      <Button bg="#f58642">More</Button>
                      <Button bg="#fee05f">Edit</Button>
                    </HStack>
                  </ButtonGroup>
                </Stack>
              </Stack> 
            </Stack>
          ))}
      </Box>
      <AddBusinessSpace activities={activities} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddSpaces;
