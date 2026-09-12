import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";

import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const SECTIONS = [
  { key: "about", label: "About", Icon: FaUser },
  { key: "resume", label: "Resume", Icon: IoIosPaper },
  { key: "projects", label: "Projects", Icon: MdWork },
  { key: "contact", label: "Contact", Icon: FaEnvelope },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  const isActive = (key) => key === activeSection;

  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
      {/* ================= Left Icons ======================== */}
      <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">
        <div className="w-full h-80 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
          {SECTIONS.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key)}
              aria-label={label}
              aria-pressed={isActive(key)}
              className={`w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group ${
                isActive(key) ? "text-designColor" : "text-textColor"
              }`}
            >
              <Icon />
              <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* ================= Left Icons End ===================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left ============================ */}
        <Left />
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
          {/* ======================== Smaller device content End ==================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {SECTIONS.map(({ key }) =>
              isActive(key) ? (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {key === "about" && <About />}
                  {key === "resume" && <Resume />}
                  {key === "projects" && <Projects />}
                  {key === "contact" && <Contact />}
                </motion.div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;