import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";

function HeroPic() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/images/1.png"
        alt="mohammd"
        className="max-w-[300px] w-full rounded-full object-cover "
      />
      <div className="absolute -z-10 justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spain-20s-linear] " />
      </div>
    </motion.div>
  );
}

export default HeroPic;
