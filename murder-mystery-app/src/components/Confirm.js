// src/components/Confirm.js

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
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleConfirmation = async (e) => {
    e.preventDefault();

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      toast({
        title: 'Success',
        description: 'Account confirmed. Please log in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
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
          Confirm Your Account
        </Heading>
        <form onSubmit={handleConfirmation}>
          <FormControl id="email" isRequired marginBottom="4">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirmationCode" isRequired marginBottom="6">
            <FormLabel>Confirmation Code</FormLabel>
            <Input
              type="text"
              placeholder="Enter your confirmation code"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full" marginBottom="4">
            Confirm
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Confirm;
