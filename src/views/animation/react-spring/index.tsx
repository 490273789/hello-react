import Carousel from "./components/Carousel"
import Smell from "./components/Smell"
import Spring from "./components/Spring"
import Springs from "./components/Springs"
import SpringValue from "./components/SpringValue"
import Svg from "./components/Svg"
import Trail from "./components/Trail"
import Transition from "./components/Transition"

// mass： 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
// tension: 张力，弹簧松紧程度，弹簧越紧，回弹速度越快
// friction：摩擦力，增加点阻力可以抵消质量和张力的效果
// useSpringRef：用来拿到每个动画的 ref，可以用来控制动画的开始、暂停等
// useChain：串行执行多个动画，每个动画可以指定不同的开始时间

const ReactSpring = () => {
  return (
    <div>
      <h2>smell</h2>
      <Smell />
      <div className="comment_part">
        useSpringValue：指定单个属性的变化。 useSpring：指定多个属性的变化
        <br />
        useSprings：指定多个元素的多个属性的变化，动画并行执行
        <br />
        useTrial：指定多个元素的多个属性的变化，动画依次执行
        <br />
        useSpringRef：用来拿到每个动画的 ref，可以用来控制动画的开始、暂停等
        <br />
        useChain：串行执行多个动画，每个动画可以指定不同的开始时间
      </div>
      <h2>useSpringValue</h2>
      <SpringValue />

      <div className="common_block"></div>

      <h2>useSpring</h2>
      <Spring />
      <div className="common_block"></div>

      <h2>useSprings</h2>
      <Springs />
      <div className="common_block"></div>

      <h2>useTrail</h2>
      <Trail />
      <div className="common_block"></div>

      <h2>useTransition</h2>
      <Transition />
      <div className="common_block"></div>

      <h2>Carousel</h2>
      <Carousel />

      <div className="common_block"></div>
      <h2>Svg</h2>
      <Svg />
    </div>
  )
}

export default ReactSpring
