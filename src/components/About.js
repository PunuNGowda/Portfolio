import React from "react";
import Section from "./Section";
import { profile } from "../data/portfolio";

const info = [
  { label: "Name", value: profile.name },
  { label: "Role", value: profile.role },
  { label: "Company", value: profile.company },
  { label: "Location", value: profile.location },
  { label: "Status", value: profile.status, highlight: true },
];

const About = () => {
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-3">
          <p className="leading-7 text-zinc-300">{profile.summary}</p>
          <p className="leading-7 text-zinc-400">{profile.summary2}</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {profile.stats.map((s) => (
              <div key={s.label} className="card px-4 py-5 text-center">
                <div className="font-titleFont text-2xl font-bold text-designColor">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card overflow-hidden">
            {info.map((it) => (
              <div
                key={it.label}
                className="flex items-center justify-between gap-4 border-b border-white/5 px-5 py-3.5 last:border-0"
              >
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  {it.label}
                </span>
                <span
                  className={`text-right text-sm font-medium ${
                    it.highlight ? "text-designColor" : "text-zinc-200"
                  }`}
                >
                  {it.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
