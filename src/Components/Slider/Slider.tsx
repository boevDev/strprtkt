import { FC } from 'react';
import './Slider.scss';
import Slide from './Slide';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const Slider: FC = () => {
  return (
    <div className='slider'>
      <div className='swiper swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-2.jpg'
              title='Гидроизоляция'
              text='Качество &mdash; неизменно высокое!'
            />
          </div>
          <div className='swiper-slide'>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-1.jpg'
              title='Теплозащита'
              text='Быстро и безопасно!'
            />
          </div>
          <div className='swiper-slide'>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-3.jpg'
              title='Торкетирование'
              text='Усиление и восстановление!'
            />
          </div>
        </div>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    </div>
  );
};

export default Slider;
