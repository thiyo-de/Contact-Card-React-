import React, { useEffect, useState } from "react";

const App = () => {
  const [Timer, setTimer] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(count);
    };
  }, []);

  return (
    <>
      <h1>{Timer}</h1>
      <button onClick={()=>setTimer(0)}>Clear</button>
    </>
  );
};

export default App;
