import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { ChatFrame } from 'react-chat-plugin';
import Chatbox from "./Chatbox";
import Notification from "./Notification";
import { chatAttributes } from "./stub";

const ChatComponent = ({ user, Asset }) => {
  const [attributes, setAttributes] = useState(chatAttributes);

  const handleClickIcon = () => {
    setAttributes({
      ...attributes,
      showChatbox: !attributes.showChatbox,
      showIcon: !attributes.showIcon,
    });
  };
  const onSendMessage = (message) => {
    setAttributes({
      ...attributes,
      messages: attributes.messages.concat({
        author: {
          username: user.username,
          id: 1,
          avatarUrl: user.avatar
        },
        text: message,
        type: 'text',
        timestamp: +new Date(),
      }),
    });
  };

  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <ChatFrame
        chatbox={
          <Chatbox
            attributes={attributes}
            onSendMessage={onSendMessage}
            user={user}
            Asset={Asset}
            onClickIcon={handleClickIcon}
          />
        }
        icon={<Notification Asset={Asset} />}
        clickIcon={handleClickIcon}
        showChatbox={attributes.showChatbox}
        showIcon={attributes.showIcon}
        iconStyle={{
          background: 'white',
          fill: 'white',
          width: '250px',
          borderRadius: 10,
          padding: '0 30px',
          boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)'
        }}
      />
    </Box>
  );
};

export default ChatComponent;
