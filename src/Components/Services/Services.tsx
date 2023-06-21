import { FC } from 'react';
import ServiceBlock from './ServiceBlock/ServiceBlock';
import s from './Services.module.scss';

const Services: FC = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.container}>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898220_1_mini1.jpg'
            title='Гидроизоляция бетонных конструкций'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898237_1_mini1.jpg'
            title='Инъецирование заоблицовочных полостей металлических конструкций'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898256_1_mini1.jpg'
            title='Антикоррозийнная защита стальных и бетонных конструкций'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898266_1_mini1.jpg'
            title='Огнезащита строительных конструкций'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898278_1_mini1.jpg'
            title='Теплозащита конструкций и сооружений'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898289_1_mini1.jpg'
            title='Усиление железобетонных конструкций'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898302_1_mini1.jpg'
            title='Ремонт и защита бетонных конструкций методом торкретирования'
          />
        </div>
        <div className={s.child}>
          <ServiceBlock
            srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1529654799_1_mini1.jpg'
            title='Мультибрендовая поставка строительных материалов'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
