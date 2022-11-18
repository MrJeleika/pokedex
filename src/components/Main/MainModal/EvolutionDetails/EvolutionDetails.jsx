import { Text } from '@chakra-ui/react';
import React from 'react';

export const EvolutionDetails = ({ details }) => {
  console.log(details);
  return (
    <div>
      {details.gender ? (
        details.gender.male ? (
          <Text>Male</Text>
        ) : (
          <Text>Female</Text>
        )
      ) : null}
      {details.held_item ? <Text>{details.held_item.name}</Text> : null}
      {details.item ? (
        <Text textAlign="center">{details.item.name}</Text>
      ) : null}
    </div>
  );
};
