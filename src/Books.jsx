import React from "react";

const Books = ({ Title, Author, Year }) => {
  return (
    <>
      <h1>{Title}</h1>
      <p>{Author}</p>
      <p>{Year}</p>
    </>
  );
};

export default Books;
