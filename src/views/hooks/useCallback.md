### useCallback

```javascript
const cachedFn = useCallback(fn, dependencies);
```

- 第一个参数传入一个函数，react 不会执行这个函数，而是将这个函数定义缓存起来
- 第二个参数是依赖项，一个数组，第一个参数中使用到的 state、props、变量、函数声明等，每次组件渲染都会对数组中的依赖项使用 Object.is()，一定要写，不然会引发闭包陷阱。

#### 理解

- 每次渲染 useCallback 都会传入一个新的函数，如果依赖项没有变，会返回之前传入的函数，如果变了则返回本次渲染新传入的函数。
- useCallback 在代码中只应该作为性能优化的手段，如果没有使用 useCallback 你的代码就不能正常运行，那么需要你先修复这个问题在使用它。

react 内部简单实现

```javascript
function useCallback(fn, dependencies) {
  useMemo(() => fn, dependencies);
}
```

#### 使用场景

- 要将一个函数当做 prop 向下传入到一个被 memo 包裹的组件当中。防止子组件在函数依赖项没有变化的时候重复渲染
- 这个函数在之后要作为其他 hooks 的依赖项使用的时候。

#### 可省略依赖项的办法

1. 将函数放进 effect，代替将一个函数当做依赖

```javascript
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

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
```

```javascript
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
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

2. 使用 setState 的函数参数

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
```

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []);
```
