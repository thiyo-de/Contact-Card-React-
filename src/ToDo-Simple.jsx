import React, { useRef, useState } from "react";

const App = () => {
  const [SaveTask, setSaveTask] = useState([]);
  const InputValue = useRef(null);

  const Submit = () => {
    if (InputValue.current.value.trim() === "") return; // avoid empty
    setSaveTask([...SaveTask, InputValue.current.value]);
    InputValue.current.value = "";
  };

  return (
    <>
      <input ref={InputValue} type="text" placeholder="Enter Your Task" />
      <br />
      <button onClick={Submit}>Add Task</button>

      <ul>
        {SaveTask.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
