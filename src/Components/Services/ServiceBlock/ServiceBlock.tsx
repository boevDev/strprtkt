import { FC, useState } from 'react';
import s from './ServiceBlock.module.scss';
import { Link } from 'react-router-dom';

type ServiceProps = {
  srcImg: string;
  title: string;
};

const ServiceBlock: FC<ServiceProps> = (ServiceProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Link
        to={'/services'}
        style={{ opacity: isHovering ? '80%' : '100%' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={s.ServiceBlock}>
          <img
            src={ServiceProps.srcImg}
            alt='Не удалось загрузить изображение'
          />
          <h3>{ServiceProps.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default ServiceBlock;
