import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Button from "@/components/Button";

import MutateObserver from "./MutateObserver";

function MutationObserverUse() {
  const [className, setClassName] = useState("aaa");
  const [className1, setClassName1] = useState("aaa");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver((mutations) => {
      console.log("MutationObserver:", mutations);
    });

    observer.observe(container, {
      // attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class"],
    });
  }, []);

  const inceptCallback = useCallback(
    (mutations: MutationRecord[], observer: MutationObserver) => {
      console.log("🚀 ~ MutationObserverUse ~ mutations:", mutations);
      console.log("🚀 ~ MutationObserverUse ~ observer:", observer);
    },
    [],
  );
  return (
    <div>
      <div id="container" ref={containerRef}>
        <div className={className}>{className}</div>
      </div>
      <Button onClick={() => setClassName("bbb")}>Mutate1</Button>

      <MutateObserver onMutate={inceptCallback}>
        <div className={className1}>{className1}</div>
      </MutateObserver>
      <Button onClick={() => setClassName1("bbb")}>Mutate2</Button>
    </div>
  );
}

export default MutationObserverUse;
