const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        My name is Mohammad, a web developer focused on building modern,
        responsive, and user-friendly applications. With a strong foundation in
        JavaScript and front-end frameworks like React, I create efficient and
        scalable solutions. I value clean code, intuitive design, and continuous
        learning in every project I take on. I’m open to new challenges and
        collaborations that drive meaningful digital impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-=500 cursor-pointer md:self-start text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
