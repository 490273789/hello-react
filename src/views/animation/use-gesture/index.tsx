import Carousel from "./components/Carousel";
import Drag from "./components/Drag";

function UseGesture() {
  return (
    <div>
      <h2>useDrag</h2>
      <Drag />
      <div className="common_block"></div>
      <h2>Carousel</h2>
      <Carousel width={500} />
      <div className="common_block"></div>
    </div>
  );
}

export default UseGesture;
