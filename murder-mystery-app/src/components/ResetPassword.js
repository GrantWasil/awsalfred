// src/components/ResetPassword.js

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

const ResetPassword = ({ email }) => {
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await Auth.completeNewPassword(email, newPassword);
      toast({
        title: 'Success',
        description: 'Password updated. Please log in.',
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
          Reset Your Password
        </Heading>
        <form onSubmit={handleResetPassword}>
          <FormControl id="newPassword" isRequired marginBottom="6">
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full" marginBottom="4">
            Reset Password
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ResetPassword;
