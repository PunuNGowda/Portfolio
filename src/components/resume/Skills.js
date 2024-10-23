import React from "react";

import { FaCertificate } from "react-icons/fa";

import SkillsCard from "./SkillsCard";
import ResumeTitle from "./ResumeTitle";
import main from "../../assets/certificate/NPTEL CERTIFICATE.png"
import workImgTwo from "../../assets/certificate/Internship certidicate.png"

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
       
        {/* web Design */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Java - Intermediate</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* web Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Python - Intermediate</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">PowerBI - Intermediate</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MySQL - Intermediate</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Certification" icon={<FaCertificate />} />
        {/* English */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <SkillsCard
            title="NPTEL CERTIFICATE"
            category=""
            image={main}
          />
          {/* <SkillsCard
            title="Vrinda Store Data Analysis"
            category="Data Analytics using Excel"
            image={workImgOne}
            link="https://github.com/PunuNGowda/Vrinda-Store"
          /> */}
          {/* <SkillsCard
            title="Madhav Store"
            category="Data Analytics using PowerBI"
            image={workImgTwo}
            link="https://github.com/PunuNGowda/Madhav-Store-Sales"
          /> */}
          {/* <SkillsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
          <SkillsCard
            title="Internship Certificate"
            category="Edunet Foundation"
            image={workImgTwo}
            
          />
          {/* <SkillsCard
            title="HR Analytics"
            category="Data Analytics using PowerBI"
            image={workImgThree}
            link="https://github.com/PunuNGowda/HR-Analytics"
          /> */}
          {/* <SkillsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          /> */}
          {/* <SkillsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          /> */}
        </div>
      </div>
      </div>
      {/* =============== Design and Languages End here ===================== */}
      {/* =============== Coading and Knowledge Start here ==================== */}
      {/* =============== Coading and Knowledge End here ==================== */}

      
     
      
      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
