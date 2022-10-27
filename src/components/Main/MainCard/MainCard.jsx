import { Box, Text } from '@chakra-ui/react';
// Styles
import s from './MainCard.module.scss';

export const MainCard = (props) => {
  const { pokemon } = props;
  return (
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
  );
};
