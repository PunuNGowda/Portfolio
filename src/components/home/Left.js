import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import { FiMail} from "react-icons/fi";
import CV from "../../assets/Punu_N_Gowda.pdf";

import myPic from "../../assets/IMG_5652.jpg";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer","Data Analyst"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={myPic}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Punu N Gowda</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
            <a
              href="https://github.com/PunuNGowda"
              target="_blank"
               rel="noreferrer"
                className="hover:text-designColor duration-300 cursor-pointer text-xl"
             >
              <FaGithub />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
            <a
            href="https://linkedin.com/in/punungowda"
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FaLinkedin />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
            <a
            href="mailto:punungowda6@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor duration-300 cursor-pointer text-xl"
            >
              <FiMail />
              </a>
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-full border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase   hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              RESUME <BsCloudLightningFill />
            </button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Left;
