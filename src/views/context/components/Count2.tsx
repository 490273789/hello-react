import { memo, useContext } from "react";

import Button from "@/components/Button";

import { Context } from "..";
const Count2 = () => {
  console.log("Count2 rendered");
  const { count2, setCount2 } = useContext(Context);

  return (
    <div>
      <div className="text-orange-400">Count2: {count2}</div>

      <Button className="mb-4" onClick={() => setCount2(count2 + 1)}>
        Increment
      </Button>
    </div>
  );
};
export default memo(Count2);
// A1 B0 A1B1 A2B1
