import { FC } from 'react';
import s from './Slider.module.scss';

const Slider: FC = () => {
  return (
    <div className={s.slider}>
      <img
        src='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-2.jpg'
        alt='Не удалось загрузить изображение'
      />
      <div className={s.text}>
        <div className={s.item1}>
          <h1>Гидроизоляция</h1>
        </div>
        <div className={s.item2}>Качество &mdash; неизменно высокое!</div>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default Slider;
