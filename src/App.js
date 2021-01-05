import React from "react";
import "./styles.css";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export default function App() {
  return (
    <div className="App">
      {/* <Counter initialCount={0} /> */}
      <CounterHooks initialCount={0} />
    </div>
  );
}
