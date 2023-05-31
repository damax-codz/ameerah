import Image from "next/image";
import { useRef, useState } from "react";
import Projects from "./Projects";
import Tools from "./Tools";
import Footer from "./Footer";

const Home = () => {
  const nav = useRef();
  const [theme, setTheme] = useState(true);

  const bg = theme ? "bg-pink" : "bg-brown";
  const navbg = theme ? "bg-brown" : "bg-pink";
  const navtextcolored = theme ? "text-pink" : "text-brown";
  const textcolored = theme ? "text-brown" : "text-pink";
  const border = theme ? "border-brown" : "border-pink";
  const navborder = theme ? "border-pink" : "border-brown";
  const whitebg = theme ? "bg-white" : "bg-bbg";
  const text = theme ? "text-black" : "text-white";

  const openNav = () => {
    nav.current.style.width = "400px";
    nav.current.style.height = "400px";
  };
  const closeNav = () => {
    nav.current.style.width = "0px";
    nav.current.style.height = "0px";
  };

  return (
    <>
      <div className={bg + " w-full lg:pb-0 min-h-screen"}>
        <nav className="w-full flex justify-between items-center px-5 lg:px-[80px] pt-5">
          <Image src={theme ? "/logodark.png" : "/logolight.png"} width={80} height={80} alt="logo" />
          <div onClick={() => openNav()}>
            <Image
              src={theme ? "/menu.png" : "/menupink.png"}
              width={50}
              height={50}
              className="flex min-[1150px]:hidden cursor-pointer hover:bg-ashh rounded-[50%] p-2 duration-300 "
              alt="menu"
            />
          </div>
          <div
            className={
              "w-[0px] h-[0px]  absolute right-0 top-0 clip duration-300 flex flex-col items-end " +
              navbg
            }
            ref={nav}
          >
            <Image
              src={theme ? "/close.png" : "/closebrown.png"}
              width={40}
              height={40}
              className="hover:bg-ashh rounded-[50%] p-2 duration-300 cursor-pointer"
              onClick={() => closeNav()}
            />

            <div className="flex flex-col items-center">
              <a
                className={
                  "font-source text-xl py-3 mr-2 cursor-pointer " +
                  navtextcolored
                }
                href="#work"
                onClick={() => closeNav()}
              >
                WORK
              </a>
              <a
                className={
                  "font-source text-xl py-3 mr-2 cursor-pointer " +
                  navtextcolored
                }
              >
                RESUME
              </a>
              <a
                className={
                  "font-source text-xl py-3 mr-2 cursor-pointer " +
                  navtextcolored
                }
              >
                ABOUT ME
              </a>
              <button
                className={
                  "font-source text-xl mr-4  cursor-pointer border-[1px]  rounded-[50px] py-[16px] px-[32px] " +
                  navtextcolored +
                  " " +
                  navborder
                }
              >
                LET'S CHAT
              </button>
              <Image
                src={theme ? "/dark.png" : "/light.png"}
                width={40}
                height={40}
                className="cursor-pointer"
                onClick={() => {
                  setTheme(!theme);
                  closeNav();
                }}
              />
            </div>
          </div>

          <div className=" w-2/4 justify-between items-center hidden min-[1150px]:flex">
            <a
              className={
                "font-source text-[24px] py-3 mr-2 cursor-pointer  " +
                textcolored
              }
              href="#work"
            >
              WORK
            </a>
            <p
              className={
                "font-source text-[24px] py-3 mr-2 cursor-pointer " +
                textcolored
              }
            >
              RESUME
            </p>
            <a
              className={
                "font-source text-[24px] py-3 mr-2 cursor-pointer " +
                textcolored
              }
            >
              ABOUT ME
            </a>
            <button
              className={
                "font-source text-[24px]  cursor-pointer border-[1px]  rounded-[50px] py-[16px] px-[32px] " +
                textcolored +
                " " +
                border
              }
            >
              LET'S CHAT
            </button>

            <Image
              src={theme ? "/dark.png" : "/light.png"}
              width={40}
              height={40}
              className="cursor-pointer"
              onClick={() => setTheme(!theme)}
            />
          </div>
        </nav>

        <div className="w-full flex flex-col items-center justify-center mt-10 min-h-[70vh]">
          <p
            className={
              "font-fraunces  text-[100px] lg:text-[200px] font-light " +
              textcolored
            }
          >
            Amirah
          </p>
          <p
            className={
              "font-source  lg:text-[24px] px-10  lg:w-[1015px] text-center text-base  " +
              textcolored
            }
          >
            IS A UX DESIGNER WHO BELIEVES GOOD DESIGN IS MORE THAN JUST
            AESTHETICS. IT'S ABOUT CRAFTING MEANINFUL EXPERIENCES THAT DRIVE
            RESULTS.  
          </p>
          <button
            className={
              "font-source text-[24px]  cursor-pointer border-[1px]  rounded-[50px] py-[16px] px-[32px] mt-5 " +
              textcolored +
              " " +
              border
            }
          >
            SEND A MAIL
          </button>
        </div>
      </div>
      <Projects
        bg={bg}
        textcolored={textcolored}
        border={border}
        whitebg={whitebg}
        text={text}
      />
      <Tools
        bg={bg}
        textcolored={textcolored}
        border={border}
        whitebg={whitebg}
        text={text}
      />
      <Footer
        bg={bg}
        textcolored={textcolored}
        border={border}
        whitebg={whitebg}
        text={text}
      />
    </>
  );
};

export default Home;
