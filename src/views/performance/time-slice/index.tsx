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
      <Button className="mb-2" onClick={handleShow}>
        show
      </Button>
      {show && <DrawCircle />}
    </div>
  );
};

export default TimeSlice;
