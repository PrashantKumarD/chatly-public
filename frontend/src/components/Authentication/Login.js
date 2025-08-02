import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack, Text, Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { setUser } = ChatState();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // Force a page reload to ensure proper state initialization
      window.location.href = "/chats";
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing={6}>
      {/* Welcome Message */}
      <Box textAlign="center" mb={2}>
        <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
          Welcome Back!
        </Text>
        <Text fontSize="sm" color="gray.600">
          Sign in to continue your conversations
        </Text>
      </Box>

      {/* Login Form */}
      <VStack spacing={4} w="100%">
        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">
            Email Address
          </FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            bg="gray.50"
            border="2px solid"
            borderColor="gray.200"
            borderRadius="xl"
            h="48px"
            fontSize="sm"
            _hover={{
              borderColor: "primary.300",
              bg: "white",
            }}
            _focus={{
              borderColor: "primary.500",
              bg: "white",
              boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
            }}
            transition="all 0.2s"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="gray.50"
              border="2px solid"
              borderColor="gray.200"
              borderRadius="xl"
              h="48px"
              fontSize="sm"
              _hover={{
                borderColor: "primary.300",
                bg: "white",
              }}
              _focus={{
                borderColor: "primary.500",
                bg: "white",
                boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
              }}
              transition="all 0.2s"
            />
            <InputRightElement h="48px" pr={4}>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClick}
                color="gray.500"
                _hover={{ color: "primary.500" }}
                p={0}
                minW="auto"
              >
                <Icon as={show ? FaEyeSlash : FaEye} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          bg="blue.500"
          color="white"
          width="100%"
          h="48px"
          borderRadius="xl"
          onClick={submitHandler}
          isLoading={loading}
          loadingText="Signing In..."
          fontSize="sm"
          fontWeight="semibold"
          _hover={{
            bg: "blue.600",
            transform: "translateY(-1px)",
            boxShadow: "lg",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.2s"
        >
          Sign In
        </Button>

        {/* Guest User Button */}
        <Button
          variant="outline"
          borderColor="gray.300"
          color="gray.600"
          width="100%"
          h="48px"
          borderRadius="xl"
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
          fontSize="sm"
          _hover={{
            borderColor: "primary.300",
            color: "primary.500",
            bg: "primary.50",
          }}
          transition="all 0.2s"
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </VStack>
  );
};

export default Login;
