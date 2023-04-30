import {
  Box,
  Stack,
  HStack,
  Image,
  Text,
  Badge
} from "@chakra-ui/react";

const Notification = ({ Asset }) => (
  <Stack direction="row" justifyContent="space-between" w="100%">
    <HStack justifyContent="space-between">
      <Image src={Asset.Icon.NewMessage} boxSize="7" objectFit="contain" />
      <Text fontSize="16px">Messages</Text>
    </HStack>
    <Box>
      <Badge fontSize="12px" padding="5px 10px" colorScheme="red" borderRadius="50%">2</Badge>
    </Box>
  </Stack>
);

export default Notification;