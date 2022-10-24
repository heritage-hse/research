import { Section } from "../../section/section";
import { Magic } from "react-bootstrap-icons";

// import { Link } from "react-router-dom";
// import { ArrowLeft } from "react-bootstrap-icons";
import styles from "./page.module.scss";
import { NavbarComponent } from "../../header/navbar/navbar";

export const Page = (props) => {
  return (
    <div className={styles.page}>
      {/* <div className={styles.header}>
        <Link to="/"><ArrowLeft color="royalblue" size={96} /></Link>
      </div> */}
      <NavbarComponent />
      <Section title={props.title} className={styles.section}>
        {props.children ? (
          props.children
        ) : (
          <div className={styles.content}>
            <Magic />
            <h6 >
              Скоро тут появятся результаты нашей работы. Обязательно
              возвращайтесь :)
            </h6>
          </div>
        )}
      </Section>
    </div>
  );
};
