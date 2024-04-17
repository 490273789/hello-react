import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import Button from "@/components/Button"

function MutationObserverUse() {
  const [className, setClassName] = useState("aaa")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new MutationObserver((mutations) => {
      console.log("MutationObserver:", mutations)
    })

    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["className"]
    })
  }, [])
  return (
    <div>
      <div id="container" ref={containerRef}>
        <div className={className}>
          {className === "aaa" ? (
            <div>aaa</div>
          ) : (
            <div>
              <p>bbb</p>
            </div>
          )}
        </div>
      </div>
      <Button onClick={() => setClassName("bbb")}>Mutate</Button>
    </div>
  )
}

export default MutationObserverUse
