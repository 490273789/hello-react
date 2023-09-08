### useState

#### 说明

一个常用的React Hooks，它可以给一个函数式的组件添加一个**状态变量**。

```javascript
const [state, setState] = useState(initialState);
```

#### 组成

- 参数 - initialState

  - 初始化的值，可以是任何类型；
  - 可以传入一个纯函数，不接收任何参数，返回一个值（可以是任何类型），这个函数会被当做初始化的函数，作为 useState 的初始值；
  - 这个值只有在初次渲染的时候使用，所以传入函数引用即可，不要已执行的方式传入，因为这个值只会在初始化的时候使用，传入函数执行，每次渲染都会执行函数，又不会使用它，造成性能浪费；
  - 传入的是引用值，比如对象或者数组，这个引用值对于 react 可以理解为 readonly，如果需要改变，请替换整个引用，比如可以使用展开运算符。

- returns - 返回两个值

  - 第一个值为当前的状态，第一次渲染为你传入的 initialState；
  - 第二个值为一个 set 函数，作用是更新状态的值，触发页面重新渲染；
  - set 函数用法
    1. 直接传入下一个状态的值；
    2. 传入一个函数，从上一个状态计算当前状态，这个函数必须为纯函数，接收一个state作为唯一的参数；
    3. set函数没有返回值；
    4. 如果set函数提供的新值与旧值相同，React将不会重新渲染组件；

```javascript
  function Test() {
    const [count, setCount] = useState(0)

    const handleClick () => {
      setCount(count + 1) // 直接更新
      setCount(state => state + 1) // 函数更新
    }
  }
```

#### 直接更新和函数更新的区别

1. 直接更新，在一次渲染中，无论调用多少次set函数，页面只会更新1次，相同的set函数只有最后一次调用的会生效；
2. 通过函数改变状态，页面也只会渲染一次，但是每一次调用都能够获取到上一次的状态进行计算，react会将函数放入到一个队列当中，在渲染前会依次执行函数；

```javascript
const [number, setNumber] = useState < number > 0;
const [age, setAge] = useState < number > 0;

/** 直接改变转台 - number = 1 */
const increaseNumber = () => {
  // 页面渲染一次，累加1次，最后一次有效
  setNumber(number + 1);
  setNumber(number + 2);
  setNumber(number + 1);
};

/** 函数改变状态 number = 3 */
const increaseAge = () => {
  // 页面渲染一次，但是互累加3次，每一次都有效
  setAge((state) => state + 1);
  setAge((state) => state + 1);
  setAge((state) => state + 1);
};

return (
  <div>
    <button onClick={increaseNumber}>点击改变number：{number}</button>
    <button onClick={increaseAge}>点击改变age：{age}</button>
  </div>
);
```

#### 注意事项

1. 只能在函数式组件的顶层作用域中或者自定义Hooks的顶层作用域中使用他，不能写在循环语句或者条件语句中。
2. 在开发环境中，如果开启了严格模式，React会调用两次初始化函数，目的是为了帮我们一些可能产生意外的代码，如果你的初始化函数不是一个**纯函数**就可能会出现问题。

#### 常见问题

- 需要在调用 set 函数后获取 nextState
  - 设置一个变量缓存 nextState

```javascript
handleCLick() {
  const nextState = count + 1
  setCount(nextState)
  console.log(nextState)
}
```

- 更新状态，页面没有重新渲染
  - react 通常会通过 Object.is()方法比较两次状态值，如果相同则不会更新，想要更新必须改变值的引用

```javascript
setObj({
  ...obj,
  name: 'wsn'
});
```

- 如何将函数当做一个状态

```javascript
const [fn setFn] = useState(() => someFunc)

handleClick() {
  setFn(() => someOtherFunc)
}
```
