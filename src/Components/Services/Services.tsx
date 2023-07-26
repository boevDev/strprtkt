import { FC } from 'react';
import ServiceBlock from './ServiceBlock/ServiceBlock';
import s from './Services.module.scss';

const Services: FC = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898220_1_mini1.jpg'
              titleBold='Гидроизоляция'
              title='бетонных конструкций'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898237_1_mini1.jpg'
              titleBold='Инъецирование'
              title='заоблицовочных полостей металлических конструкций'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898256_1_mini1.jpg'
              titleBold='Антикоррозийнная защита'
              title='стальных и бетонных конструкций'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898266_1_mini1.jpg'
              titleBold='Огнезащита'
              title='строительных конструкций'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898278_1_mini1.jpg'
              titleBold='Теплозащита'
              title='конструкций и сооружений'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898289_1_mini1.jpg'
              titleBold='Усиление'
              title='железобетонных конструкций'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1528898302_1_mini1.jpg'
              titleBold='Ремонт и защита'
              title='бетонных конструкций методом торкретирования'
            />
          </div>
          <div className={s.child}>
            <ServiceBlock
              srcSrvc='/services'
              srcImg='https://stroyprotekt-ekb.ru/files/project_5508/service_rubricator/1529654799_1_mini1.jpg'
              titleBold='Мультибрендовая'
              title='поставка строительных материалов'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
