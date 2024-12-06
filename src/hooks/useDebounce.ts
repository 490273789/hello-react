import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number) => {
  const [result, setResult] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setResult(value), delay);
    return clearTimeout(timer);
  }, [value, setResult, delay]);
  return result;
};
export default useDebounce;
