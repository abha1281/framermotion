import type { NextPage } from "next";
import { motion, useScroll } from "framer-motion";
import Text from "../components/Text";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { scrollY } = useScroll({
    container: scrollRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    return scrollY.onChange(latest => {
      console.log(latest);
      setScrollPosition(latest);
    });
  }, [scrollY]);

  return (
    <div className="bg-black/75">
      <div
        ref={scrollRef}
        className="py-40 text-center flex flex-col gap-y-40 max-h-screen overflow-y-scroll"
      >
        <motion.p
          style={{
            opacity: 648 / scrollPosition / 100,
          }}
          className="w-max py-24 mx-auto text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#dc79ff] to-[#256bfa]"
        >
          Light. Bright.
          <br />
          Full of might
        </motion.p>
        <Text scrollPosition={scrollPosition} text="Supercharged by the" secondaryText="Apple M1 chip." />
        <Text scrollPosition={scrollPosition} 
          text="12MP Ultra Wide front camera"
          secondaryText="with Center Stage."
        />
        <Text scrollPosition={scrollPosition} text="Blazing-fast 5G." />
        <Text scrollPosition={scrollPosition} 
          text="Works with Apple Pencil and Magic Keyboard."
          secondaryText="Five gorgeous colors."
        />
      </div>
      <div className="fixed -z-10 inset-0">
        <video className="object-fill" autoPlay loop muted playsInline>
          <source src="/video.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
