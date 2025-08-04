import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../farmerMotion/variants";

const projects = [
  {
    name: "ChatGram",
    year: "mar2020",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "https://github.com/mohammadrashid6732/chatgram",
  },
  {
    name: "CarShop",
    year: "mar2025",
    align: "left",
    image: "../../../public/images/website-img-2.webp",
    link: "https://github.com/mohammadrashid6732/BotoCar",
  },
  {
    name: "Divar",
    year: "mar2022",
    align: "right",
    image: "../../../public/images/website-img-3.jpg",
    link: "https://github.com/mohammadrashid6732/rjs-divar-files",
  },
  {
    name: "Crypto App",
    year: "mar2022",
    align: "left",
    image: "../../../public/images/website-img-1.jpg",
    link: "https://github.com/mohammadrashid6732/rjs-crypto-app-files",
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
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
