import Spring from './components/Spring';
import Springs from './components/Springs';
import SpringValue from './components/SpringValue';

// mass： 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
// tension: 张力，弹簧松紧程度，弹簧越紧，回弹速度越快
// friction：摩擦力，增加点阻力可以抵消质量和张力的效果

const ReactSpring = () => {
  return (
    <div>
      <h2>useSpringValue</h2>
      <SpringValue />

      <div className="common_block"></div>

      <h2>useSpring</h2>
      <Spring />
      <div className="common_block"></div>

      <h2>useSprings</h2>
      <Springs />
    </div>
  );
};

export default ReactSpring;
