// Misc
import { PreloaderSVG } from 'components/svgs/preloaderSVG';
// Styles
import s from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <PreloaderSVG />
    </div>
  );
};
