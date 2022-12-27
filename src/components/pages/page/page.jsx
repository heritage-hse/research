import { Section } from "../../section/section";

import styles from "./page.module.scss";
import { NavbarComponent } from "../../navbar/navbar";

export const Page = (props) => {
  return (
    <div className={styles.page}>
      <NavbarComponent />
      <Section title={props.title} className={styles.section}>
        {props.children ? (
          props.children
        ) : (
          <div className={styles.content}>
            <h6>
              Скоро тут появятся результаты нашей работы. Обязательно
              возвращайтесь :)
            </h6>
          </div>
        )}
      </Section>
    </div>
  );
};
