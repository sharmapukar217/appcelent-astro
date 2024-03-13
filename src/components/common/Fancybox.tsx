import { useRef, useEffect, type PropsWithChildren } from "react";

import * as NativeFancybox from "@fancyapps/ui";

// const { Fancybox: NativeFancybox } = FancyboxPkg;
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import UseMounted from "@/hooks/UseMount";

// TODO FIX THE TYPE
// import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface Props {
  options?: any;
  delegate?: string;
}

const Fancybox = (props: PropsWithChildren<Props>) => {
  const isMounted = UseMounted();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.Fancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.Fancybox.unbind(container);
      NativeFancybox.Fancybox.close();
    };
  });

  if (!isMounted) {
    return null;
  }

  return <div ref={containerRef}>{props.children}</div>;
};

export default Fancybox;
