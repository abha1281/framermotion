import type { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";
import Text from "../components/Text";
import { useEffect } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [2650, 2800],
    ["#000000", "#FFFFFF"]
  );

  const textColor = useTransform(
    scrollY,
    [2650, 2800],
    ["#FFFFFF", "#000000"]
  );

  const videoPosition = useTransform(scrollY, [450, 2950], [0, 0]);
  const videoOpacity = useTransform(scrollY, [450, 2800, 2850], [0, 1, 0]);

  const airVideoPosition = useTransform(scrollY, [0, 290], [0, 290]);
  const airVideoOpacity = useTransform(scrollY, [0, 290], [1, 0]);
  const airVideoScale = useTransform(scrollY, [0, 290], [1, 0.85]);

  const mainTextOpacity = useTransform(scrollY, [150, 770, 1066], [0, 1, 0]);
  const superchargedOpacity = useTransform(
    scrollY,
    [685, 1115, 1415],
    [0, 1, 0]
  );
  const ultraWideOpacity = useTransform(scrollY, [988, 1425, 1719], [0, 1, 0]);
  const blazingOpacity = useTransform(scrollY, [1295, 1730, 2028], [0, 1, 0]);
  const magicKeyboardOpacity = useTransform(
    scrollY,
    [1523, 1963, 2260],
    [0, 1, 0]
  );
  const gorgeousOpacity = useTransform(scrollY, [1830, 2260, 2560], [0, 1, 0]);

  useEffect(() => {
    return scrollY.onChange(latest => {
      console.log("Page scroll: ", latest);
    });
  }, [scrollY]);

  return (
    <motion.div
      className="h-[500vh] text-center"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="h-screen ">
        <motion.div
          style={{
            translateY: airVideoPosition,
            opacity: airVideoOpacity,
            scale: 0.35,
          }}
        >
          <div className="relative">
            <Image
              objectFit="contain"
              src="/main_ipad.png"
              className="z-10"
              alt="ipad_mini"
              layout="fill"
            />
            <motion.video
              style={{ scale: airVideoScale }}
              className="h-screen  object-contain"
              autoPlay
              playsInline
              muted
            >
              <source src="/air.mp4" />
            </motion.video>
          </div>
        </motion.div>
      </div>
      <div className="">
        <motion.video
          style={{
            opacity: videoOpacity,
            translateY: videoPosition,
          }}
          className="fixed object-cover h-screen z-10"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/video.mp4" />
        </motion.video>
        <div className="py-40 z-20">
          <motion.p
            style={{ opacity: mainTextOpacity }}
            className="w-max mx-auto text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#dc79ff] to-[#256bfa]"
          >
            Light. Bright.
            <br />
            Full of might
          </motion.p>
          <motion.p
            className="text-white font-medium text-7xl mt-40"
            style={{ opacity: superchargedOpacity }}
          >
            Supercharged by the
            <br />
            Apple M1 chip.
          </motion.p>
          <motion.p
            className="text-white font-medium text-7xl mt-40"
            style={{ opacity: ultraWideOpacity }}
          >
            12MP Ultra Wide front camera
            <br />
            with Center Stage.
          </motion.p>
          <motion.p
            className="text-white font-medium text-7xl mt-40"
            style={{ opacity: blazingOpacity }}
          >
            Blazing-fast 5G.
          </motion.p>
          <motion.p
            className="text-white font-medium text-7xl mt-40"
            style={{ opacity: magicKeyboardOpacity }}
          >
            Works with Apple Pencil
            <br />
            and Magic Keyboard.
          </motion.p>
          <motion.p
            className="text-white font-medium text-7xl mt-40"
            style={{ opacity: gorgeousOpacity }}
          >
            Five gorgeous colors.
          </motion.p>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center">
        <h2 className=" text-8xl font-medium">
          All-screen{" "}
          <span className="w-max mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#f56772] to-[#ba6bff]">
            design.
          </span>
          <br />
          Beauty all around.
        </h2>
      </div>
    </motion.div>
  );
};

export default Home;
