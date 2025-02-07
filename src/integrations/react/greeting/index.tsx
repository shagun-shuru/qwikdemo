/** @jsxImportSource react */
import { useState } from "react";
import { qwikify$ } from "@builder.io/qwik-react";

// Create React component standard way
function Greetings() {
  // Add logic for counter to increment the count on button click

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Hello from React</p>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

// Convert React component to Qwik component
export const QGreetings = qwikify$(Greetings, { eagerness: "hover" });
