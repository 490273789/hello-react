import type { CSSProperties, HTMLAttributes } from "react";
import type { FC } from "react";
import { Fragment, useContext, useMemo } from "react";
import { Children } from "react";

export type SizeType = "small" | "middle" | "large" | number | undefined;
import cn from "classnames";

import "./index.scss";
import { ConfigContext } from "./ConfigProvider";

interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
}

export interface ConfigContextType {
  space?: {
    size?: SizeType;
  };
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};
const getNumberSize = (size: SizeType) => {
  return typeof size === "string" ? spaceSize[size] : (size ?? 0);
};

const Space: FC<SpaceProps> = (props) => {
  const { space } = useContext(ConfigContext);
  const {
    className,
    style,
    size = space?.size ?? "small",
    direction = "horizontal",
    align,
    split,
    wrap,
    ...otherProps
  } = props;

  const childNodes = Children.toArray(props.children);

  const mergedAlign =
    direction === "horizontal" && align === undefined ? "center" : align;

  const classnames = cn("space", `space-${direction}`, {
    [`space-align-${mergedAlign}`]: mergedAlign,
    className,
  });

  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) ?? `space-item-${i}`;
    return (
      <Fragment key={key}>
        <div className="space-item">{child}</div>
        {i < childNodes.length - 1 && split && (
          <span className={`${className}-split`} style={style} key={i}>
            {split}
          </span>
        )}
      </Fragment>
    );
  });

  const otherStyles: CSSProperties = {};
  const [horizontalSize, verticalSize] = useMemo(
    () =>
      (Array.isArray(size) ? size : ([size, size] as [SizeType, SizeType])).map(
        (item) => getNumberSize(item),
      ),
    [size],
  );

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;
  if (wrap) otherStyles.flexWrap = "wrap";

  return (
    <div
      className={classnames}
      style={{ ...otherStyles, ...style }}
      {...otherProps}
    >
      {nodes}
    </div>
  );
};

export default Space;
