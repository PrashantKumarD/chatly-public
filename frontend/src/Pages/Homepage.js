import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { FaComments, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import logofinal from "../logofinal.webp";

function Homepage() {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollToPreview = () => {
    const previewSection = document.getElementById('preview-section');
    if (previewSection) {
      previewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openImageModal = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, title });
    onOpen();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
    
    // Trigger animation
    setTimeout(() => setIsLoaded(true), 100);
  }, [history]);

  return (
    <Box 
      minH="100vh" 
      bg="transparent"
      position="relative"
    >
      <Container maxW="6xl" py={8}>
        <VStack spacing={8} align="center">
          {/* Hero Section */}
          <VStack 
            spacing={4} 
            align="center" 
            textAlign="center"
            opacity={isLoaded ? 1 : 0}
            transform={isLoaded ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.6s ease-out"
          >
            {/* Logo */}
            <Box
              transform={isLoaded ? "scale(1)" : "scale(0.95)"}
              transition="all 0.5s ease-out 0.1s"
            >
              <Image
                src={logofinal}
                alt="Chatly Logo"
                maxH="160px"
                maxW="350px"
                objectFit="contain"
              />
            </Box>

            {/* Modern Heading */}
            <VStack spacing={3}>
              <Heading
                as="h1"
                size="xl"
                fontFamily="Poppins"
                fontWeight="700"
                color="gray.800"
                lineHeight="1.2"
              >
                Connect. Chat. Collaborate.
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="500px"
                fontWeight="400"
                lineHeight="1.5"
              >
                A simple and elegant chat platform for seamless communication.
              </Text>
            </VStack>

            {/* Feature Icons */}
            <HStack spacing={6} mt={6} flexWrap="wrap" justify="center">
              {[
                { icon: FaComments, label: "Real-time Chat", color: "blue" },
                { icon: FaShieldAlt, label: "Secure", color: "green" },
                { icon: FaRocket, label: "Fast", color: "purple" },
                { icon: FaUsers, label: "Group Chat", color: "orange" },
              ].map((feature, index) => (
                <VStack
                  key={feature.label}
                  spacing={2}
                  opacity={isLoaded ? 1 : 0}
                  transform={isLoaded ? "translateY(0)" : "translateY(15px)"}
                  transition={`all 0.5s ease-out ${0.3 + index * 0.05}s`}
                >
                  <Box
                    p={2}
                    borderRadius="lg"
                    bg={`${feature.color}.50`}
                    color={`${feature.color}.600`}
                    _hover={{
                      bg: `${feature.color}.100`,
                    }}
                    transition="all 0.2s"
                  >
                    <Icon as={feature.icon} w={5} h={5} />
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color="gray.600">
                    {feature.label}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </VStack>

          {/* Demo Button */}
          <Button
            colorScheme="blue"
            size="lg"
            onClick={scrollToPreview}
            opacity={isLoaded ? 1 : 0}
            transform={isLoaded ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.6s ease-out 0.2s"
            _hover={{
              transform: "translateY(-2px)",
              shadow: "lg",
            }}
          >
            See Demo
          </Button>

          {/* Auth Card */}
          <Box
            w="100%"
            maxW="md"
            opacity={isLoaded ? 1 : 0}
            transform={isLoaded ? "translateY(0)" : "translateY(15px)"}
            transition="all 0.6s ease-out 0.4s"
          >
            <Box
              bg="white"
              borderRadius="xl"
              shadow="lg"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
            >
              <Box p={6}>
                <Tabs 
                  variant="soft-rounded" 
                  colorScheme="blue" 
                  isFitted
                >
                  <TabList 
                    mb={6} 
                    bg="gray.50" 
                    p={1} 
                    borderRadius="lg"
                  >
                    <Tab
                      fontWeight="medium"
                      _selected={{
                        bg: "white",
                        color: "blue.600",
                        shadow: "sm",
                      }}
                      transition="all 0.2s"
                    >
                      Sign In
                    </Tab>
                    <Tab
                      fontWeight="medium"
                      _selected={{
                        bg: "white",
                        color: "blue.600",
                        shadow: "sm",
                      }}
                      transition="all 0.2s"
                    >
                      Sign Up
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel p={0}>
                      <Login />
                    </TabPanel>
                    <TabPanel p={0}>
                      <Signup />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>

          {/* Screenshots Preview Section */}
          <VStack 
            id="preview-section"
            spacing={6} 
            w="100%" 
            opacity={isLoaded ? 1 : 0}
            transform={isLoaded ? "translateY(0)" : "translateY(20px)"}
            transition="all 0.6s ease-out 0.3s"
            py={8}
          >
            <VStack spacing={3} textAlign="center">
              <Heading
                as="h2"
                size="lg"
                fontFamily="Poppins"
                fontWeight="600"
                color="gray.800"
              >
                See Chatly in Action
              </Heading>
              <Text
                fontSize="md"
                color="gray.600"
                maxW="500px"
              >
                Experience seamless communication with our intuitive and modern interface
              </Text>
            </VStack>
            
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 4 }} 
              spacing={6} 
              w="100%"
              pt={4}
            >
              <Box
                borderRadius="xl"
                overflow="hidden"
                shadow="lg"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                }}
                transition="all 0.3s ease"
                onClick={() => openImageModal("/screenshots/Screenshot 2025-08-02 024729.png", "Chat Interface")}
              >
                <Image
                  src="/screenshots/Screenshot 2025-08-02 024729.png"
                  alt="Chat Interface"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Box p={3}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                    Chat Interface
                  </Text>
                </Box>
              </Box>

              <Box
                borderRadius="xl"
                overflow="hidden"
                shadow="lg"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                }}
                transition="all 0.3s ease"
                onClick={() => openImageModal("/screenshots/Screenshot 2025-08-02 024747.png", "Real-time Messaging")}
              >
                <Image
                  src="/screenshots/Screenshot 2025-08-02 024747.png"
                  alt="Real-time Messaging"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Box p={3}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                    Real-time Messaging
                  </Text>
                </Box>
              </Box>

              <Box
                borderRadius="xl"
                overflow="hidden"
                shadow="lg"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                }}
                transition="all 0.3s ease"
                onClick={() => openImageModal("/screenshots/Screenshot 2025-08-02 024903.png", "Group Features")}
              >
                <Image
                  src="/screenshots/Screenshot 2025-08-02 024903.png"
                  alt="Group Features"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Box p={3}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                    Group Features
                  </Text>
                </Box>
              </Box>

              <Box
                borderRadius="xl"
                overflow="hidden"
                shadow="lg"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                cursor="pointer"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                }}
                transition="all 0.3s ease"
                onClick={() => openImageModal("/screenshots/Screenshot 2025-08-02 025313.png", "User Profile")}
              >
                <Image
                  src="/screenshots/Screenshot 2025-08-02 025313.png"
                  alt="User Profile"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Box p={3}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                    User Profile
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </VStack>

          {/* Footer */}
          <Text
            fontSize="sm"
            color="gray.500"
            textAlign="center"
            opacity={isLoaded ? 1 : 0}
            transition="all 0.6s ease-out 0.6s"
          >
            © 2025 Chatly. Simple and elegant communication.
          </Text>
        </VStack>
      </Container>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="white" borderRadius="xl" overflow="hidden">
          <ModalCloseButton
            bg="white"
            borderRadius="full"
            m={4}
            _hover={{ bg: "gray.100" }}
          />
          <ModalBody p={0}>
            {selectedImage && (
              <Box>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  w="100%"
                  h="auto"
                  maxH="80vh"
                  objectFit="contain"
                />
                <Box p={6} bg="gray.50">
                  <Heading size="md" color="gray.800" fontFamily="Poppins">
                    {selectedImage.title}
                  </Heading>
                  <Text color="gray.600" mt={2}>
                    Click anywhere outside to close
                  </Text>
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Homepage;
