import { FC } from 'react';
import s from './Slide.module.scss';
import { Link } from 'react-router-dom';

type AppProps = {
  srcImg: string;
  title: string;
  text: string;
};

const Slide: FC<AppProps> = (AppProps) => (
  <>
    <div className={s.slide}>
      <div className={s.div1}>
        <img src={AppProps.srcImg} alt='Не удалось загрузить изображение' />
      </div>
      <div className={s.div2}>
        <h1>{AppProps.title}</h1>
        <div className={s.text}>{AppProps.text}</div>
        <div className={s.button}>
          <Link className={s.button} to='/services'>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Slide;
