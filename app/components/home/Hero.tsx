"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../../styles/animations";
import { discount, robot } from "../../../public";
import GetStarted from "./GetStarted";
import { useTheme } from "./ThemeContext";


const Hero = () => {
  const { theme } = useTheme();
  return (
    <section id="home" className="flex md:flex-row flex-col paddingY">
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <Image src={discount} alt="discount" width={32} height={32} priority={true} /> */}
          <p className="paragraph ml-2">
            <span className={`${theme==="dark"? "text-white":"text-gray-700" }`}>Check Out </span> Our New {" "}
            <span className={`${theme==="dark"? "text-gradient1 ":"text-gradient1d" }`}>Fullstack Web Developer </span>Mock
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${theme==="dark"? "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]":"flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px]" }`} >
            Let's <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Prepare For </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`${theme==="dark"? "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full":"font-poppins font-semibold ss:text-[68px] text-[52px] text-gray-700 ss:leading-[100.8px] leading-[75px] w-full" }`}>
          Your Next Venture.
        </h1>
        <p className="paragraph max-w-[470px] mt-5">
          MockMate is an AI powered mock interview platform which helps you simulate real life scenario and be confident in your preparation.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={robot}
          alt="billing"
          width={0}
          height={0}
          className="sm:w-[90%] w-[90%] sm:h-[100%] h-[90%] relative z-[5]"
          priority={true}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className="ss:hidden flexCenter">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
