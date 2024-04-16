import { useState } from "react"

import { TransitionGroup, CSSTransition } from "react-transition-group"
import Button from "@/components/Button"
import styles from "../index.module.scss"

function TransitionGroupUse() {
  const [pages, setPages] = useState([
    { id: 1, label: "page1" },
    { id: 2, label: "page2" }
  ])

  const handleAddItem = () => {
    setPages([
      ...pages,
      { id: pages.length + 1, label: `page${pages.length + 1}` }
    ])
  }

  const handleDeleteItem = (id: number) => {
    setPages(pages.filter((item) => item.id !== id))
  }
  return (
    <div>
      <TransitionGroup className={styles["transition-box"]}>
        {pages.map((item) => {
          return (
            <CSSTransition timeout={1000} key={item.id}>
              <div className={styles["transition-box-item"]}>
                <div className={styles["transition-box-label"]}>
                  {item.label}
                </div>
                <div
                  className={styles["transition-box-del"]}
                  onClick={() => handleDeleteItem(item.id)}
                >
                  x
                </div>
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
      <Button onClick={handleAddItem}>Add</Button>
    </div>
  )
}

export default TransitionGroupUse
