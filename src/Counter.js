import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const Incrementvalue = () => {
    setcount(count + 1);
  };
  const Decrementvalue = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h2>Counter webApp</h2>

      <button onClick={Incrementvalue}>Increment</button>
      <h2>Count:{count}</h2>
      <button onClick={Decrementvalue}>Decrement</button>
    </div>
  );
};

export default Counter;
