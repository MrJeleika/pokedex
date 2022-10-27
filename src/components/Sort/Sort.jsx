import React, { useEffect } from 'react';
import { Search } from './Search/Search';

export const Sort = (props) => {
  const { setPokemonListThunk, searchPokemonByNameThunk } = props;
  useEffect(() => {
    setPokemonListThunk(0, 50);
  }, []);
  return (
    <div>
      <Search
        setPokemonList={setPokemonListThunk}
        searchPokemonByName={searchPokemonByNameThunk}
      />
    </div>
  );
};
