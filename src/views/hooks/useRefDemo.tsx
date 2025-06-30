import Button from "@/components/Button";
import { useEffect, useRef } from "react";

const UseRefDemo = () => {
  const setRef = useRef<Set<number>>(new Set());

  // const focusInput = () => {
  //   inputRef.current?.focus();
  // };

  const changeSets = () => {
    setRef.current.add(1);
    setRef.current.add(2);
    setRef.current.add(3);
    setRef.current.add(4);
    setRef.current.add(5);
  };

  useEffect(() => {
    const sets = setRef.current;
    return () => {
      console.log(sets);
    };
  }, []);

  return (
    <div>
      <Button onClick={changeSets}>Set</Button>
    </div>
  );
};
export default UseRefDemo;
