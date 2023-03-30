// src/components/ErrorPage.js

import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Flex
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="gray.100"
    >
      <Box
        padding="6"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor="white"
        textAlign="center"
        marginBottom="6"
      >
        <Heading as="h2" size="xl" color="red.500">
          404
        </Heading>
        <Heading as="h3" size="lg" color="gray.700">
          Page not found
        </Heading>
        <Text fontSize="md" color="gray.600">
          The page you are looking for might have been removed or is temporarily unavailable.
        </Text>
      </Box>
      <Button colorScheme="blue" onClick={handleGoBack}>
        Go Back
      </Button>
    </Flex>
  );
};

export default ErrorPage;
