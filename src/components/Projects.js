import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "./Section";
import { featuredProjects } from "../data/portfolio";

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
      description="Full-stack systems I built end-to-end."
    >
      <div className="grid gap-5 md:grid-cols-2 lgl:grid-cols-3">
        {featuredProjects.map((p) => (
          <FeaturedCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;