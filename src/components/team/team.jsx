import Figure from "react-bootstrap/Figure";
import { Section } from "../section/section";
import victoria from "../../asserts/images/team/Vika.jpeg";
import anna from "../../asserts/images/team/AnnaK.JPG";
import anna2 from "../../asserts/images/team/AnnaShCropped.png";
import maryam from "../../asserts/images/team/maraim.png";
import bella from "../../asserts/images/team/BellaCropped.jpg";
import larisa from "../../asserts/images/team/larisaCropped2.jpg";
import ivan from "../../asserts/images/team/IvanCropped.jpg";
import styles from "./team.module.scss";

export const Team = () => {
  return (
    <Section title="Команда проекта">
      <div className={styles.team} id='team'>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="Век"
            src={victoria}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Виктория Мальцева</strong>
            <p>руководитель проекта</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={larisa}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Лариса Баранова</strong>
            <p>экономист</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={maryam}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Марьям Бучулаева</strong>
            <p>городской планировщик</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={bella}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Белла Миронова</strong>
            <p>ГИС-аналитик</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={ivan}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Иван Напреенко</strong>
            <p>социолог</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={anna}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Анна Касьян</strong>
            <p>стажер</p>
          </Figure.Caption>
        </Figure>
        <Figure className={styles.member}>
          <Figure.Image
            className={styles.image}
            width={200}
            height={200}
            alt="171x180"
            src={anna2}
            roundedCircle
          />
          <Figure.Caption>
            <strong>Анна Шурупова</strong>
            <p>стажер</p>
          </Figure.Caption>
        </Figure>
      </div>
    </Section>
  );
};
