import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";
import CV from "../assets/Punu_N_Gowda_Resume.pdf";
import photo from "../assets/IMG_5652.jpg";

const socialIcon = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  Twitter: <FaTwitter />,
};

const Hero = () => {
  const [text] = useTypewriter({
    words: profile.roles,
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 22,
    delaySpeed: 1800,
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-designColor/10 blur-[130px]" />
      <div className="container-x relative z-10 flex min-h-screen flex-col-reverse items-center justify-center gap-12 py-28 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <span className="chip mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-designColor" />
            {profile.status}
          </span>
          <h1 className="font-titleFont text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg text-zinc-300 sm:text-xl">
            {text}
            <Cursor cursorStyle="|" cursorBlinking={false} />
          </p>
          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="#projects" className="btn-primary">
              View Work
              <FiArrowDownRight />
            </a>
            <a href={CV} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiDownload />
              Download CV
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-designColor/60 hover:text-designColor"
              >
                {socialIcon[s.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-designColor/20 blur-3xl" />
          <img
            src={photo}
            alt="Portrait of Punu N Gowda"
            loading="eager"
            className="h-64 w-64 rounded-[2rem] border border-white/10 object-cover shadow-soft sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
