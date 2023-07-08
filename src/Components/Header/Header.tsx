import { FC } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Link to='/' className={`${s.item} ${s.logo}`}>
            {/* <img src='https://i.postimg.cc/Z5Jc834X/logo.png' alt='Не удалось загрузить изображение' /> */}
            <img
              src='https://i.postimg.cc/ZRhhBdFp/logo-strptkt.png'
              alt='Не удалось загрузить изображение'
            />
          </Link>

          <div className={`${s.item} ${s.contact}`}>
            <div>
              <a
                href='tel: +73433616672'
                className={s.phone}
                onClick={() => {
                  navigator.clipboard.writeText('+73433616672');
                }}
              >
                +7 (343) 361-66-72
              </a>
              <br />
              <a
                href='tel: +73432863846'
                className={s.phone}
                onClick={() => {
                  navigator.clipboard.writeText('+73432863846');
                }}
              >
                +7 (343) 286-38-46
              </a>
            </div>
            <div className={s.mail}>
              <a
                href='mailto:stroyprotekt@mail.ru'
                onClick={() =>
                  navigator.clipboard.writeText('stroyprotekt@mail.ru')
                }
              >
                stroyprotekt@mail.ru
              </a>
            </div>
          </div>

          <div className={`${s.adressContainer} ${s.item}`}>
            <div className={s.adress}>
              г. Екатеринбург, ул. Чкалова, <br /> д. 252, офис 100
            </div>
            <div className={s.button}>
              <a
                href='https://yandex.ru/maps/-/CDVEUub'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/7/72/Yandex_Maps_icon.svg'
                  alt='error'
                />
                Как добраться?
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
