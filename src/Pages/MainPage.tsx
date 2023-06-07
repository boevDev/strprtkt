import { FC } from 'react';
import s from './scss/MainPage.module.scss';
import Slider from '../Components/Slider';

const MainPage: FC = () => {
  return (
    <div className={s.main}>
      <div className={s.slider}>
        <Slider />
      </div>
    </div>
  );
};

export default MainPage;
