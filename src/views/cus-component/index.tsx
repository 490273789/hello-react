import Button from "@/components/Button"
import CusPortal from "./components/CusPortal"
import MutationObserverUse from "./components/MutationObserver"
import styles from "./index.module.scss"

function CusComponent() {
  return (
    <div>
      <h2>createPortal</h2>
      <div className="cus-component"></div>
      <CusPortal attach={".cus-component"}>
        <div className={styles.message}>
          <Button>createPortal</Button>
        </div>
      </CusPortal>
      <div className="common_block"></div>

      <h2>MutationObserver</h2>
      <MutationObserverUse />
      <div className="common_block"></div>
    </div>
  )
}

export default CusComponent
