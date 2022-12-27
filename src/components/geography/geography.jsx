import { Section } from "../section/section";
import styles from "./geography.module.scss";
import arkhangelsk from "../../asserts/images/cities/Arkhangelsk.jpg";
import ekat from "../../asserts/images/cities/Ekaterinburg.jpg";
import ivanovo from "../../asserts/images/cities/Ivanovo.jpg";
import kazan from "../../asserts/images/cities/Kazan.jpg";
import nizhny from "../../asserts/images/cities/Nizhny.jpg";
import Carousel from "react-bootstrap/Carousel";

export const Geography = () => {
  return (
    <Section title="География исследования">
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img className={styles.image} src={arkhangelsk} alt="Архангельск" />
          <Carousel.Caption className={styles.after}>
            <div className={styles.text}>
              <h2>Архангельск</h2>
              <p className={styles.description}>
                <strong>120</strong> ОКН из них <strong>99</strong> ОКС
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.image} src={ekat} alt="Екатеринбург" />
          <Carousel.Caption className={styles.after}>
            <div className={styles.text}>
              <h2>Екатеринбург</h2>
              <p className={styles.description}>
                <strong>799</strong> ОКН из них <strong>689</strong> ОКС
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.image} src={ivanovo} alt="Екатеринбург" />
          <Carousel.Caption className={styles.after}>
            <div className={styles.text}>
              <h2>Иваново</h2>
              <p className={styles.description}>
                <strong>125</strong> ОКН из них <strong>111</strong> ОКС
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.image} src={kazan} alt="Third slide" />

          <Carousel.Caption className={styles.after}>
            <div className={styles.text}>
              <h2>Казань</h2>
              <p className={styles.description}>
                <strong>562</strong> ОКН из них <strong>484</strong> ОКС
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.image} src={nizhny} alt="Third slide" />

          <Carousel.Caption className={styles.after}>
            <div className={styles.text}>
              <h2>Нижний Новгород</h2>
              <p className={styles.description}>
                <strong>789</strong> ОКН из них <strong>660</strong> ОКС
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Section>
  );
};
