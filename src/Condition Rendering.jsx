import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [Message, setMessage] = useState("");

  const UserName = "Thiyo";
  const Password = "Thifran123**%%";

  const InputUser = useRef(null);
  const InputPassword = useRef(null);

  const Verify = () => {
    const CorrectName = InputUser.current.value;
    const CorrectPassword = InputPassword.current.value;

    if (CorrectName === UserName && CorrectPassword === Password) {
      alert("Permission Granted");
      setMessage("Permission Granted");
      window.open("https://google.com", "_blank");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else {
      alert("Enter Correct Username & Password");
      setMessage("Permission Not Granted");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }

    InputUser.current.value = "";
    InputPassword.current.value = "";
  };

  return (
    <>
      <input ref={InputUser} type="text" placeholder="Enter User Name" />
      <br />
      <input
        ref={InputPassword}
        type="text"
        placeholder="Enter Your Password"
      />
      <br />
      <button onClick={Verify}>Verify</button>
      <h1>{Message}</h1>
    </>
  );
};

export default App;
