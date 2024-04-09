import React, { MouseEvent } from "react"

class This extends React.Component<unknown> {
  constructor(props: object) {
    super(props)
    console.log(props)
    this.clickHandle3 = this.clickHandle3.bind(this)
  }
  clickHandle1(e: MouseEvent, str: string) {
    console.log(this, e, str)
    alert("hello1")
  }

  clickHandle2 = () => {
    console.log(this)
    alert("hello2")
  }

  clickHandle3() {
    console.log(this)
    alert("hello3")
  }

  clickHandle4(str: string) {
    console.log(this, str)
    alert("hello1")
  }
  render() {
    return (
      <div>
        <h1 className="content_title">this的修正</h1>
        <span className="comment_part">只有类组件需要绑定this</span>
        <div onClick={(e) => this.clickHandle1(e, "str")}>this绑定方式1</div>
        <div onClick={this.clickHandle2}>this绑定方式2</div>
        <div onClick={this.clickHandle3}>this绑定方式3</div>
        <div onClick={this.clickHandle4.bind(this, "str")}>this绑定方式4</div>
      </div>
    )
  }
}
export default This
