// src/components/Register.js

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Link,
  Text,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
            email,
        }
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      navigate('/confirm');
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
          Register for Murder Mystery App
        </Heading>
        <form onSubmit={handleRegister}>
          <FormControl id="email" isRequired marginBottom="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired marginBottom="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirm-password" isRequired marginBottom="6">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full" marginBottom="4">
            Register
          </Button>
        </form>
        <Text>
          Already have an account?{' '}
          <Link color="blue.500" onClick={() => navigate('/login')}>
            Login
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Register;
