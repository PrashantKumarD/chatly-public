import { Avatar, Box, Text } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import ensureHttps from "../utils/imageUtils";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <Box flex="1" overflowY="auto" p={6}>
      <ScrollableFeed>
        {messages &&
          messages.map((m, i) => (
            <Box 
              key={m._id}
              display="flex" 
              alignItems="flex-end"
              mb={isSameUser(messages, m, i, user._id) ? 2 : 4}
              justifyContent={m.sender._id === user._id ? "flex-end" : "flex-start"}
            >
              {/* Avatar for other users */}
              {m.sender._id !== user._id && 
               (isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                  <Avatar
                    size="sm"
                    mr={3}
                    cursor="pointer"
                    name={m.sender.name}
                    src={ensureHttps(m.sender.pic)}
                  />
                </Tooltip>
              )}
              
              {/* Message bubble */}
              <Box
                bg={m.sender._id === user._id ? "blue.500" : "gray.100"}
                color={m.sender._id === user._id ? "white" : "gray.800"}
                px={5}
                py={3}
                borderRadius="2xl"
                maxW="65%"
                position="relative"
                ml={m.sender._id !== user._id && !isSameSender(messages, m, i, user._id) && !isLastMessage(messages, i, user._id) ? "44px" : "0"}
                shadow="sm"
                _hover={{
                  shadow: "md",
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s"
              >
                <Text fontSize="sm" lineHeight="1.5">
                  {m.content}
                </Text>
              </Box>
            </Box>
          ))}
      </ScrollableFeed>
    </Box>
  );
};

export default ScrollableChat;
