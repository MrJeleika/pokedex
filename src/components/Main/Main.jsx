import { SimpleGrid } from '@chakra-ui/react';
import { Preloader } from 'common/Preloader';
//Components
import { MainCard } from './MainCard/MainCard';

export const Main = (props) => {
  const { state } = props;

  return (
    <div className="container">
      {state.isFetching ? <Preloader /> : null}
      <SimpleGrid spacing="25px" columns={[2, 3, 4]}>
        {state.isFetching
          ? null
          : state.pokemonList
              // Sort pokemons by number
              .sort((a, b) => a.id - b.id)
              .map((e, i) => {
                return <MainCard pokemon={e} key={i} />;
              })}
      </SimpleGrid>
    </div>
  );
};
