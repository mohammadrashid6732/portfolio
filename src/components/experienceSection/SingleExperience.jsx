import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";
const SingleExperience = ({ experince }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:h-[550px] md:w-[440px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4 "
    >
      <p className="font-bold text-cyan">{experince.job}</p>
      <p className="text-orange">{experince.company}</p>
      <p className="text-lightgrey">{experince.date}</p>
      <ul className="list-disc mt-4 text-white ml-2">
        {experince.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
