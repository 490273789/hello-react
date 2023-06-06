### useState

```javascript
const [state, setState] = useState(initialState);
```

- initialState
  - 初始化的值，可以是任何类型；
  - 可以传入一个纯函数，没有 arguments，有一个可以是任何类型的返回值，作为 useState 的初始值；
  - 这个值只有在初次渲染的时候使用，所以传入函数引用即可，不要已执行的方式传入，因为这个值只会在初始化的时候使用，传入函数执行，每次渲染都会执行函数，又不会使用它，造成性能浪费；
  - 传入的是引用值，比如对象或者数组，这个引用值对于 react 可以理解为 readonly，如果需要改变，请替换整个引用，比如可以使用展开运算符。
- returns 返回两个值
  - 当前的状态，第一次渲染为你传入的 initialState；
  - 第二个值是一个 set 函数，将更新状态为不同的值，触发页面重新渲染；
- set 函数
  1. 直接传入下一个状态的值
  2. 传入一个函数，从上一个状态计算当前状态

```javascript
  function Test() {
    const [count, setCount] = useState(0)

    const handleClick () => {
      setCount(count + 1)
      setCount(state => state + 1)
    }
  }
```

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

- 更新状态，页面么有重新渲染
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
