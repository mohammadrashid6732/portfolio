import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden"
      >
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden ">
          <AllSkillsSm />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsMain;
