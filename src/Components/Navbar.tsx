import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <li className={`${s.item} ${s.icon}`}>
          <NavLink to='/'>
            <img
              src='https://i.postimg.cc/8Pby0DkF/main-page-ico.png'
              alt='Loading...'
            />
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/about'>О компании</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/services'>Услуги</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/partners'>Партнеры</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/clients'>Заказчики</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/objects'>Объекты</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/reviews'>Разрешительная документация и отзывы</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/contacts'>Контакты</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
