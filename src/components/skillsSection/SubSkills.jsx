import subSkill from "../../../public/images/subSkills.jpg";

const SubSkills = () => {
  return (
    <div className="border-y-2 border-lightgrey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img src={subSkill} alt="Sub Skill Img" />
    </div>
  );
};

export default SubSkills;
