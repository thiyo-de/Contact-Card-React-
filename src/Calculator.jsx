import React, { useRef, useState } from "react";
import "./calculator.css";

const App = () => {
  const [Ans, setAns] = useState("");
  const inputOne = useRef(null);
  const inputTwo = useRef(null);

  const add = () => {
    setAns(Number(inputOne.current.value) + Number(inputTwo.current.value));
    inputOne.current.value = ""
    inputTwo.current.value = ""
  };

   const Minus = () => {
    setAns(Number(inputOne.current.value) - Number(inputTwo.current.value));
    inputOne.current.value = ""
    inputTwo.current.value = ""
  };

   const Multiplecation = () => {
    setAns(Number(inputOne.current.value) * Number(inputTwo.current.value));
    inputOne.current.value = ""
    inputTwo.current.value = ""
  };

   const Division = () => {
    setAns(Number(inputOne.current.value) / Number(inputTwo.current.value));
    inputOne.current.value = ""
    inputTwo.current.value = ""
  };

  return (
    <>
      <div className="calculator">
        <div className="inputfield">
          <input
            ref={inputOne}
            type="number"
            name=""
            placeholder="Enter Value 1"
            id=""
          />
          <input
            ref={inputTwo}
            type="number"
            name=""
            placeholder="Enter Value 2"
            id=""
          />
          <br />
        </div>
        <div className="operators">
          <button onClick={add}>+</button>
          <button onClick={Minus}>-</button>
          <button onClick={Multiplecation}>x</button>
          <button onClick={Division}>/</button>
        </div>
        <p>Your Output :</p>
        <h1>{Ans}</h1>
      </div>
    </>
  );
};

export default App;
