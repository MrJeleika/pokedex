import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MainModal } from '../MainModal/MainModal';
// Styles
import s from './MainCard.module.scss';

export const MainCard = (props) => {
  const { pokemon } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={s.toggleModal}
        onClick={() => {
          setShow(true);
        }}
      >
        <div className={s.card}>
          <img className={s.img} src={pokemon.sprites.front_default} alt="" />
          <div className={s.number}>№{pokemon.id}</div>
          <div className={s.name}>
            {/* Uppercase first letter */}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>

          <div className={s.types}>
            {pokemon.types.map((type, i) => {
              return (
                <Box
                  margin="0 5px"
                  w="70px"
                  // chakra styles
                  background={`${type.type.name}`}
                  key={i}
                  display="flex"
                  justifyContent="center"
                  borderRadius="7px"
                >
                  <Text
                    h="25px"
                    alignItems="center"
                    textTransform="uppercase"
                    display="flex"
                    fontFamily="exo"
                    fontSize="14px"
                    opacity="0.6"
                    fontWeight="700"
                  >
                    {type.type.name}
                  </Text>
                </Box>
              );
            })}
          </div>
        </div>
      </div>
      {show ? (
        <MainModal
          key={'1'}
          {...props}
          show={show}
          pokemon={pokemon}
          setShow={setShow}
        />
      ) : null}
    </>
  );
};
