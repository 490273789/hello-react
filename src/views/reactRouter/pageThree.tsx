import { useEffect } from "react";

import { useLocation } from "react-router";

export default function PageThree() {
  const local = useLocation();
  useEffect(() => {
    console.log("local:", local);
  }, [local]);

  return (
    <div>
      <div className="content-title">state方式用local获取</div>
      <div>{JSON.stringify(local)}</div>
    </div>
  );
}
