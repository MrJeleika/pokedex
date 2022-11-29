import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
//Styles
import s from './MainModal.module.scss';
//Components
import { Stats } from './ModalComponents/Stats';
//Misc
import Modal from 'react-bootstrap/Modal';
import { APIgetEvolutionChain, APIgetPokemonByName } from 'api/api';
import { Parameters } from './ModalComponents/Parameters';
import { EvoChain } from './ModalComponents/EvoChain';

export const MainModal = (props) => {
  const { show, setShow } = props;
  const [pokemon, setPokemon] = useState(props.pokemon);
  const [evochain, setEvochain] = useState({});
  console.log(pokemon);
  useEffect(() => {
    const getEvoChain = async () => {
      let a = await APIgetEvolutionChain(
        pokemon.evolution_chain.url.split('/')[6],
      );
      // Get img for evo chain
      let evo1, evo2, evo3;
      evo2 = [];
      evo3 = [];
      try {
        evo1 = await APIgetPokemonByName(a.chain.species.name);
      } catch (e) {
        evo1 = pokemon;
      }
      for (let i = 0; i < a.chain.evolves_to.length; i++) {
        // looking for all evos and set it to evo2
        evo2[i] = await APIgetPokemonByName(a.chain.evolves_to[i].species.name);
        for (let k = 0; k < a.chain.evolves_to[i].evolves_to.length; k++) {
          // looking for all evos and set it to evo3
          evo3.push(
            await APIgetPokemonByName(
              a.chain.evolves_to[i].evolves_to[k].species.name,
            ),
          );
        }
      }

      setEvochain({ ...a, evo1, evo2, evo3 });
    };
    getEvoChain();
  }, []);
  // set default pokemon on modal close
  useEffect(() => {
    setTimeout(() => {
      setPokemon(props.pokemon);
    }, 100);
  }, [show]);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        size="md"
        className={s.modal}
        dialogClassName={s.modal2}
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header className={s.header} closeButton></Modal.Header>
        <Modal.Body className={s.body}>
          <img
            className={s.img}
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt=""
          />
          <Text className={s.number}>#{pokemon.id}</Text>
          <Text className={s.name}>
            {/* Uppercase first letter */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
          {/* Types */}
          <Box className={s.types}>
            {pokemon.types.map((type, i) => {
              return (
                <Box
                  margin="0 5px"
                  w="80px"
                  // chakra styles
                  background={`${type.type.name}`}
                  key={i}
                  display="flex"
                  justifyContent="center"
                  borderRadius="7px"
                >
                  <Text
                    h="30px"
                    alignItems="center"
                    textTransform="uppercase"
                    display="flex"
                    fontFamily="exo"
                    fontSize="16px"
                    opacity="0.6"
                    fontWeight="700"
                  >
                    {type.type.name}
                  </Text>
                </Box>
              );
            })}
          </Box>

          <Text className={`${s.pokedexTitle} ${s.title}`}>Pokédex entry</Text>
          <Text className={s.pokedexText}>
            {pokemon.flavor_text_entries[1].flavor_text.replace('\f', ' ')}
          </Text>

          <Parameters pokemon={pokemon} />

          <Text className={`${s.statsTitle} ${s.title}`}>Stats</Text>
          <Stats pokemon={pokemon} />

          <Text className={`${s.evolutionTitle} ${s.title}`}>Evolution</Text>

          <EvoChain evochain={evochain} setPokemon={setPokemon} />
        </Modal.Body>
      </Modal>
    </>
  );
};
