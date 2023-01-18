import React from "react";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default function CurrentDate() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App relative  w-32 ...">
      <h1 className="absolute top-0 right-0 w-16 ..."> {date}</h1>
    </div>
  );
}