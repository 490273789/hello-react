import { MouseEvent } from 'react';

const Event = () => {
  /**
   *
   * @param e 合成的事件对象
   */
  const handleClick = (e: MouseEvent) => {
    // 原生事件对象
    console.log(e.nativeEvent);
    // 阻止默认行为
    e.preventDefault();
    alert('事件触发');
    console.log(e);
  };
  return (
    <div>
      <div onClick={(e) => handleClick(e)}>事件</div>
    </div>
  );
};

export default Event;
