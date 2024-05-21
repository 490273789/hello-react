# useMemo

## 说明

> 可以缓存一个计算结果，在依赖不改变的情况下，每次重新渲染都返回缓存的结果。

```JavaScript
const cachedValue = useMemo(calculateValue, dependencies)
```

## 参数

> useMemo(calculationValue, dependencies)

1. calculationValue: 这是一个没有参数的函数，会计算你想要缓存的值，它应该是个纯函数，没有参数，需要return一个值（缓存的值），react会在初始化渲染的时候调用1次这个函数，在组件重新渲染的时候对比dependencies中的每一个值是否相同，如果相同则直接返回之前缓存的值，如果不同则会重新计算返回新的值。

2. dependencies: 这是一个数组，存放的是calculationValue中所使用的所有reactive value的集合，reactive value包括 props,state和所有在你的组件中直接声明的变量和函数，react将dependencies中的每个依赖的值和上一次的值使用Object.is()进行比较

## 返回值

1. 初始化渲染的时候返回的是调用第一个参数的返回值

2. 在之后的渲染中，如果依赖的值没有改变则返回上次缓存的值，如果依赖改变，则重新执行calculationValue函数返回新的值
