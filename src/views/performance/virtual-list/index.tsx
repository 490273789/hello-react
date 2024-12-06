import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function VirtualList() {
  const [dataList, setDataList] = useState<number[]>([]);
  const [position, setPosition] = useState([0, 0]);
  // const scroll = useRef<HTMLDivElement>(null)
  const box = useRef<HTMLDivElement>(null);
  // const context = useRef<HTMLDivElement>(null)
  const scrollInfo = useRef({
    height: 500,
    bufferCount: 8,
    itemHeight: 60,
    renderCount: 0,
  });

  useEffect(() => {
    // 制作一个长列表
    const dataList = new Array(10000).fill(1).map((_, index) => index + 1);
    setDataList(dataList);

    // 根据页面实际的高度和每一项的高度计算出渲染的数量
    const height = box.current!.offsetHeight;
    const { itemHeight, bufferCount } = scrollInfo.current;
    const renderCount = Math.ceil(height / itemHeight) + bufferCount;
    scrollInfo.current = { renderCount, height, bufferCount, itemHeight };
    setPosition([0, renderCount]);
  }, []);

  // const handleScroll = () => {
  //   const { scrollTop } = scroll.current
  //   const { itemHeight, renderCount } = scrollInfo.current
  //   const currentOffset = scrollTop - (scrollTop % itemHeight)
  //   const start = Math.floor(scrollTop / itemHeight + renderCount + 1)
  //   context.current!.style.transform = `translate3d(0, ${currentOffset}px, 0)`
  // }
  return (
    <div>
      {dataList.map((item, index) => {
        if (index >= position[0] && index <= position[1]) {
          return (
            <div key={index} style={{ height: 60 }}>
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default VirtualList;
