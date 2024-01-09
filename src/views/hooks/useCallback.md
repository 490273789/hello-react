# （二）useCallback

## 说明

> 可以缓存一个函数，在依赖不改变的情况下，每次重新渲染都返回缓存的函数。

```javascript
const cachedFn = useCallback(fn, dependencies);
```

## 参数

> useCallback(fn, dependencies)

1. fn: 想要缓存的函数，在依赖不该的情况下，没次渲染都会返回相同的函数。当依赖改变了将会返回一个新的函数，useCallback不会执行这个函数。
2. dependencies: 是一个数组，这个列表中的值包含第一参数fn中所有用到的响应值，这个响应值包括props,state,和函数组件中声明的所有变量和函数，react在每次渲染时用Object.is方法比较每个依赖和上次的依赖是否有变化，如果变化了将返回新的fn。

## 返回值

1. 在初始化的时候返回你传入的函数
2. 在之后的渲染中，如果依赖选项不变，则返回上一次缓存的fn，如果依赖项改变则返回新的fn。

## react 内部简单实现

```javascript
function useCallback(fn, dependencies) {
  useMemo(() => fn, dependencies); // 基于useMemo实现
}
```

## 用法

### 使用场景

- 要将一个函数当做 prop 向下传入到一个被 memo 包裹的组件当中。防止子组件在函数依赖项没有变化的时候重复渲染
- 这个函数在之后要作为其他 hooks 的依赖项使用的时候。

### 将函数放进 useEffect，代替将一个函数当做依赖

```javascript
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');
  // 如果当前函数需要在多个地方调用 使用useCallback
  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]);

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]);
}
```

```javascript
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 如果此函数只在这一个地方使用，可直接放入useEffect中，减少不必要的依赖监听
    // 对比上面的代码，少使用了一个useCallback，少了一个createOptions依赖的监听
    function createOptions() {
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
```

### 使用 setState 的函数参数减少依赖

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback(
    (text) => {
      const newTodo = { id: nextId++, text };
      setTodos([...todos, newTodo]);
    },
    [todos, setTodos]
  );
}
```

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback(
    (text) => {
      const newTodo = { id: nextId++, text };
      // 函数作为参数，这个函数的参数能够获取到最新的状态值，所以就不需要监听state了，通过这种方式解决闭包引发的问题
      setTodos((todos) => [...todos, newTodo]);
    },
    [setTodos]
  );
}
```

### 优化自定义hooks

```javascript
// 自定义hooks中推荐将所有return的函数都包裹上useCallback
function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback(
    (url) => {
      dispatch({ type: 'navigate', url });
    },
    [dispatch]
  );

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack
  };
}
```
