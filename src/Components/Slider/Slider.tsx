import { FC } from 'react';
import './Slider.scss';
import Slide from './Slide/Slide';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

const Slider: FC = () => {
  return (
    <div className='sliderWrapper'>
      <div className='slider'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={100}
          speed={400}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          grabCursor={true}
          pagination={{ type: 'progressbar' }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-2.jpg'
              title='Гидроизоляция'
              text='Качество &mdash; неизменно высокое!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-1.jpg'
              title='Теплозащита'
              text='Быстро и безопасно!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              srcImg='https://stroyprotekt-ekb.ru/templates/stroyprotekt-ekb/images/1-3.jpg'
              title='Торкетирование'
              text='Усиление и восстановление!'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
