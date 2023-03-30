// src/components/CreateParty.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CreateParty = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Implement creating a new party using the backend service
    navigate('/dashboard');
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Party Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <Button onClick={handleSubmit}>Create Party</Button>
    </Box>
  );
};

export default CreateParty;
