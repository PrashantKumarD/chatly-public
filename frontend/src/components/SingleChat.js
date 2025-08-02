import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProfileModal from "./miscellaneous/ProfileModal";
import ScrollableChat from "./ScrollableChat";
import Lottie from "react-lottie";
import animationData from "../animations/typing.json";

import io from "socket.io-client";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
import { ChatState } from "../Context/ChatProvider";
const ENDPOINT = "https://chatly-chat-app.onrender.com"; // Production endpoint
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const { data } = await axios.post(
          "/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );
        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
    // eslint-disable-next-line
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <>
      {selectedChat ? (
        <>
          {/* Chat Header */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
            borderBottom="1px solid"
            borderColor="gray.200"
            bg="white"
          >
            <Box display="flex" alignItems="center" gap={3}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                icon={<ArrowBackIcon />}
                onClick={() => setSelectedChat("")}
                variant="ghost"
                size="sm"
              />
              <Text
                fontSize="lg"
                fontWeight="semibold"
                color="gray.800"
                fontFamily="Inter"
              >
                {messages &&
                  (!selectedChat.isGroupChat
                    ? getSender(user, selectedChat.users)
                    : selectedChat.chatName)}
              </Text>
            </Box>
            
            {messages &&
              (!selectedChat.isGroupChat ? (
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              ) : (
                <UpdateGroupChatModal
                  fetchMessages={fetchMessages}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              ))}
          </Box>

          {/* Messages Area */}
          <Box
            flex="1"
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            bg="gray.50"
            position="relative"
            overflow="hidden"
          >
            {loading ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="100%"
              >
                <Spinner size="xl" color="blue.500" thickness="3px" />
              </Box>
            ) : (
              <Box
                flex="1"
                overflowY="auto"
                p={4}
                css={{
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#c1c1c1',
                    borderRadius: '3px',
                  },
                }}
              >
                <ScrollableChat messages={messages} />
              </Box>
            )}

            {/* Typing Indicator */}
            {istyping && (
              <Box px={4} pb={2}>
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={2}
                  display="inline-block"
                  boxShadow="sm"
                >
                  <Lottie
                    options={defaultOptions}
                    width={50}
                    height={25}
                  />
                </Box>
              </Box>
            )}

            {/* Message Input */}
            <Box p={5} bg="gray.50" borderTop="1px solid" borderColor="gray.200">
              <FormControl onKeyDown={sendMessage}>
                <Box 
                  display="flex" 
                  gap={3} 
                  alignItems="center"
                  bg="white"
                  p={3}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.200"
                  _focusWithin={{
                    borderColor: "blue.400",
                    shadow: "sm",
                  }}
                >
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={typingHandler}
                    bg="transparent"
                    border="none"
                    px={3}
                    py={3}
                    _focus={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                    fontSize="sm"
                  />
                  <IconButton
                    colorScheme="blue"
                    icon={<Text fontSize="lg">→</Text>}
                    onClick={(e) => {
                      e.preventDefault();
                      sendMessage({ key: "Enter" });
                    }}
                    size="md"
                    borderRadius="lg"
                    isDisabled={!newMessage.trim()}
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    _disabled={{
                      opacity: 0.4,
                      cursor: "not-allowed",
                    }}
                    transition="all 0.2s"
                  />
                </Box>
              </FormControl>
            </Box>
          </Box>
        </>
      ) : (
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          h="100%"
          flexDirection="column"
          gap={4}
        >
          <Box
            p={8}
            borderRadius="xl"
            bg="gray.50"
            textAlign="center"
            maxW="md"
          >
            <Text fontSize="xl" color="gray.600" fontWeight="medium" mb={2}>
              Welcome to Chatly
            </Text>
            <Text fontSize="md" color="gray.500">
              Select a conversation to start messaging
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
