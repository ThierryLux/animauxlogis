import styles from "./Slogan.module.css"

export function SloganTop() {
  return (
    <div className={styles.sloganTop}>
      Avec{" "}
      <span style={{ color: "#f48142" }}>Anim&apos;aux</span>{" "}
      <span style={{ color: "#5db0b8" }}>Logis</span>, tranquillité d&apos;esprit
      garantie
    </div>
  );
}

export function SloganBottom() {
  return (
    <div>
      Avec « ANIM&apos;AUX LOGIS », TRANQUILITÉ D&apos;ESPRIT GARANTIE !
    </div>
  );
}
