import {
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  Link,
  Divider,
  List,
  ListItem,
  ListIcon,
  Image
} from "@chakra-ui/react"
import { GoEye, GoCreditCard } from "react-icons/go"
import { GrShare, GrBook } from "react-icons/gr"

const SearchResult = ({ destination }) => {
  return(
    <>
      <Stack
        boxShadow={'1px 1px 1px rgba(0, 0, 0, 0.25)'}
        padding={'10px 20px'}
        borderRadius={'5px'}
      >
        <Stack direction="row">
          <Image boxSize={'100px'} src={destination.image} />
          <Stack>
            <Heading fontSize={['15px', '20px']}>{destination.title}</Heading>
            <Box fontSize={'12px'}>
              <HStack>
                <Text fontWeight={'700'}>Authors: </Text>
                <Text>{destination.author}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Journal: </Text>
                <Text>{destination.journal}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Main Topic: </Text>
                <Text>{destination.topic}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={'700'}>Publisher: </Text>
                <Text>{destination.publisher}</Text>
              </HStack>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <List
            display={'flex'}
            justifyContent={'space-between'}
            w={'100%'}
            fontSize={['11px', '13px']}
          >
            <HStack justifyContent={'space-between'}>
              <ListItem as={Link}>
                <ListIcon as={GoEye} />
                Read
              </ListItem>
              <ListItem as={Link}>
                <ListIcon as={GoCreditCard} />
                Details
              </ListItem>
              <ListItem as={Link}>
                <ListIcon as={GrShare} />
                Share
              </ListItem>
            </HStack>
            <ListItem>
              <ListIcon as={GrBook} />
              7000 Reads
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </>
  )
}

export default SearchResult