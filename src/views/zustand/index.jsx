import { useState } from "react";
import "./index.scss";
import useStore from "@/stores";

const Zustand = () => {
  console.log(useStore);
  const age = useStore((state) => state.age);
  const setAge = useStore((state) => state.setAge);

  const [active, setActive] = useState("1");

  /** 监听状态的改变 */
  // useStore.subscribe((state) => {
  //   console.log('state: ', state);
  //   console.log('getState:', useStore.getState());
  // });
  return (
    <div>
      <div>年龄：{age}</div>
      <div
        className={"active " + (active === "2" ? "ok" : "")}
        onClick={() => {
          setActive("2");
        }}
      >
        111111
      </div>
      输入改变年龄：
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
    </div>
  );
};

export default Zustand;
