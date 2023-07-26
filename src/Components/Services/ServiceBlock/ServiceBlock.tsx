import { FC } from 'react';
import s from './ServiceBlock.module.scss';
import { Link } from 'react-router-dom';

type ServiceProps = {
  srcImg: string;
  title: string;
  titleBold: string;
  srcSrvc: string;
};

const ServiceBlock: FC<ServiceProps> = (ServiceProps) => {
  return (
    <div className={s.serviceBlock}>
      <Link to={ServiceProps.srcSrvc}>
        <div className={s.container}>
          <img
            src={ServiceProps.srcImg}
            alt='Не удалось загрузить изображение'
          />
          <h3>
            <b>{ServiceProps.titleBold}</b>
            <br />
            {ServiceProps.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ServiceBlock;
