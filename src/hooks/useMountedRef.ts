import { useEffect, useRef } from "react";

const useMountedRef = () => {
  const state = useRef(false);
  useEffect(() => {
    state.current = true;
    return () => {
      state.current = false;
    };
  });
  return state.current;
};

export default useMountedRef;
