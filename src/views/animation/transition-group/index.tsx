import Transition from "./components/Transition";
import TransitionGroupUse from "./components/TransitionGroupUse";

function TransitionGroup() {
  return (
    <div>
      <h1>过度动画</h1>
      <div className="comment_part">
        TransitionGroup只会给元素在不同时机添加class-name，对应的css效果需要自己写。
      </div>
      <div className="comment_part">
        共有四个组件：
        Transition、CSSTransition、TransitionGroup、SwitchTransition
      </div>
      <h2>Transition</h2>
      <Transition />
      <div className="common_block"></div>

      <h2>TransitionGroup</h2>
      <TransitionGroupUse />
      <div className="common_block"></div>
    </div>
  );
}

export default TransitionGroup;
