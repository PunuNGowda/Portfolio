import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";
import { featuredProjects, analyticsProjects } from "../data/portfolio";

const FeaturedCard = ({ p }) => {
  return (
    <article className="card flex flex-col p-6 transition-colors duration-300 hover:border-designColor/40">
      <span className="eyebrow text-[10px]">{p.tag}</span>
      <h3 className="mt-2 font-titleFont text-xl font-semibold text-white">
        {p.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-designColor hover:underline"
        >
          View Project
          <FiArrowUpRight />
        </a>
      )}
    </article>
  );
};

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Full-stack systems I built end-to-end, plus data analytics dashboards."
    >
      <div className="grid gap-5 md:grid-cols-2 lgl:grid-cols-3">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.title} p={p} />
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-titleFont text-lg font-semibold text-white">
        Data Analytics
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {analyticsProjects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open project: ${p.title}`}
            className="card group overflow-hidden transition-colors duration-300 hover:border-designColor/40"
          >
            <div className="aspect-[16/10] overflow-hidden bg-white/5">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-2 p-4">
              <div>
                <h4 className="font-titleFont text-sm font-semibold text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-500">{p.category}</p>
              </div>
              <FiArrowUpRight className="shrink-0 text-zinc-500 transition-colors group-hover:text-designColor" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;