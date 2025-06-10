import cs from "classnames";

import useAnimation from "@/hooks/useAnimation";

import style from "./index.module.scss";
type T = keyof typeof style;
export default function Animation() {
  const [className, toggle] = useAnimation("active");

  return (
    <div
      className={cs(style["circle"], style[className as T])}
      onClick={toggle}
    ></div>
  );
}
