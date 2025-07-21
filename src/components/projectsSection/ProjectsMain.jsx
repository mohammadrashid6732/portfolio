import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";

const projects = [
  {
    name: "Vactions of africa",
    year: "mar2022",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Vactions of africa",
    year: "mar2022",
    align: "left",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Vactions of africa",
    year: "mar2022",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Vactions of africa",
    year: "mar2022",
    align: "left",
    image: "../../../public/images/website-img-1.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
