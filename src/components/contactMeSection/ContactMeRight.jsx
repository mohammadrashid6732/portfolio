import emailImage from "../../../public/images/email-image.png";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col item-center justify-center gap-12">
      <img src={emailImage} alt="email Image" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
