import { FC } from 'react';
import s from './AboutPage.module.scss';

const AboutPage: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>1</div>
      <div className={s.item}>2</div>
      <div className={s.item}>3</div>
      <div className={s.item}>4</div>
    </div>
  );
};

export default AboutPage;
