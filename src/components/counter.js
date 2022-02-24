import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="m-3 text-center">
        <span>{count}</span>
        <span
          className="btn btn-sm btn-success m-2 p-2"
          onClick={() => setCount((count = count + 1))}
        >
          +
        </span>
        <span
          className="btn btn-sm btn-danger m-2 p-2"
          onClick={() => setCount((count = count - 1))}
        >
          -
        </span>
      </div>
    </>
  );
};

export default Counter;
