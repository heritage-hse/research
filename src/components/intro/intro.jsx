import Accordion from "react-bootstrap/Accordion";
import { Section } from "../section/section";
import styles from "./intro.module.scss";

export const Intro = () => {
  return (
    <Section>
      <div className={styles.about}>
        <div className={styles.description}>
          <span className={styles.sign}>ОКН в городской среде</span>
          <p>
            Исследование проводится в рамках стратегического проекта НИУ ВШЭ{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://stratpro.hse.ru/evidence-based-urbanism/"
            >
              «Доказательная урбанистика»
            </a>
          </p>
        </div>
        <Accordion className={styles.intro}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Актуальность</Accordion.Header>
            <Accordion.Body>
              Несмотря на высокую общественную значимость сохранения и
              популяризации объектов культурного наследия, в России данный
              вопрос стоит достаточно остро. Только в Москве с 1992 было
              утрачено более 700 исторических зданий. С 2012 года органы
              государственной власти разрабатывают различные программы, меры
              поддержки и иные механизмы повышения инвестиционной
              привлекательности данных объектов. Однако, эффективность
              проводимой политики стоит под большим вопросов. Процесс утраты
              объектов культурного наследия не только не прекратился, но и
              увеличил свои объемы. Так за последующие 5 лет было утрачено более
              100 объектов, имеющих высокое историческое и культурное значение.
              С 2015 года город теряет около 20 ценных зданий в год и это только
              объекты, обладающие официальным государственным статусом.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Проблематизация</Accordion.Header>
            <Accordion.Body>
              С чем же связана такая пугающая статистика? Согласно
              предварительным данным, полученным в ходе исследования, основная
              проблема связана с нерентабельность проектов реставрации и
              приспособления объектов культурного наследия. Предварительные
              результаты исследования показали, что в России реставрация /
              реконструкция объектов культурного наследия значительно дороже чем
              в Европе и Америке (около 140 тыс. / кв.м). Помимо этого, было
              выявлено еще ряд факторов, негативно влияющих на собственников и
              потенциальных инвесторов.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Гипотеза</Accordion.Header>
            <Accordion.Body>
              Для стимулирования собственников, владеющих объектами культурного
              наследия и инвесторов, которые хотят капитализировать данные
              объекты, необходимо уйти от принятой в России модели «максимально
              все запретить и ограничить использование» и создать комплекс мер
              государственной поддержки, которые бы учитывали различные
              бизнес-модели и стратегии капитализации данных объектов.
              Соответственно цель исследования - разработка эффективных мер
              государственной поддержки, способствующих сохранению и повышению
              инвестиционной привлекательности исторической среды и включению в
              экономический оборот объектов культурного наследия.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Section>
  );
};
