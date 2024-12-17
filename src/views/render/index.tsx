import { memo } from "react";

const MoreRender = () => {
  return (
    <div>
      {Array.from(100).map((ele: number) => {
        return <div key={ele}></div>;
      })}
    </div>
  );
};

export default memo(MoreRender);
