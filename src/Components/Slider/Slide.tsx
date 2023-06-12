import { FC } from 'react';
import s from './Slide.module.scss';
import { Link } from 'react-router-dom';

type AppProps = {
  srcImg: string;
  title: string;
  text: string;
};

const Slide: FC<AppProps> = (AppProps) => (
  <div className={s.slide}>
    <img src={AppProps.srcImg} alt='Не удалось загрузить изображение' />
    <div className={s.text}>
      <div className={s.item1}>
        <h1>{AppProps.title}</h1>
      </div>
      <div className={s.item2}>{AppProps.text}</div>
      <Link to='/services'>
        <button>Подробнее</button>
      </Link>
    </div>
  </div>
);

export default Slide;
