import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
}

export default function Opacity({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        className="flex-Column"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}
