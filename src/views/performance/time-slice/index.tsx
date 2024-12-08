import { useState } from "react";
import Button from "@/components/Button";
import DrawCircle from "./DrawCircle";

const TimeSlice = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((state) => !state);
  };
  return (
    <div>
      <Button onClick={handleShow}>{show ? "hide" : "show"}</Button>
      <div className="mt-5">{show && <DrawCircle />}</div>
    </div>
  );
};

export default TimeSlice;
