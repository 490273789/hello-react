import React, { useLayoutEffect, useRef, useState } from "react";
import useMutationObserver, {
  MutationObserverOptions,
} from "@/hooks/useMutationObserver";
interface MutateObserverProps {
  options?: MutationObserverOptions;
  onMutate: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}
const MutateObserver: React.FC<MutateObserverProps> = (props) => {
  const { options, onMutate, children } = props;

  const [dom, setDom] = useState<HTMLElement>();

  const childRef = useRef<HTMLElement>();

  useLayoutEffect(() => {
    setDom(childRef.current!);
  }, [setDom]);

  useMutationObserver(dom!, onMutate, options);

  if (!children) return null;
  return React.cloneElement(children, { ref: childRef });
};

export default MutateObserver;
