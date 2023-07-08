import { FC } from 'react';
import s from './MainPage.module.scss';
import Slider from '../../Components/Slider/Slider';
import Services from '../../Components/Services/Services';

const MainPage: FC = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.slider}>
          <Slider />
        </div>
        <div className={s.services}>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
