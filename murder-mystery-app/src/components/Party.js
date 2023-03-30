// src/components/Party.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import Character from './Character';

const Party = () => {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  useEffect(() => {
    fetchParty();
  }, [id]);

  const fetchParty = async () => {
    // Implement fetching party details from backend
  };

  if (!party) return null;

  return (
    <Box>
      <Heading>{party.name}</Heading>
      {party.characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Box>
  );
};

export default Party;
