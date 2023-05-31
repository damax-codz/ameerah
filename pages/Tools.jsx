import Image from "next/image";

const Tools = (props) => {
  return (
    <>
      <div
        className={
          " w-full flex flex-col items-center py-[126px] px-5 lg:px-[80px] " +
          props.whitebg
        }
      >
        <p
          className={
            " text-[50px] lg:text-[72px] font-fraunces text-center " +
            props.text
          }
        >
          Design Arsenal
        </p>
        <p
          className={
            " lg:w-[816px] text-center text-black uppercase text-base  lg:text-[24px] leading-[35px] " +
            props.text
          }
        >
          Get a glimpse into the software and tools I rely on to create stunning
          designs and seamless user experiences.
        </p>
        <div className=" grid gap-10 grid-cols-2  md:grid-cols-3 lg:w-[980px] lg:flex justify-between mt-20">
          <div className="flex flex-col items-center">
            <Image src="/figma.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/adobe.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Adobe XD</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/canva.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Canva</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/smiley.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Balsamiq</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/mira.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Miro</p>
          </div>
        </div>

        <div className=" grid gap-10 md:grid-cols-3 grid-cols-2 lg:w-[540px] lg:flex justify-between mt-20">
          <div className="flex flex-col items-center">
            <Image src="/hotjar.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Hotjar</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/notion.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Notion</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/trello.png" width={100} height={100} />
            <p className="font-source text-[18px] text-black ">Trello</p>
          </div>
        </div>
      </div>

      <div
        className={
          " w-full flex flex-col items-center lg:pt-[126px] px-5 lg:px-[80px] pb-[126px] " +
          props.whitebg
        }
      >
        <p
          className={
            " text-[50px] lg:text-[72px] font-fraunces text-center " +
            props.text
          }
        >
          Designing with Purpose
        </p>
        <p
          className={
            " lg:w-[816px] text-center text-black uppercase text-base  lg:text-[24px] leading-[35px] " +
            props.text
          }
        >
          Follow my step-by-step process for creating innovative solutions that
          meet user needs and exceed business goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[95px] gap-x-[32px] gap-y-[90px]">
          <div className="w-full  relative">
            <p className={"font-source text-[24px] text-black " + props.text}>
              01/ discovery
            </p>
            <p className={"font-source text-[18px] text-ash leading-[30px] " + props.text}>
              Let's embark on a journey of understanding as we explore your
              business, users, and goals. We identify business problems,
              objectives, and what distinguishes your brand. We also research
              the market, analyze competition, and identify user needs and pain
              points.
            </p>
          </div>
          <div className="w-full  relative">
            <p className={"font-source text-[24px] text-black " + props.text}>
              02/ strategy
            </p>
            <p className={"font-source text-[18px] text-ash leading-[30px] " + props.text}>
              Armed with insights from the discovery phase, we define a clear
              strategy for achieving the project goals. Then, we work on
              establishing appropriate goals, determining product features, and
              estimating the scope of work that will have the greatest business
              impact.
            </p>
          </div>
          <div className="w-full  relative">
            <p className={"font-source text-[24px] text-black " + props.text}>
              03/ design
            </p>
            <p className={"font-source text-[18px] text-ash leading-[30px] " + props.text}>
              With the strategy locked in place, we bring your ideas to life
              with a creative design process. We create the most engaging, and
              functional experience for users by leveraging research data and
              project objectives, allowing them to achieve their goals.
            </p>
          </div>

          <div className="w-full  relative">
            <p className={"font-source text-[24px] text-black " + props.text}>
              04/ test & iterate
            </p>
            <p className={"font-source text-[18px] text-ash leading-[30px] " + props.text}>
              Testing is an integral part of the design process, and we'll work
              together to test the product thoroughly. We use feedback from
              testing to iterate on designs and refine the user experience until
              it meets the needs of your users and achieves your business goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
