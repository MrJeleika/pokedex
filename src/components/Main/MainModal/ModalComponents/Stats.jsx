import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
// Styles
import s from '../MainModal.module.scss';

export const Stats = ({ pokemon }) => {
  return (
    <Flex className={s.stats}>
      <Flex className={s.stat}>
        <Box className={s.statShape} background="fighting">
          HP
        </Box>
        <Text className={s.statText}>{pokemon.stats[0].base_stat}</Text>
      </Flex>
      <Flex className={s.stat}>
        <Box background="fire" className={s.statShape}>
          ATK
        </Box>
        <Text className={s.statText}>{pokemon.stats[1].base_stat}</Text>
      </Flex>
      <Flex className={s.stat}>
        <Box background="electric" className={s.statShape}>
          DEF
        </Box>
        <Text className={s.statText}>{pokemon.stats[2].base_stat}</Text>
      </Flex>
      <Flex className={s.stat}>
        <Box className={s.statShape} background="ice">
          SPA
        </Box>
        <Text className={s.statText}>{pokemon.stats[3].base_stat}</Text>
      </Flex>
      <Flex className={s.stat}>
        <Box className={s.statShape} background="grass">
          SPO
        </Box>
        <Text className={s.statText}>{pokemon.stats[4].base_stat}</Text>
      </Flex>
      <Flex className={s.stat}>
        <Box className={s.statShape} background="fairy">
          SPD
        </Box>
        <Text className={s.statText}>{pokemon.stats[5].base_stat}</Text>
      </Flex>
      <Flex
        background="#67b4de80"
        borderRadius="20px"
        flexDirection="column"
        p="5px"
        transform="translate(0, -5px)"
      >
        <Box className={s.statShape} background="water">
          TOT
        </Box>
        <Text className={s.statText}>
          {pokemon.stats[0].base_stat +
            pokemon.stats[1].base_stat +
            pokemon.stats[2].base_stat +
            pokemon.stats[3].base_stat +
            pokemon.stats[4].base_stat +
            pokemon.stats[5].base_stat}
        </Text>
      </Flex>
    </Flex>
  );
};
