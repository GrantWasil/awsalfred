// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listParties } from '../graphql/queries';
import { Box, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    fetchParties();
  }, []);

  const fetchParties = async () => {
    try {
      const partyData = await API.graphql(graphqlOperation(listParties));
      setParties(partyData.data.listParties.items);
    } catch (error) {
      console.error('Error fetching parties:', error);
    }
  };
  return (
    <Box>
      <Heading>Dashboard</Heading>
      {parties.map((party) => (
        <Link key={party.id} to={`/party/${party.id}`}>
          {party.name}
        </Link>
      ))}
      <Button as={Link} to="/createparty">
        Create Party
      </Button>
    </Box>
  );
};

export default Dashboard;
