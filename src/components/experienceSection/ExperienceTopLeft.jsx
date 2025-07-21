import ExperienceInfo from "./ExperienceInfo";
const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center ">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p>-</p>
        <ExperienceInfo number="23" text="Website" />
      </div>
      <p className="text-center text-white">
        With 3 years of experience building dynamic and user-friendly web
        application
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
