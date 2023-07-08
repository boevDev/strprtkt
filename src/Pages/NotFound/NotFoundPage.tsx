import { FC } from 'react';
import s from './NotFoundPage.module.scss';

const NotfoundPage: FC = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'red', fontSize: '100px' }}>
        Страница не найдена
      </h1>
    </>
  );
};

export default NotfoundPage;
