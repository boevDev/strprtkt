import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: FC = () => {
  return (
    <div className='navbar' id='navbar'>
      <div className='wrapper'>
        <nav className='container'>
          <NavLink to='/' className='item icon' id='icon'>
            <img
              src='https://i.postimg.cc/8Pby0DkF/main-page-ico.png'
              alt='Loading...'
            />
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to={'/'}
            className='item'
            id='home'
          >
            Главная
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/about'
            className='item'
          >
            О компании
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/services'
            className='item'
          >
            Услуги
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/partners'
            className='item'
          >
            Партнеры
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/clients'
            className='item'
          >
            Заказчики
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/objects'
            className='item'
          >
            Объекты
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/reviews'
            className='item'
          >
            Разрешительная документация и отзывы
          </NavLink>
          <NavLink
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            to='/contacts'
            className='item'
          >
            Контакты
          </NavLink>
          <a
            href='https://yandex.ru/maps/-/CDVEUub'
            target='_blank'
            rel='noopener noreferrer'
            className='adressNavbar'
          >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/7/72/Yandex_Maps_icon.svg'
              alt='error'
            />
            Как добраться?
          </a>
        </nav>
        <div className='btnContainer'>
          <Link to='/' className='logoNav'>
            <img
              src='https://i.postimg.cc/t4BvnZqF/logo-strptkt.png'
              alt='Не удалось загрузить изображение'
            ></img>
          </Link>
          <div className='phone'>
            <a
              href='tel: +73433616672'
              className='phoneNumber'
              onClick={() => {
                navigator.clipboard.writeText('+73433616672');
              }}
            >
              +7 (343) 361-66-72
            </a>
            <a
              href='tel: +73432863846'
              className='phoneNumber'
              onClick={() => {
                navigator.clipboard.writeText('+73432863846');
              }}
            >
              +7 (343) 286-38-46
            </a>
          </div>
          <button
            onClick={() => {
              document.getElementById('navbar')!.classList.toggle('open');
            }}
            className='burgerBtn'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
