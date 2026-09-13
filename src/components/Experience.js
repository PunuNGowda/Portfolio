import React from "react";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import Section from "./Section";
import { experience, education } from "../data/portfolio";

const Experience = () => {
  return (
    <Section id="experience" eyebrow="Background" title="Experience & Education">
      <div className="relative border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((e) => (
          <div key={e.role} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[38px] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-surface text-designColor sm:-left-[46px]">
              <MdWork className="text-sm" />
            </span>
            <div className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-titleFont text-lg font-semibold text-white">
                  {e.role}
                </h3>
                <span className="chip">{e.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-designColor">{e.org}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-6 mt-14 flex items-center gap-2 font-titleFont text-xl font-semibold text-white">
        <GiGraduateCap className="text-designColor" />
        Education
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((ed) => (
          <div key={ed.degree} className="card p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-titleFont text-base font-semibold text-white">
                {ed.degree}
              </h4>
              <span className="chip">{ed.period}</span>
            </div>
            <p className="mt-1 text-sm text-zinc-400">{ed.org}</p>
            {ed.note && (
              <p className="mt-2 text-sm font-medium text-designColor">{ed.note}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
