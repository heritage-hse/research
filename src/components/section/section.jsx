import styles from "./section.module.scss";
import classnames from "classnames";

export const Section = (props) => {
  return (
    <section
      id={props.id}
      className={classnames(styles.section, props.className)}
    >
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
      {props.children}
    </section>
  );
};
