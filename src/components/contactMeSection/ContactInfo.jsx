import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="mohammadrashid6732@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+989388857024" Image={FiPhone} />
      <SingleInfo text="tehran,Iran" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
