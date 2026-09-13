import React from "react";
import Section from "./Section";
import { coreSkills, skillGroups, certificates } from "../data/portfolio";

const Skills = () => {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Certifications">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="mb-5 font-titleFont text-lg font-semibold text-white">
            Languages
          </h3>
          <div className="flex flex-col gap-5">
            {coreSkills.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-zinc-300">{s.name}</span>
                  <span className="text-zinc-500">{s.level}%</span>
                </div>
                <span
                  role="progressbar"
                  aria-label={`${s.name} proficiency`}
                  aria-valuenow={s.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="block h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                >
                  <span
                    style={{ width: `${s.level}%` }}
                    className="block h-full rounded-full bg-designColor"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-3 font-titleFont text-sm font-semibold uppercase tracking-wide text-white">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((sk) => (
                    <span
                      key={sk}
                      className="chip hover:border-designColor/50 hover:text-designColor"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="mb-6 mt-14 font-titleFont text-lg font-semibold text-white">
        Certifications
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c) => (
          <div key={c.title} className="card group overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="font-titleFont text-sm font-semibold text-white">
                {c.title}
              </h4>
              <p className="text-xs text-zinc-500">{c.category}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
