import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yllgup4", "template_uqavpgo", form.current, {
        publicKey: "iAoarfUiuYq1fDXJ0",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="form-name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightbrown px-2 "
          value={name}
          onChange={handleName}
        />
        <input
          name="form-email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightbrown px-2 "
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-lightbrown p-2 "
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          className="w-full rounded-lg border border-cyan  text-white h-12 font-bold text-xl hover:bg-darkcyan bg-cyan transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
