import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Jun 2025 - Jul 2026"
          title="Software Engineer"
          subTitle="Tata Consultancy Services (TCS)"
          des="Full Stack Developer on OneCIAM, a healthcare identity and integration platform — Java, Spring Boot, SAP CDC, MuleSoft, Redis and REST APIs for secure healthcare identity data exchange."
        />
        <ResumeCard
          badge="May 2025 - Jun 2025"
          title="Data Quality Analyst"
          subTitle="Anakin Technologies"
          des="Validated data across 4 client platforms (Uber, Foodpanda, Blacklane, Pincode) and monitored hourly data updates to keep error rates low."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2022 - 2024"
          title="Master of Computer Applications (MCA)"
          subTitle="Acharya Institute Of Technology, Bengaluru"
          des="GPA: 9.4/10"
        />
        <ResumeCard
          badge="2019 - 2022"
          title="BSc in Computer Science"
          subTitle="Government Science College, Bengaluru"
          des=""
        />
      </div>
    </div>
  );
};

export default Education;