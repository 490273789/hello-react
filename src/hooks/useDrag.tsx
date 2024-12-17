import { useLayoutEffect, useRef, useState } from "react";

export default function useDrag() {
  const [, forceUpdate] = useState({});
  const positionRef = useRef({
    currentX: 0, // 当前位置
    currentY: 0,
    lastX: 0, // 上一次的位置
    lastY: 0,
  });
  const domRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let startX = 0,
      startY = 0;
    const start = function (event: MouseEvent) {
      startX = event.clientX;
      startY = event.clientY;
      domRef.current?.addEventListener("mousemove", move);
      domRef.current?.addEventListener("mouseup", end);
    };

    const move = function (event: MouseEvent) {
      positionRef.current.currentX =
        positionRef.current.lastX + (event.clientX - startX);
      positionRef.current.currentY =
        positionRef.current.lastY + (event.clientY - startY);
      forceUpdate({});
    };

    const end = () => {
      positionRef.current.lastX = positionRef.current.currentX;
      positionRef.current.lastY = positionRef.current.currentY;
      domRef.current?.removeEventListener("mousemove", move);
      domRef.current?.removeEventListener("mouseup", end);
    };
    domRef.current?.addEventListener("mousedown", start);
    const ref = domRef.current;
    return () => {
      ref?.removeEventListener("mousedown", start);
    };
  }, []);
  const style = {
    x: positionRef.current.currentX,
    y: positionRef.current.currentY,
  };
  return [style, domRef] as const;
}
