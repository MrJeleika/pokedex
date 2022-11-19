// Misc
import { Box } from '@chakra-ui/react';
import { PreloaderSVG } from 'components/svgs/preloaderSVG';
// Styles
import s from './Preloader.module.scss';

export const Preloader = ({ type }) => {
  return (
    <>
      {type === 'evo' ? (
        <Box className={s.preloaderEvo}>
          <PreloaderSVG />
        </Box>
      ) : (
        <Box className={s.preloader}>
          <PreloaderSVG />
        </Box>
      )}
    </>
  );
};
