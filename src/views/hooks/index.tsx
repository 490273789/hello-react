import { ChangeEvent, useState } from "react"
import UseStateDemo from "./useStateDemo"

export default function Hooks() {
  // const cachedFn = useCallback(fn, dependencies)
  const [version, setVersion] = useState(0)
  console.log("-----render-----")
  return (
    <div>
      <h1 className="content_title">Hooks的使用</h1>

      <h2>useState基本使用</h2>
      <UseStateDemo />

      <div className="common_block"></div>

      <h2>使用key初始化组件</h2>
      <div className="common_button" onClick={() => setVersion(version + 1)}>
        reset
      </div>
      <Form key={version} />
    </div>
  )
}

function Form() {
  const [text, setText] = useState("初始化值")

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={(e) => changeText(e)} />
      <div>inputText: {text}</div>
    </div>
  )
}
