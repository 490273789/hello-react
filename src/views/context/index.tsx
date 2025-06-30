import { createContext, useState } from "react";

import Count1 from "./components/Count1";
import Count2 from "./components/Count2";

export const Context = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count2: number;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setCount: () => {}, count2: 0, setCount2: () => {} });

const ContextTest = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>Context Test</h1>
      <p>This is a test for the context feature.</p>
      <Context.Provider value={{ count, setCount, count2, setCount2 }}>
        <Count1 />
        <Count2 />
      </Context.Provider>
    </div>
  );
};
export default ContextTest;
