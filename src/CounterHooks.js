import React, { useContext, useState } from "react";

import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <>
      <button
        style={style}
        onClick={() => setCount((prevState) => prevState - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        +
      </button>
    </>
  );
}
