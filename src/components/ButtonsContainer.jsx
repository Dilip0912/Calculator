import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({onclickHandle}) {
  let buttonName = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "c",
    "=",
    ".",
  ];

  return (
    <div className={styles[`buttons-container`]}>
      {buttonName.map(button=><button className={styles.button} onClick={()=>onclickHandle(button)}>{button}</button>)}
    </div>
  );
}

export default ButtonsContainer;
