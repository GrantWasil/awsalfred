/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty(
    $filter: ModelSubscriptionPartyFilterInput
    $owner: String
  ) {
    onCreateParty(filter: $filter, owner: $owner) {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty(
    $filter: ModelSubscriptionPartyFilterInput
    $owner: String
  ) {
    onUpdateParty(filter: $filter, owner: $owner) {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty(
    $filter: ModelSubscriptionPartyFilterInput
    $owner: String
  ) {
    onDeleteParty(filter: $filter, owner: $owner) {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onCreateCharacter(filter: $filter, owner: $owner) {
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onUpdateCharacter(filter: $filter, owner: $owner) {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onDeleteCharacter(filter: $filter, owner: $owner) {
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
