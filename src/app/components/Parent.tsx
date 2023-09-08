"use client";
import { useState, useCallback } from "react";
import Child from "./Child";
import "./styles/style.scss";

type Props = {
  initialCount: number;
};

const Parent = ({ initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container">
      <h1>テスト</h1>
      <p>Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
};

export default Parent;
