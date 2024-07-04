import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="InternShip" icon={<MdWork />} />
        <ResumeCard
          badge="Nov 2023 - Dec 2024"
          title="Cloud Intern"
          subTitle="Edunet Foundation - IBM"
          des="I have worked on the project based on Data Analytics where I 
          did the analysis of the iPhone Sales to find which I phone model was sold out more during a period of time"
        />
        
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge=""
          title="Master of Computer Application"
          subTitle="Acharya Institute Of Technology, Bengaluru"
          des=""
        />
        <ResumeCard
          badge="2019 - 2022"
          title="B.Sc PMCs"
          subTitle="Government Science College, Hassan"
          des=""
        />
        
      </div>
    </div>
  );
};

export default Education;
