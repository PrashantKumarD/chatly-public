import { Box, Container, Flex, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useState, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user, selectedChat } = ChatState();

  useEffect(() => {
    // Wait for user to be loaded from localStorage
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [user]);

  // Show loading spinner while user data is being loaded
  if (isLoading || !user) {
    return (
      <Box 
        w="100%" 
        h="100vh" 
        bg="transparent"
        overflow="hidden"
      >
        <Center h="100vh">
          <Spinner size="xl" color="blue.500" thickness="4px" />
        </Center>
      </Box>
    );
  }

  return (
    <Box 
      w="100%" 
      h="100vh" 
      bg="transparent"
      overflow="hidden"
    >
      <SideDrawer />
      <Container 
        maxW="7xl" 
        h="calc(100vh - 80px)" 
        pt={4}
        px={4}
      >
            <Flex 
              gap={5} 
              h="100%" 
              direction={{ base: "column", md: "row" }}
            >
              <Box
                display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
                flexDir="column"
                flex={{ base: "1", md: "0 0 360px" }}
                h={{ base: "100%", md: "100%" }}
                bg="white"
                borderRadius="xl"
                shadow="sm"
                border="1px solid"
                borderColor="gray.200"
                overflow="hidden"
              >
                <MyChats fetchAgain={fetchAgain} />
              </Box>
              
              <Box
                display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
                flex="1"
                bg="white"
                borderRadius="xl"
                shadow="sm"
                border="1px solid"
                borderColor="gray.200"
                overflow="hidden"
                flexDirection="column"
              >
                <Chatbox 
                  fetchAgain={fetchAgain} 
                  setFetchAgain={setFetchAgain} 
                />
              </Box>
            </Flex>
          </Container>
    </Box>
  );
};

export default Chatpage;
