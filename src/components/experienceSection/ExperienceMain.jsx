import AllExperience from "./AllExperience";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightbrown lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
