import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
  secondaryText?: string;
  scrollPosition?: number
};

const Text = ({ text, secondaryText, scrollPosition }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollY } = useScroll({
    target: ref,
  });

  useEffect(() => {
    ref.current && console.log(ref.current.offsetTop)
  },[ref, ref.current])


  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1  }}
      viewport={{
        once: false,
        amount: 1,
      }}
      className="text-white font-medium text-7xl"
      ref={ref}
    >
      {text}
      {secondaryText && <br />}
      {secondaryText}.
    </motion.p>
  );
};

export default Text;
