import { FC } from 'react';
import s from './Info.module.scss';
import Advantages from './Advantages/Advantages';
import AboutUs from './AboutUs/AboutUs';

const Info: FC = () => {
  return (
    <div className={s.info}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div id={s.aboutUs} className={s.item}>
            <AboutUs />
          </div>
          <div id={s.advantages} className={s.item}>
            <Advantages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
