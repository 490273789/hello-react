import { CSSProperties } from "react";
import cs from "classnames";

export interface ColorPickerProps {
  className?: string;
  style?: CSSProperties;
  value?: string;
  onChange?: (color: string) => void;
}

const ColorPickerPanel = (props: ColorPickerProps) => {
  const { className, style } = props;

  const classNames = cs("color-picker", className);
  return <div className={classNames} style={style}></div>;
};

export default ColorPickerPanel;
