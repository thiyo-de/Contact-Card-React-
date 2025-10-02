import React, { useState } from "react";

const App = () => {
  const [ToDo, setToDo] = useState("");

  const ClearInput = () => {
    setToDo("");
  };

  const Enter = (e) => {
    if (e.key === "Enter") {
      ClearInput();
    }
  };

  return (
    <>
      <input
        value={ToDo}
        onChange={(e) => setToDo(e.target.value)}
        onKeyDown={Enter}   // <-- keydown should be on input
        placeholder="Enter Value"
        type="text"
      />
      <br />
      <p>{ToDo}</p>
      <button onClick={ClearInput}>Clear Input Field</button>
    </>
  );
};

export default App;
