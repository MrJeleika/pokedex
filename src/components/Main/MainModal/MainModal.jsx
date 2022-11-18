import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { APIgetEvolutionChain, APIgetPokemonByName } from 'api/api';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EvolutionDetails } from './EvolutionDetails/EvolutionDetails';
//Styles
import s from './MainModal.module.scss';
export const MainModal = (props) => {
  const { show, setShow, pokemon } = props;
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
      evo1 = await APIgetPokemonByName(a.chain.species.name);
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
  console.log(evochain);
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
          <div className={s.number}>#{pokemon.id}</div>
          <div className={s.name}>
            {/* Uppercase first letter */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          {/* Types */}
          <div className={s.types}>
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
          </div>

          <Text className={`${s.pokedexTitle} ${s.title}`}>Pokédex entry</Text>
          <Text className={s.pokedexText}>
            {pokemon.flavor_text_entries[1].flavor_text.replace('\f', ' ')}
          </Text>

          <div className={s.parameters}>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> Height</div>
              <div className={s.parameterValue}> {pokemon.height / 10}m</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> Weight</div>
              <div className={s.parameterValue}>{pokemon.weight / 10}kg</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}>
                {' '}
                CAPTURE RATE
              </div>
              <div className={s.parameterValue}> {pokemon.capture_rate}</div>
            </div>
            <div className={s.parameter}>
              <div className={`${s.parameterTitle} ${s.title}`}> BASE EXP</div>
              <div className={s.parameterValue}>{pokemon.base_experience}</div>
            </div>
          </div>

          <div className={`${s.statsTitle} ${s.title}`}>Stats</div>
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

          <Text className={`${s.evolutionTitle} ${s.title}`}>Evolution</Text>

          {Object.keys(evochain).length !== 0 ? (
            <Flex justifyContent="space-evenly">
              <Flex w="25%" alignItems="center">
                <Image
                  src={
                    evochain.evo1.sprites.other['official-artwork']
                      .front_default
                  }
                />
              </Flex>
              {/* Check if 2nd evolution exist */}
              {evochain.evo2[0] ? (
                <>
                  <Box
                    w="12.5%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text className={s.evochainText}>
                      <Text className={s.evochainText}>{'>'}</Text>
                    </Text>
                  </Box>
                  <Flex
                    w="25%"
                    justifyContent="center"
                    flexDirection="column"
                    flexWrap="wrap"
                  >
                    {evochain.evo2.map((evo2Pokemon) => {
                      return (
                        <>
                          <Flex alignItems="center">
                            <Image
                              src={
                                evo2Pokemon.sprites.other['official-artwork']
                                  .front_default
                              }
                            />
                          </Flex>
                        </>
                      );
                    })}
                  </Flex>
                  {/* Check if 3rd evolution exist */}
                  {evochain.evo3.length > 0 ? (
                    <>
                      <Box
                        w="12.5%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text className={s.evochainText}>{'>'}</Text>
                      </Box>
                      <Flex
                        w="25%"
                        flexDirection="column"
                        justifyContent="center"
                        flexWrap="wrap"
                      >
                        {evochain.evo3.map((evo3Pokemon) => {
                          return (
                            <>
                              <Flex alignItems="center">
                                <Image
                                  src={
                                    evo3Pokemon.sprites.other[
                                      'official-artwork'
                                    ].front_default
                                  }
                                />
                              </Flex>
                            </>
                          );
                        })}
                      </Flex>
                    </>
                  ) : null}
                </>
              ) : null}
            </Flex>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
};
