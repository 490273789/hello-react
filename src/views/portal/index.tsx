import { createPortal } from "react-dom"
import Button from "@/components/Button"
import styles from "./index.module.scss"

function Portal() {
  const content = (
    <div className={styles.message}>
      <Button>按钮</Button>
    </div>
  )
  return createPortal(content, document.body)
}

export default Portal
