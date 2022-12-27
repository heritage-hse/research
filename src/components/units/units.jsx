import { Section } from "../section/section";
import { Link } from "react-router-dom";
import cn from "classnames";
import documents from "../../asserts/images/icons/documents.svg";
import economics from "../../asserts/images/icons/economics.svg";
import location from "../../asserts/images/icons/location.svg";
import sociology from "../../asserts/images/icons/sociology.svg";
import styles from "./units.module.scss";

export const Units = () => {
  return (
    <Section title="Ключевые разделы" className={styles.units}>
      <div className={styles.block}>
        <div className={styles.card}>
          <div className={cn(styles.card, "box-part text-center")}>
            <img src={documents} alt="HSE" style={{ width: "50px" }} />

            <h4>Градостроительное регулирование</h4>

            <div>
              <span>
                Изучение механизмов градостроительного регулирования, влияющих
                на модели работы с объектами культурного наследия
              </span>
            </div>
            <Link to="/documents">Подробнее</Link>
          </div>
        </div>

        <div className={styles.card}>
          <div className={cn(styles.card, "box-part text-center")}>
            <img src={economics} alt="HSE" style={{ width: "50px" }} />

            <h4>Экономика и финансы</h4>

            <div>
              <span>
                Изучение стимулов для вовлечения ОКН в экономику города и
                механизмов формирование стоимости ремонтно-реставрационных
                работ.
              </span>
            </div>

            <Link to="/economics">Подробнее</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={cn(styles.card, "box-part text-center")}>
            <img src={sociology} alt="HSE" style={{ width: "50px" }} />

            <h4>Социальные аспекты</h4>

            <div>
              <span>Описание дополняется</span>
            </div>

            <Link to="/sociology">Подробнее</Link>
          </div>
        </div>

        <div className={styles.card}>
          <div className={cn(styles.card, "box-part text-center")}>
            <img src={location} alt="HSE" style={{ width: "50px" }} />

            <h4>Пространственное развитие</h4>

            <div>
              <span>
                Предложение типологии как инструмента обоснования дифференциации
                управленческих решений в зависимости как от характеристик самого
                объекта, так и городской среды вокруг
              </span>
            </div>

            <Link to="/typology">Подробнее</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
