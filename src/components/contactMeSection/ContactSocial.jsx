import SingleCotactSocial from "./SingleCotactSocial";
import { FiGithub} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleCotactSocial link="#" Icon={FaLinkedin} />
      <SingleCotactSocial link="#" Icon={FiGithub} />
      <SingleCotactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
