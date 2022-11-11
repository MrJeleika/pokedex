import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { Preloader } from 'common/Preloader';
//Components
import { MainCard } from './MainCard/MainCard';

export const Main = (props) => {
  const { state, setPokemonSpeciesThunk } = props;

  return (
    <div className="container">
      {state.isFetching ? <Preloader /> : null}
      <SimpleGrid spacing="25px" columns={[2, 3, 4]}>
        {state.isFetching
          ? null
          : state.pokemonList
              // Sort by weight
              .filter((e) =>
                e.weight / 10 >= state.minWeightFilter &&
                e.weight / 10 < state.maxWeightFilter
                  ? e
                  : null,
              )
              // Sort by height
              .filter((e) =>
                e.height >= state.minHeightFilter &&
                e.height < state.maxHeightFilter
                  ? e
                  : null,
              )
              // Sort by 1 type
              .filter((e) => {
                // if filter
                if (state.typeFilter1 === 'all') {
                  return e;
                }
                // if pokemon has 1 or 2 types
                if (e.types[1]) {
                  if (
                    e.types[0].type.name === state.typeFilter1 ||
                    e.types[1].type.name === state.typeFilter1
                  ) {
                    return e;
                  }
                } else if (e.types[0].type.name === state.typeFilter1) {
                  return e;
                }
                // default
                return null;
              })
              // Sort by 2 type
              .filter((e) => {
                // if filter
                if (state.typeFilter2 === 'all') {
                  return e;
                }
                // if 1 filter == all
                if (state.typeFilter1 === 'all') {
                  if (e.types[1]) {
                    if (
                      e.types[0].type.name === state.typeFilter2 ||
                      e.types[1].type.name === state.typeFilter2
                    ) {
                      return e;
                    }
                  } else if (e.types[0].type.name === state.typeFilter2) {
                    return e;
                  }
                }
                // if pokemon has 1 or 2 types
                if (e.types[1]) {
                  if (
                    e.types[0].type.name === state.typeFilter2 ||
                    e.types[1].type.name === state.typeFilter2
                  ) {
                    return e;
                  }
                }
                // default
                return null;
              })
              // Sort by number
              .sort((a, b) => a.id - b.id)
              .map((e, i) => {
                return (
                  <MainCard
                    pokemon={e}
                    key={i}
                    setPokemonSpecies={setPokemonSpeciesThunk}
                    {...props}
                  />
                );
              })}
      </SimpleGrid>
    </div>
  );
};
