import { useState } from "react";
import Button from "../../ui/Button/Button";

const Example6 = () => {
  const [count, setCount] = useState(() => {
    return localStorage.getItem("count")
      ? parseInt(localStorage.getItem("count"))
      : 0;
  });

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    localStorage.setItem("count", count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default Example6;