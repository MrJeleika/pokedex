import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
//Components
import { MainCard } from './MainCard/MainCard';

export const Main = (props) => {
  const { setPokemonListThunk, state } = props;
  useEffect(() => {
    setPokemonListThunk();
  }, []);
  return (
    <SimpleGrid pt="100px" spacing="25px" columns={[2, 3, 4]}>
      {state.pokemonList
        // Sort pokemons by number
        .sort((a, b) => a.id - b.id)
        .map((e, i) => {
          return <MainCard pokemon={e} key={i} />;
        })}
    </SimpleGrid>
  );
};
