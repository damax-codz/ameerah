import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-pink w-full lg:pb-0 min-h-screen">
      <nav className="w-full flex justify-between items-center px-5 lg:px-[80px] pt-5">
        <Image src="/logo.png" width={80} height={80} />
        <Image src="/menu.png" width={40} height={40} className="flex min-[1150px]:hidden cursor-pointer" />
        <div className=" w-2/4 justify-between items-center hidden min-[1150px]:flex">
          <p className="font-source text-[24px] text-brown cursor-pointer ">
            WORK
          </p>
          <p className="font-source text-[24px] text-brown cursor-pointer">
            RESUME
          </p>
          <p className="font-source text-[24px] text-brown cursor-pointer">
            ABOUT ME
          </p>
          <button className="font-source text-[24px] text-brown cursor-pointer border-[1px] border-r-brown rounded-[50px] py-[16px] px-[32px] ">
            LET'S CHAT
          </button>
        </div>
      </nav>

      <div className="w-full flex flex-col items-center justify-center mt-10 min-h-[70vh]">
        <p className="font-fraunces text-brown text-[100px] lg:text-[200px] font-normal ">
          Amirah
        </p>
        <p className="font-source text-brown  lg:text-[24px] px-10  lg:w-[800px] text-center text-base ">
          IS A UX DESIGNER WHO BELIEVES Good design is more than just
          aesthetics. It's about crafting meaningful experiences that drive
          results.
        </p>
        <button className="font-source text-md lg:text-[24px] text-brown cursor-pointer border-[1px] mt-5 border-r-brown rounded-[50px] py-[16px] px-[32px] ">
          SEND A MAIL
        </button>
      </div>
    </div>
  );
};

export default Home;
