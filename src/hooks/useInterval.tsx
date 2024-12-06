import { useEffect, useRef } from "react";
type Fn = () => void;
const useInterval = (fn: Fn, time: number) => {
  const ref = useRef<Fn | null>(null);
  ref.current = fn;

  const cleanUp = useRef<Fn | null>(null);

  useEffect(() => {
    const timer = setInterval(() => ref.current!(), time);
    cleanUp.current = () => {
      clearInterval(timer);
    };
  }, [time]);

  return () => {
    cleanUp.current!();
  };
};

export default useInterval;
