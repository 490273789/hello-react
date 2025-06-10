import type { ReactElement } from "react";
import React from "react";

// @babel/plugin-syntax-jsx ： 使用这个插件，能够让 Babel 有效的解析 JSX 语法。
// @babel/plugin-transform-react-jsx ：这个插件内部调用了 @babel/plugin-syntax-jsx，可以把 React JSX 转化成 JS 能够识别的 createElement 格式。

const typeList = ["react", "vue", "angular"];
const TextComponent = () => <div>我是组件</div>;

// class Jsx extends React.Component {
//   status = false
//   renderContent = () => <div>渲染内容函数</div>

//   render() {
//     return (
//       <>
//         {/* element元素类型 */}
//         <div>element 元素类型</div>
//         {/* fragment 类型*/}
//         <React.Fragment>fragment 类型</React.Fragment>
//         {/* 组件*/}
//         <TextComponent />
//         {/* 文本类型*/}
//         我是文本类型
//         {/* 三元运算符*/}
//         {this.status ? <TextComponent /> : "三元运算符"}
//         {/* 执行函数*/}
//         {this.renderContent()}
//         {/* 数组节点*/}
//         {typeList.map((type) => (
//           <div key={type}>{type}</div>
//         ))}
//         <button onClick={() => console.log(this.render())}>
//           点击打印render后的内容
//         </button>
//       </>
//     )
//   }
// }
class Jsx extends React.Component {
  status = false; /* 状态 */
  renderFoot = () => <div> I&apos;m foot</div>;
  /* 控制渲染 */
  controlRender = () => {
    const reactElement = (
      <div style={{ marginTop: "100px" }} className="container">
        {/* element 元素类型 */}
        <div>hello,world</div>
        {/* fragment 类型 */}
        <React.Fragment>
          <div> 👽👽 </div>
        </React.Fragment>
        {/* text 文本类型 */}
        my name is alien
        {/* 数组节点类型 */}
        {typeList.map((item) => (
          <div key={item}>let us learn {item} </div>
        ))}
        {/* 组件类型 */}
        <TextComponent />
        {/* 三元运算 */}
        {this.status ? <TextComponent /> : <div>三元运算</div>}
        {/* 函数执行 */}
        {this.renderFoot()}
        <button onClick={() => console.log(this.render())}>
          打印render后的内容
        </button>
      </div>
    );
    console.log("🚀 ~ Jsx ~ reactElement:", reactElement);
    const { children } = reactElement.props;
    console.log("🚀 ~ Jsx ~ children:", children);

    /**
     * 扁平化 children API
     * React.Children.toArray 可以扁平化、规范化 React.element 的 children 组成的数组，
     * 只要 children 中的数组元素被打开，对遍历 children 很有帮助，
     * 而且 React.Children.toArray 还可以深层次 flat 。
     */
    const flatChildren = React.Children.toArray(children);
    console.log("🚀 ~ Jsx ~ flatChildren:", flatChildren);

    /**
     * 第1步 ：扁平化 children , 除去文本节点
     * React.isValidElement 这个方法可以用来检测是否为 React element 元素，
     * 接收一个参数——待验证对象，如果是返回 true ，否则返回 false 。
     * React.Children.forEach = React.Children.toArray + Array.prototype.forEach
     * React.Children.forEach 本身就可以把 children 扁平化了
     */
    const newChildren: ReactElement[] = [];
    React.Children.forEach(children, (item) => {
      if (React.isValidElement(item)) newChildren.push(item);
    });
    console.log("🚀 ~ Jsx ~ newChildren:", newChildren);

    /* 第2步，插入新的节点 */
    // 等同于 newChildren.push(<div className="last" >say goodbye</div>)
    const lastChildren = React.createElement(
      `div`,
      { className: "last" },
      `say goodbye`,
    );
    newChildren.push(lastChildren);

    /**
     * 第3步：修改容器节点
     * const clonedElement = cloneElement(element, props, ...children)
     * cloneElement 的作用是以 element 元素为样板克隆并返回新的 React element 元素。
     * 返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
     * 这里 React.cloneElement 做的事情就是，把 reactElement 复制一份，
     * 再用新的 children 属性，从而达到改变 render 结果的目的。
     */
    const newReactElement = React.cloneElement(
      reactElement,
      {},
      ...newChildren,
    );
    console.log("newReactElement:", newReactElement);
    return newReactElement;
  };
  render() {
    return this.controlRender();
  }
}
export default React.memo(Jsx);
