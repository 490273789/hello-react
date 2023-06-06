import { ChangeEvent, useEffect, useState } from 'react';

export default function Hooks() {
  // const cachedFn = useCallback(fn, dependencies)
  const [count, setCount] = useState(0);
  const [version, setVersion] = useState(0);

  // 监听count的变化
  useEffect(() => {
    console.log('count:', count);
  }, [count]);

  const increase = () => {
    if (count % 2) {
      console.log('偶数');
      // 页面渲染一次，但是互累加3次
      // 对于函数添加到了一个跟新队列中，渲染前会依次执行函数
      setCount((state) => state + 1); // 2 + 1
      setCount((state) => state + 1); // 3 + 1
      setCount((state) => state + 1); // 4 + 1
    } else {
      console.log('奇数');
      // 页面渲染一次，累加1次
      setCount(count + 1); // 0 + 1
      setCount(count + 1); // 0 + 1
      setCount(count + 1); // 0 + 1
    }
  };

  console.log('-----render-----');
  return (
    <div>
      <h1 className="content_title">Hooks的使用</h1>

      <h2>useState基本使用</h2>
      <div>count:{count}</div>
      <div className="common_button" onClick={increase}>
        increase
      </div>

      <div className="common_block"></div>

      <h2>使用key初始化组件</h2>
      <div className="common_button" onClick={() => setVersion(version + 1)}>
        reset
      </div>
      <Form key={version} />
    </div>
  );
}

function Form() {
  const [text, setText] = useState('初始化值');

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={(e) => changeText(e)} />
      <div>inputText: {text}</div>
    </div>
  );
}
