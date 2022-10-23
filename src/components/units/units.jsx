import { Section } from "../section/section";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import styles from "./units.module.scss";
import Carousel from "react-bootstrap/Carousel";

export const Units = () => {
  return (
    <Section title="Ключевые разделы">
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-dark-pastel-blue-solid-color-background.jpg"
            alt="Архангельск"
          />
          <Carousel.Caption>
            <h3>Пространство</h3>
            <p className={styles.description}>
              Предложение типологии как инструмента обоснования дифференциации
              управленческих решений в зависимости как от характеристик самого
              объекта, так и городской среды вокруг
            </p>
            <Button variant="light">Подробнее</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-dark-pastel-blue-solid-color-background.jpg"
            alt="Екатеринбург"
          />
          <Carousel.Caption>
            <h3>Экономика</h3>
            <p className={styles.description}>
              Изучение стимулов для вовлечения ОКН в экономику города и
              механизмов формирование стоимости ремонтно-реставрационных работ.
            </p>
            <Button variant="light">Подробнее</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-dark-pastel-blue-solid-color-background.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Система документов</h3>
            <p className={styles.description}>
              Изучение механизмов градостроительного регулирования, влияющих на
              модели работы с объектами культурного наследия
            </p>
            <Button variant="light">Подробнее</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={styles.image}
            src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-dark-pastel-blue-solid-color-background.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Социология</h3>
            <p className={styles.description}>Описание дополняется...</p>
            <Button variant="light">Подробнее</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div className={styles.units}>
        <Card style={{flexBasis: '45%' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Типология</Card.Title>
            <Card.Text>Описание дополняется ...</Card.Text>
            <Button variant="light">Подробнее</Button>
          </Card.Body>
        </Card>
        <Card style={{flexBasis: '45%' }}>
          <Card.Img style={{width: '100%', height: '150px', objectFit: 'cover' }}  src="https://images.unsplash.com/photo-1585474731927-1540a1c9a12c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <Card.Body>
            <Card.Title>Экономика</Card.Title>
            <Card.Text>
              В этой части исследования мы изучаем, как формируется стоимость
              ремонтно-реставрационных работ для недвижимых объектов культурного
              наследия. Отдельно рассматривается роль государственной поддержки
              в вопросах сохранения недвижимых объектов культурного наследия и
              создания стимулов для вовлечения этих объектов в экономику города.
            </Card.Text>
            <Button variant="light">Подробнее</Button>
          </Card.Body>
        </Card>
        <Card style={{flexBasis: '45%' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Система документов</Card.Title>
            <Card.Text>
              Изучение механизмов градостроительного регулирования, влияющих на
              модели работы с объектами культурного наследия. В первую очередь
              мы рассматриваем культурное наследие в составе градостроительных
              документов. Каким образом сохранение и развитие наследия
              регулируется в утверждаемых на исторические территории и объекты
              культурного наследия градостроительных документах?
            </Card.Text>
            <Button variant="light">Подробнее</Button>
          </Card.Body>
        </Card>
        <Card style={{flexBasis: '45%' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Социология</Card.Title>
            <Card.Text>Описание дополняется ...</Card.Text>
            <Button variant="light">Подробнее</Button>
          </Card.Body>
        </Card>
      </div> */}
    </Section>
  );
};
