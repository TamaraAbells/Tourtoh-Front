import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Stack, HStack, Center, Text, Button, useDisclosure } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { CreateReview } from "../Modal";

const Ratings = ({ boxShadow, size, Asset }) => {
  const [ratings, setRatings] = useState(4.2);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleRatingsChange = (rating) => {
    setRatings(rating);
    onOpen();
  };

  return (
    <>
      <Button w="100%" variant="ghost" marginTop={['0', '0', '0', '50px']}>
        <HStack
          flexWrap="wrap"
          padding="1.5rem"
          boxShadow={boxShadow ? "0px 2px 4px rgba(0, 0, 0, 0.25)" : ""}
          borderRadius="20px"
          width="100%"
          justifyContent="center"
          color="#163c5a"
          fontSize={size == 'sm' ? [10, 10, 10, 10] : size == 'lg' ? [10, 10, 10, 20] : [10, 10, 10, 25]}
        >
          <Stack direction={{ base: 'column', md: 'row' }}>
          <ReactStars
            count={5}
            onChange={handleRatingsChange}
            size={size == 'sm' ? 10 : size == 'lg'? 30 : 20}
            isHalf={true}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            fullIcon={<BsStarFill />}
            activeColor="#163c5a"
            value={ratings}
          />
            <Stack paddingBottom={['40px', 0]} direction="row" alignItems="center">
              <Text display="flex" alignSelf="center">{ratings.toFixed(1)}</Text>
              <Center>
                <Text>(49 Reviews)</Text>
              </Center>
            </Stack>
          </Stack>
        </HStack>
      </Button>
      <CreateReview isOpen={isOpen} onClose={onClose} Asset={Asset} />
    </>
  );
};

export default Ratings;

