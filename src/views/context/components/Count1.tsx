import { useContext } from "react";

import Button from "@/components/Button";

import { Context } from "..";

const Count1 = () => {
  console.log("Count1 rendered");
  const { count, setCount } = useContext(Context);
  return (
    <div>
      <div className="text-orange-400">Count1: {count}</div>

      <Button className="mb-4" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
};
export default Count1;
