import Carousel from "./components/Carousel"
import Transition from "./components/Transition"

function TransitionGroup() {
  return (
    <div>
      <h2>轮播图</h2>
      <Carousel />
      <div className="common_block"></div>
      <h2>动画组</h2>
      <Transition />
    </div>
  )
}

export default TransitionGroup
