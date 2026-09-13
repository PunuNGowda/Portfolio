import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <a href="#top" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-designColor">
          <FiArrowUp />
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;