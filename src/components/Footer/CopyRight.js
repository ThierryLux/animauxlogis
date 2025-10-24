import styles from "./CopyRight.module.css";

export default function CopyRight() {
  return (
  <div className={styles.copy}>www.animauxlogis.fr &copy; 2023-{new Date().getFullYear()}</div>
  )
};

