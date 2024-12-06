import { useRef } from "react";

interface UseTimerProps {
  id: number;
  duration?: number;
  remove?: (id: number) => void;
}
const useTimer = (props: UseTimerProps) => {
  const { id, duration = 2000, remove } = props;
  const timer = useRef<number | null>(null);
  console.log("[ timer ] >", timer, duration, id, remove);
};

export default useTimer;
