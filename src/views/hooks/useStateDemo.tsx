import Button from '@/components/Button';
import { useState } from 'react';

export default function UseStateDemo() {
  const [number, setNumber] = useState<number>(0);
  const [age, setAge] = useState<number>(0);

  /** 直接改变转台 */
  const increaseNumber = () => {
    // 页面渲染一次，累加1次，最后一次有效
    setNumber(number + 1);
    setNumber(number + 2);
    setNumber(number + 1);
  };

  /** 函数改变状态 */
  const increaseAge = () => {
    // 页面渲染一次，但是互累加3次，每一次都有效
    setAge((state) => state + 1);
    setAge((state) => state + 1);
    setAge((state) => state + 1);
  };
  return (
    <div className="pt-6">
      <Button onClick={increaseNumber}>点击改变number：{number}</Button>
      <div className="common_button" onClick={increaseAge}>
        点击改变age：{age}
      </div>
    </div>
  );
}

// const getInitRule = () => [{ id: 1, name: '默认规则' }];
// const RuleList = () => {
//   const [ruleList, setRuleList] = useState(getInitRule());
//   return (
//     <ul>
//       {ruleList.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// };
