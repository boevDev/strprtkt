import { FC } from 'react';
import s from './Advantages.module.scss';
import { Link } from 'react-router-dom';

const Advantages: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1>Преимущества</h1>
        <ul className={s.text}>
          <li>Наши услуги - всегда высокого качества!</li>
          <li>
            Все работы выполняются опытными, высококвалифицированными
            сотрудниками и строителями в строгом соответствии с нормами СНиПов и
            ГОСТов.
          </li>
          <li>Гарантия на выполненные работы</li>
          <li>Невысокая стоимость услуг</li>
        </ul>
        <Link to={'/reviews'}>Подробнее</Link>
      </div>
    </div>
  );
};

export default Advantages;
