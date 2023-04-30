import ChatBox from 'react-chat-plugin';
import {
  Box,
  Stack,
  HStack,
  Avatar,
  Image,
  Text,
  Heading,
  Divider
} from "@chakra-ui/react";

const Chatbox = ({
  onSendMessage,
  attributes,
  user,
  Asset,
  onClickIcon
}) => {

  return (
    <>
      <Stack
        padding="10px"
        borderRadius="10px"
        bg="#3f3d56"
        pos="fixed"
        bottom="0"
        right="10"
      >
        <HStack pos="relative">
          <Stack marginRight="2">
            <Avatar border="1px solid white" src={user.avatar} />
          </Stack>
          <Stack lineHeight="3">
            <Heading color="white" fontSize="16px">{user.username}</Heading>
            <Text color="limegreen" fontSize="14px">Online</Text>
          </Stack>
          <Image
            src={Asset.Icon.Messages}
            objectFit="contain"
            boxSize="50px"
            right="-8"
            top="-8"
            pos="absolute"
            cursor="pointer"
            onClick={onClickIcon}
          />
        </HStack>
        <Divider />
        <Box>
          <ChatBox
            onSendMessage={onSendMessage}
            userId={1}
            messages={attributes.messages}
            showTypingIndicator={true}
            activeAuthor={{ username: 'user2', id: 2, avatarUrl: null }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default Chatbox;
