import React from "react";

const Children1 = () => {
  let a = 5;
  console.log(a)
  return (
    <div>
      <button onClick={() => {
        a = 10;
        console.log(a)
      }}>aaa</button>
    </div>
  );
};

export default Children1;
