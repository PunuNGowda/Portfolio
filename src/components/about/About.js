import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const infoItems = [
  { label: "Name",     value: "Punu N Gowda" },
  { label: "Role",     value: "Full Stack Developer" },
  { label: "Company",  value: "Tata Consultancy Services" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Status",   value: "Open to Opportunities", highlight: true },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-8 px-6 py-8"
    >
      {/* ── Header ── */}
      <motion.div variants={itemVariants}>
        <p className="text-xs uppercase tracking-[0.15em] text-designColor mb-2 font-medium">
          Who I Am
        </p>
        <h2 className="text-3xl lgl:text-4xl font-bold text-white font-titleFont leading-tight">
          About <span className="text-designColor">Me</span>
        </h2>
      </motion.div>

      {/* ── Bio ── */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <p className="text-zinc-400 text-sm lgl:text-base leading-7">
          I'm a <span className="text-white font-medium">Full Stack Developer at TCS</span> with
          one year of professional experience across healthcare and enterprise integration
          domains. I build backend services in <span className="text-white font-medium">Java and Spring Boot</span> and
          craft responsive frontends with <span className="text-white font-medium">React</span>.
        </p>
        <p className="text-zinc-400 text-sm lgl:text-base leading-7">
          I've engineered a production full-stack algorithmic trading system and an offline
          AI Code Analyser web platform, and I regularly work with AI-assisted development
          tools like Claude, GitHub Copilot, and Cursor. Great software starts with curiosity
          and ends with impact.
        </p>
      </motion.div>

      {/* ── Info card ── */}
      <motion.div variants={itemVariants} className="w-full border border-zinc-800 rounded-2xl overflow-hidden">
        {infoItems.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-5 py-3 border-b border-zinc-800 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-200"
          >
            <span className="text-zinc-500 text-xs uppercase tracking-widest">{item.label}</span>
            <span
              className={`text-sm font-medium ${
                item.highlight ? "text-designColor" : "text-zinc-200"
              }`}
            >
              {item.highlight && <span className="mr-1">●</span>}
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── Stats ── */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
        {[
          { num: "1+",   label: "Year Experience" },
          { num: "10+",  label: "Projects Built" },
          { num: "20+",  label: "Technologies" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-zinc-800 rounded-xl py-4 px-3 text-center hover:border-designColor/40 transition-colors duration-300"
          >
            <div className="text-designColor text-2xl font-bold font-titleFont">{s.num}</div>
            <div className="text-zinc-500 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── Socials ── */}
      <motion.div variants={itemVariants} className="flex gap-3">
        {[
          { icon: <FaGithub />,    href: "https://github.com/PunuNGowda",        label: "GitHub" },
          { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/punungowda",  label: "LinkedIn" },
          { icon: <FaTwitter />,   href: "https://twitter.com/punungowda",       label: "Twitter" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-xl bg-[#111111] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-designColor hover:border-designColor/50 transition-all duration-300 hover:-translate-y-1"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;