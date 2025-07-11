import { useState } from "react";

import useDrag from "@/hooks/useDrag";

const basicStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
};
export default function Drag() {
  const [style1, dragRef1] = useDrag();
  const [style2, dragRef2] = useDrag();
  const [name, setName] = useState("wsn");
  const handleClick = () => {
    setName("wsz");
  };

  return (
    <>
      <div onClick={handleClick}>{name}</div>
      <div
        ref={dragRef1}
        style={{
          ...basicStyle,
          backgroundColor: "red",
          transform: `translate(${style1.x}px, ${style1.y}px)`,
        }}
      ></div>
      <div
        ref={dragRef2}
        style={{
          ...basicStyle,
          backgroundColor: "green",
          transform: `translate(${style2.x}px, ${style2.y}px)`,
        }}
      ></div>
    </>
  );
}
