// src/components/Login.js

import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, FormControl, FormLabel, Input, useToast, Link } from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const signInResponse = await Auth.signIn(email, password);
  
      if (signInResponse.challengeName === 'NEW_PASSWORD_REQUIRED') {
        navigate(`/reset-password`); // Redirect to the reset password page
        return;
      }
  
      navigate('/dashboard'); // Redirect to your dashboard or desired route
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        // Redirect to the confirm page if the user is not confirmed
        navigate('/confirm');
      } else {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Flex minHeight="100vh" justifyContent="center" alignItems="center" backgroundColor="gray.100">
      <Box
        padding="6"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor="white"
        textAlign="center"
        width={['100%', '100%', '80%', '50%']}
      >
        <Heading as="h2" size="lg" marginBottom="6">
          Login to Murder Mystery App
        </Heading>
        <form onSubmit={handleLogin}>
          <FormControl id="email" isRequired marginBottom="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired marginBottom="6">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full">
            Login
          </Button>
        </form>
        <Text>
          Don't have an account?{' '}
          <Link color="blue.500" onClick={() => navigate('/register')}>
            Register
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
