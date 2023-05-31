import Image from "next/image";

const Projects = (props) => {
  return (
    <div
      className={
        " w-full flex flex-col items-center py-[50px] lg:py-[126px] px-5 lg:px-[80px] " +
        props.whitebg
      }
      id="work"
    >
      <p
        className={
          " text-[50px] lg:text-[72px] font-fraunces text-center " + props.text
        }
      >
        The UX Adventures
      </p>
      <p
        className={
          " lg:w-[816px] text-center text-black uppercase text-base  lg:text-[24px] leading-[35px] " +
          props.text
        }
      >
        explore a selection of projects showcasing my UX design process and
        problem-solving skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-[95px] gap-[32px]">
        <a className="w-full  relative" href="https://www.behance.net/gallery/158325193/Adeline-Cake-Ordering-System-UX-Case-Study" target="_blank"> 
          <Image src="/adeline.png" width={660} height={560} className="absolute hover:opacity-0 duration-700" />
          <Image src="/adelinetwo.png" width={660} height={560} className=" " />
          <p
            className={
              "font-fraunces text-sm  my-2 md:text-3xl lg:text-[14px] text-black " +
              props.text
            }
          >
            Mobile app . Desktop . Food& Drink
          </p>
          <p
            className={
              "font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black " +
              props.text
            }
          >
            Adeline
          </p>
          <p
            className={
              "font-source  text-sm  lg:text-[18px] text-ash uppercase leading-[30px] " +
              props.text
            }
          >
            Connecting pastry lovers with cake vendors for personalized and
            scheduled pastry orders
          </p>
        </a>
        <a className="w-full  relative" href="https://www.behance.net/gallery/151328429/Fitness-App-Case-Study" target="_blank">
        <Image src="/train.png" width={660} height={560} className="absolute hover:opacity-0 duration-700" />
          <Image src="/traintwo.png" width={660} height={560} className=" " />
          <p
            className={
              "font-fraunces text-sm  my-2 md:text-3xl lg:text-[14px] text-black " +
              props.text
            }
          >
            Mobile app . Desktop . Health & Fitness
          </p>
          <p
            className={
              "font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black " +
              props.text
            }
          >
            TrainHer
          </p>
          <p
            className={
              "font-source  text-sm leading-[30px]  lg:text-[18px] text-ash uppercase  " +
              props.text
            }
          >
            A comprehensive fitness app offering workout guidance, diet plans,
            progress tracking, and access to dietitians/fitness coaches{" "}
          </p>
        </a>
        <a className="w-full  relative" href="https://www.behance.net/gallery/160133797/Website-UX-Audit" target="_blank">
        <Image src="/ybs.png" width={660} height={560} className="absolute hover:opacity-0 duration-700" />
          <Image src="/ybstwo.png" width={660} height={560} className=" " />
          <p
            className={
              "font-fraunces text-sm  my-2 md:text-3xl lg:text-[14px] text-black " +
              props.text
            }
          >
            Website . Mobile responsive . Non-profit
          </p>
          <p
            className={
              "font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black " +
              props.text
            }
          >
            YBS Kids
          </p>
          <p
            className={
              "font-source  text-sm leading-[30px]  lg:text-[18px] text-ash uppercase " +
              props.text
            }
          >
            Enhancing user experience and increasing conversions through
            data-driven recommendations and usability improvements{" "}
          </p>
        </a>
        <div className="w-full  relative">
          <Image src="/recruit.png" width={660} height={560} />
          <p
            className={
              "font-fraunces text-sm  my-2 md:text-3xl lg:text-[14px] text-black " +
              props.text
            }
          >
            Website . Mobile responsive . Recruitment
          </p>
          <p
            className={
              "font-fraunces text-2xl  my-2 md:text-3xl lg:text-[40px] text-black " +
              props.text
            }
          >
            RecuiterBae
          </p>
          <p
            className={
              "font-source  text-sm leading-[30px]  lg:text-[18px] text-ash uppercase " +
              props.text
            }
          >
            Empowering job seekers through a redesigned website, coaching, and
            career development resources for enhanced career success{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
