// src/components/Character.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Character = ({ character }) => {
  return (
    <Box>
      <Text>Name: {character.name}</Text>
      <Text>Background: {character.background}</Text>
      <Text>Money: {character.money}</Text>
      <Text>Items: {character.items.join(', ')}</Text>
      <Text>Abilities: {character.abilities.map((ability) => (
        <span key={ability.name}>{ability.name} ({ability.uses} uses)</span>
      ))}</Text>
    </Box>
  );
};

export default Character;
