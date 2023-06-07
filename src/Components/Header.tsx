import React, { FC } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

//s = styles

const Header: FC = () => {
  return (
    <div className={s.parent}>
      <div className={s.container}>
        <div className={s.item}></div>
        <div className={`${s.logo} ${s.displayInline} ${s.item}`}>
          <Link to='/'>
            <img
              src='https://i.postimg.cc/Z5Jc834X/logo.png'
              alt='loading...'
            />
          </Link>
        </div>
        <div className={`${s.contact} ${s.displayInline} ${s.item}`}>
          <div className={`${s.phone} ${s.displayInline}`}>
            <span
              className={`${s.phoneNumber} ${s.displayInline}`}
              onClick={() => {
                navigator.clipboard.writeText('+73432863846').then(
                  () => {
                    window.alert('Номер телефона скопирован в буфер обмена!');
                    console.log('OK');
                    /* clipboard successfully set */
                  },
                  () => {
                    console.log('not OK');
                    /* clipboard write failed */
                  }
                );
              }}
            >
              +7 (343) 361-66-72
            </span>
            ,{' '}
            <span
              className={`${s.phoneNumber} ${s.displayInline}`}
              onClick={() => {
                navigator.clipboard.writeText('+73432863846').then(
                  () => {
                    window.alert('Номер телефона скопирован в буфер обмена!');
                    console.log('OK');

                    /* clipboard successfully set */
                  },
                  () => {
                    console.log('not OK');
                    /* clipboard write failed */
                  }
                );
              }}
            >
              +7 (343) 286-38-46
            </span>
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
        <div className={`${s.adress} ${s.displayInline} ${s.item}`}>
          г. Екатеринбург, ул. Чкалова, д. 252, офис 100
        </div>
        <div className={s.item}></div>
      </div>
    </div>
  );
};

export default Header;
