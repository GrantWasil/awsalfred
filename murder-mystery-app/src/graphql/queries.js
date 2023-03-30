/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      name
      characters {
        items {
          id
          partyID
          name
          background
          money
          items
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listParties = /* GraphQL */ `
  query ListParties(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        characters {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      partyID
      name
      background
      money
      items
      abilities {
        name
        uses
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        partyID
        name
        background
        money
        items
        abilities {
          name
          uses
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const charactersByPartyID = /* GraphQL */ `
  query CharactersByPartyID(
    $partyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    charactersByPartyID(
      partyID: $partyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        partyID
        name
        background
        money
        items
        abilities {
          name
          uses
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
