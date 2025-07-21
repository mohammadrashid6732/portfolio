import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";
import { div } from "motion/react-client";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Mashq",
    date: "2022-2022",
    responsibilities: [
      "Assisted startup founders in designing and implementing websites to showcase their ideas and MVPs",
      "Developed landing pages and early product demos for presentations and pitching events",
      "Provided UI/UX suggestions to enhance the clarity and effectiveness of their web presence.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Ziyaft",
    date: "2022-2022",
    responsibilities: [
      "Contributed to the development of a web-based event management platform.",
      "Worked closely with the team to build responsive UI components using React",
      "Integrated frontend components with backend APIs to improve user interaction and performance.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "divar",
    date: "2024-Present",
    responsibilities: [
      "Developed an OTP-based authentication system using React, React Router, React Query, and Axios, with secure token management via cookies.",
      "Designed and implemented an online classified ads platform (inspired by Divar) with features like ad submission, category filtering, and an admin panel.",
      "Built responsive user interfaces with a focus on accessibility and mobile compatibility.",
      "Integrated RESTful APIs, implemented error handling, and performed form validations following best practices.",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experince, index) => {
        return (
          <>
            <SingleExperience key={index} experince={experince} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden lg:mr-5 lg:ml-5" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
