import React from "react";
import Books from "./Books";

const App = () => {
  const BookData = [
    {
      Title: "Book1",
      Author: "Author1",
      Year: "Year1",
    },
    {
      Title: "Book2",
      Author: "Author2",
      Year: "Year2",
    },
    {
      Title: "Book3",
      Author: "Author3",
      Year: "Year3",
    },
  ];

  console.log(BookData[0]);

  return (
    <>
      {BookData.map((BookData,index) => (
        <Books key={index} {...BookData} />
      ))}
    </>
  );
};

export default App;
