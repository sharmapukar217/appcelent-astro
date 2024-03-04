import { useRef, useEffect, type PropsWithChildren } from "react";

import FancyboxPkg from "@fancyapps/ui";
const { Fancybox: NativeFancybox } = FancyboxPkg;
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// TODO FIX THE TYPE
// import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  options?: any;
  delegate?: string;
}

const Fancybox = (props: PropsWithChildren<Props>) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
};

export default Fancybox;
