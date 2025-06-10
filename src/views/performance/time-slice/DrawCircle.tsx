import type { ReactElement } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";

import Circle from "./Circle";
import styles from "./index.module.scss";

export type Position = { width: number; height: number };

function DrawCircle() {
  const [dataList, setDataList] = useState<number[]>([]);
  const [renderList, setRenderList] = useState<ReactElement[]>([]);
  const [position, setPosition] = useState<Position>({ width: 0, height: 0 });
  const boxRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const { offsetHeight, offsetWidth } = boxRef.current!
  //   console.log("[ Position ] >", offsetHeight, offsetWidth, boxRef.current)
  //   const originList = new Array(20000).fill(1)
  //   setPosition({ height: offsetHeight, width: offsetWidth })
  //   setDataList(originList)
  //   setRenderList(originList)
  // }, [])

  const renderNewList = useCallback(
    (index: number) => {
      const list = dataList.slice((index - 1) * 500, index * 500);
      return (
        <React.Fragment key={index}>
          {list.map((_, index) => (
            <Circle key={index} position={position} />
          ))}
        </React.Fragment>
      );
    },
    [dataList, position],
  );

  const toRenderList = useCallback(
    (index: number) => {
      const times = Math.ceil(dataList.length / 500);
      if (index > times) return; /* 如果渲染完成，那么退出 */
      console.log("times", times);
      setRenderList((state) => {
        console.log("[ state ] >", state);
        return [...state, renderNewList(index)];
      });

      requestIdleCallback(() => {
        /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
        toRenderList(++index);
      });
    },
    [renderNewList, dataList],
  );

  useEffect(() => {
    const { offsetHeight, offsetWidth } = boxRef.current!;
    console.log("[ Position ] >", offsetHeight, offsetWidth, boxRef.current);
    const originList = new Array(20000).fill(1);
    setPosition({ height: offsetHeight, width: offsetWidth });
    setDataList(originList);
  }, []);

  useEffect(() => {
    const index = 1;
    console.log("toRenderList");
    toRenderList(index);
  }, [toRenderList]);

  return (
    <div ref={boxRef} className={styles["draw-circle"]}>
      {renderList}
    </div>
  );
}

export default DrawCircle;
