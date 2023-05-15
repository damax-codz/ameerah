const Footer = (props) => {
  return (
    <div className={"w-full min-h-screen  flex flex-col items-center justify-center " + props.bg }>
      <p className={"font-fraunces text-brown text-[80px] text-center lg:text-[200px] font-normal " + props.textcolored }>
        Let’s Connect
      </p>
      <p className={"font-source text-brown  lg:text-[24px] px-10  lg:w-[800px] text-center text-base " + props.textcolored }>
        I am open to UX Design roles and freelance gigs. click on the button
        below to reach me
      </p>
      <button className="font-source text-md lg:text-[24px] text-brown cursor-pointer border-[1px] mt-5 border-r-brown rounded-[50px] py-[16px] px-[32px] ">
        SEND A MAIL
      </button>
    </div>
  );
};

export default Footer;
