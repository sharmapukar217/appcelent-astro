import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

import UseMounted from "@/hooks/UseMount";

interface CountType {
  number: number;
}

const Count = ({ number }: CountType) => {
  const mounted = UseMounted();
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    const hasCountedBefore = localStorage.getItem("hasCountedBefore");

    if (!hasCountedBefore) {
      setFocus(true);
      localStorage.setItem("hasCountedBefore", "true");
    }
  }, []);

  return (
    <>
      {mounted && (
        <CountUp
          start={0}
          end={focus ? number : 0}
          duration={2}
          decimals={number % 1 !== 0 ? 1 : 0}
        >
          {({ countUpRef }) => (
            <>
              <span ref={countUpRef} />
              <InView
                as="span"
                onChange={(inView: any) => {
                  if (inView && !focus) {
                    setFocus(true);
                  }
                }}
              ></InView>
            </>
          )}
        </CountUp>
      )}
    </>
  );
};

export default Count;
