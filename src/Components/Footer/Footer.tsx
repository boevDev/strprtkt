import { FC } from 'react';
import s from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.box1}>
          <div className={s.adress}>
            г. Екатеринбург, ул. Чкалова, д. 252, офис 100
          </div>
          <div className={s.mail}>
            <a href='mailto:stroyprotekt@mail.ru'>stroyprotekt@mail.ru</a>
          </div>
          <div className={s.company}>© 2013-2023</div>
        </div>
        <div className={s.box2}>
          <div className={s.counter}>
            <img
              src='https://stroyprotekt-ekb.ru/templates/101-1/images/pic14.png'
              alt='Не удалось загрузить изображение'
            />
          </div>
          <div className={s.developer}>
            Разработка сайт: Боев Артём Александрович
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
