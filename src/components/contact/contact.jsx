import { Section } from "../section/section";
import styles from "./contact.module.scss"

export const Contact = () => {
  return (
    <Section className={styles.container}>
      <p className={styles.address}> Москва, Мясницкая 13 стр. 4</p>
      <p> E-mail: ueconomics.lab@gmail.com</p>
    </Section>
  );
};
