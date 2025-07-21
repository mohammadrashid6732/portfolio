import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";
function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-4xl font-bold font-roboto text-orange"
      >
        Mohammad Rashidi
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A Passionate Web Developer and Instructor
        <br />
        with 3 years of experience
      </motion.p>
    </div>
  );
}

export default HeroText;
