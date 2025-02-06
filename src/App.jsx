import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

  let [calculatedValue,setCalculatedVaule]=useState("");
  const onBuyHandle=(inputted)=>{
    if(inputted==="c"){
      setCalculatedVaule(" ");
    }else if(inputted==="="){
      let result=eval(calculatedValue);
      setCalculatedVaule(result);
    }
    else{
      let newvalue=calculatedValue+inputted;
      setCalculatedVaule(newvalue);
    }
  }

  return (
    <>
      <div class={styles.calculator}>
        <Display value={calculatedValue}/>
        <ButtonsContainer onclickHandle={onBuyHandle}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
