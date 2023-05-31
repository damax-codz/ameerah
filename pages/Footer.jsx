import Image from "next/image";

const Footer = (props) => {
  return (
    <div
      className={
        "w-full min-h-screen  flex flex-col items-center justify-center " +
        props.bg
      }
    >
      <p
        className={
          "font-fraunces text-brown text-[80px] text-center lg:text-[200px] font-normal " +
          props.textcolored
        }
      >
        Let’s Connect
      </p>
      <p
        className={
          "font-source text-brown  lg:text-[24px] px-10  lg:w-[859px] text-center text-base leading-[35px] " +
          props.textcolored
        }
      >
        I AM OPEN TO UX DESIGN ROLES AND FREELANCE GIGS. CLICK ON THE BUTTON
        BELOW TO REACH ME
      </p>
      <button
        className={
          "font-source text-md lg:text-[24px] text-brown cursor-pointer border-[1px] mt-5  rounded-[50px] py-[16px] px-[32px] " +
          props.border +
          " " +
          props.textcolored
        }
      >
        SEND A MAIL
      </button>

      <div className="flex justify-between items-center w-full mt-[90px] px-5 lg:px-[80px]">
        <span className="flex flex-col items-start">
          <p className="font-fraunces  text-brown text-[14px] text-center font-light">
            © 2023
          </p>
          <a
            href="https://damax.netlify.app"
            target="_blank"
            className="font-fraunces text-brown text-[14px] text-center font-light"
          >
            DEV BY DAMILOLA
          </a>
        </span>
        <span className="gap-[40px] flex">
          <a
            className="font-fraunces text-brown text-[14px] text-center font-light"
            href="https://www.linkedin.com/in/amirahoyegoke/"
            target="_blank"
          >
            LINKEDIN
          </a>
          <a
            className="font-fraunces text-brown text-[14px] text-center font-light"
            href="https://twitter.com/meerah_temitope"
            target="_blank"
          >
            TWITTER
          </a>
        </span>
        <span className="flex items-center gap-[8px]"   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <p className="font-fraunces text-brown text-[14px] text-center font-light">
            BACK TO TOP
          </p>
          <Image src="/top.png" width={24} height={24} alt="top" /> 
        </span>
      </div>
    </div>
  );
};

export default Footer;
