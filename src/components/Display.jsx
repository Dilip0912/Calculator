import styles from "./Display.module.css";

const Display = ({value}) => {
  return <input className={styles.display} value={value} type="text"readOnly/>;
};

export default Display;
