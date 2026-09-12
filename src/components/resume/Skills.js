import React from "react";
import { FaCertificate } from "react-icons/fa";
import SkillsCard from "./SkillsCard";
import ResumeTitle from "./ResumeTitle";
import nptel from "../../assets/certificate/NPTEL CERTIFICATE.png"
import internship from "../../assets/certificate/Internship certidicate.png"

const CORE_SKILLS = [
  { name: "Java",   level: 78 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 72 },
  { name: "SQL",    level: 80 },
];

const SKILL_GROUPS = [
  { title: "Frontend",  skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Recharts"] },
  { title: "Backend",   skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "Microservices", "Node.js", "FastAPI"] },
  { title: "Databases", skills: ["MySQL", "Redis", "TimescaleDB", "H2 Database"] },
  { title: "DevOps & Tools", skills: ["Git", "Maven", "CI/CD", "Linux", "Agile/Scrum", "Postman"] },
  { title: "Integration", skills: ["SAP CDC", "MuleSoft", "ServiceNow"] },
  { title: "AI/ML Exposure", skills: ["LLM APIs", "RAG Pipelines", "Prompt Engineering", "Embeddings"] },
];

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Languages Start =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" />
        {CORE_SKILLS.map((skill) => (
          <div key={skill.name} className="py-3">
            <p className="text-base text-textColor -mb-1.5">{skill.name}</p>
            <span
              role="progressbar"
              aria-label={`${skill.name} proficiency`}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              className="w-full bg-zinc-600 h-1 inline-flex relative"
            >
              <span
                style={{ width: `${skill.level}%` }}
                className="h-full absolute top-0 left-0 bg-designColor"
              ></span>
            </span>
          </div>
        ))}
      </div>
      {/* =============== Languages End ===================== */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      {/* =============== Toolchain Start ===================== */}
      <div className="col-span-9 md:col-span-4">
        <div className="flex flex-col gap-5">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-base text-textColor font-medium mb-2">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-zinc-800 bg-[#111111] text-sm text-zinc-300 hover:border-designColor/50 hover:text-designColor transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* =============== Toolchain End ===================== */}
      <div className="col-span-9 mt-8">
        <ResumeTitle title="Certification" icon={<FaCertificate />} />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 lgl:gap-6 mt-4">
          <div className="px-6">
            <SkillsCard
              title="NPTEL Certificate"
              category="NPTEL"
              image={nptel}
            />
          </div>
          <div className="px-6">
            <SkillsCard
              title="Internship Certificate"
              category="Edunet Foundation"
              image={internship}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;