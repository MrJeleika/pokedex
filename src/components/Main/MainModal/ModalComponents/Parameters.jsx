import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
// Styles
import s from '../MainModal.module.scss';

export const Parameters = ({ pokemon }) => {
  return (
    <Flex className={s.parameters}>
      <Box className={s.parameter}>
        <Text className={`${s.parameterTitle} ${s.title}`}> Height</Text>
        <Text className={s.parameterValue}> {pokemon.height / 10}m</Text>
      </Box>
      <Box className={s.parameter}>
        <Text className={`${s.parameterTitle} ${s.title}`}> Weight</Text>
        <Text className={s.parameterValue}>{pokemon.weight / 10}kg</Text>
      </Box>
      <Box className={s.parameter}>
        <Text className={`${s.parameterTitle} ${s.title}`}>CAPTURE RATE</Text>
        <Text className={s.parameterValue}> {pokemon.capture_rate}</Text>
      </Box>
      <Box className={s.parameter}>
        <Text className={`${s.parameterTitle} ${s.title}`}>BASE EXP</Text>
        <Text className={s.parameterValue}>{pokemon.base_experience}</Text>
      </Box>
    </Flex>
  );
};
