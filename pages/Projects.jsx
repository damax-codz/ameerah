import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center my-[50px] lg:my-[126px] px-5 lg:px-[80px]">
      <p className=" text-[50px] lg:text-[72px] font-fraunces text-center ">
        The UX Adventures
      </p>
      <p className=" lg:w-[816px] text-center text-black uppercase text-base  lg:text-[24px] ">
        explore a selection of projects showcasing my UX design process and
        problem-solving skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-[95px] gap-[32px]">
        <div className="w-full  relative">
          <Image src="/shake.png" width={660} height={560} />
          <p className="font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black ">
            RecruiterBae
          </p>
          <p className="font-source  text-xl leading-10  lg:text-[24px] text-ash uppercase">
            improving job seeker’s experience
          </p>
        </div>
        <div className="w-full  relative">
          <Image src="/cake.png" width={660} height={560} />
          <p className="font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black ">
            Adeline
          </p>
          <p className="font-source  text-xl leading-10  lg:text-[24px] text-ash uppercase">
            a cake scheduling/ ordering system
          </p>
        </div>
        <div className="w-full  relative">
          <Image src="/cake.png" width={660} height={560} />
          <p className="font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black ">
            YBS Kids
          </p>
          <p className="font-source  text-xl leading-10  lg:text-[24px] text-ash uppercase">
            INCREASING NON-PROFIT WEBSITE CONVERSIONS USING UX AUDIT
          </p>
        </div>
        <div className="w-full  relative">
          <Image src="/cake.png" width={660} height={560} />
          <p className="font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black ">
            TrainHer
          </p>
          <p className="font-source  text-xl leading-10  lg:text-[24px] text-ash uppercase">
            A FITNESS APP THAT HELPS USERS MEET THEIR FITNESS GOAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;