import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text, HStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  // Helper function to get user picture for chat
  const getChatAvatar = (chat) => {
    if (chat.isGroupChat) {
      return null; // Will use default group avatar
    } else {
      // For direct chat, get the other user's picture
      if (!loggedUser) return null;
      const otherUser = chat.users.find(u => u._id !== loggedUser._id);
      return otherUser?.pic;
    }
  };

  // Helper function to get chat name
  const getChatName = (chat) => {
    return !chat.isGroupChat && loggedUser
      ? getSender(loggedUser, chat.users)
      : chat.chatName;
  };

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      bg="white"
      w={{ base: "100%", md: "100%" }}
      h="100%"
      borderRadius="xl"
      overflow="hidden"
    >
      {/* Header Section */}
      <Box
        p={5}
        borderBottom="1px solid"
        borderColor="gray.100"
        bg="gray.50"
      >
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            fontFamily="Inter"
          >
            My Chats
          </Text>
          <GroupChatModal>
            <Button
              size="sm"
              colorScheme="blue"
              variant="solid"
              rightIcon={<AddIcon />}
              fontSize="sm"
              borderRadius="lg"
              _hover={{
                bg: "blue.600",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              New Group Chat
            </Button>
          </GroupChatModal>
        </Stack>
      </Box>

      {/* Chat List Section */}
      <Box
        flex="1"
        p={4}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '2px',
          },
        }}
      >
        {chats && loggedUser ? (
          <Stack spacing={3}>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "blue.500" : "transparent"}
                color={selectedChat === chat ? "white" : "gray.800"}
                p={4}
                borderRadius="lg"
                key={chat._id}
                _hover={{
                  bg: selectedChat === chat ? "blue.600" : "gray.50",
                  transform: "translateX(2px)",
                }}
                transition="all 0.2s"
                border="1px solid"
                borderColor={selectedChat === chat ? "blue.500" : "transparent"}
              >
                <HStack spacing={3} align="flex-start">
                  {/* Avatar */}
                  <Avatar
                    size="md"
                    name={getChatName(chat)}
                    src={getChatAvatar(chat)}
                    bg={chat.isGroupChat ? "purple.500" : "blue.500"}
                    color="white"
                    flexShrink={0}
                  />
                  
                  {/* Chat Info */}
                  <Box flex="1" minW={0}>
                    <Text 
                      fontWeight="medium" 
                      fontSize="sm" 
                      mb={1}
                      isTruncated
                    >
                      {getChatName(chat)}
                    </Text>
                    {chat.latestMessage && (
                      <Text 
                        fontSize="xs" 
                        opacity={selectedChat === chat ? 0.9 : 0.7}
                        lineHeight="1.3"
                        isTruncated
                      >
                        <Text as="span" fontWeight="medium">
                          {chat.latestMessage.sender.name}: 
                        </Text>{" "}
                        {chat.latestMessage.content.length > 30
                          ? chat.latestMessage.content.substring(0, 30) + "..."
                          : chat.latestMessage.content}
                      </Text>
                    )}
                  </Box>
                </HStack>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;