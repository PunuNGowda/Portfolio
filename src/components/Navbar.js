import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolio";
import CV from "../assets/Punu_N_Gowda_Resume.pdf";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const pos = window.scrollY + 140;
      let current = "about";
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-titleFont text-lg font-bold text-white">
          {profile.name.split(" ")[0]}
          <span className="text-designColor">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-sm transition-colors duration-200 ${
                active === l.id ? "text-designColor" : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-2xl text-zinc-200 md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-white/10 bg-ink/95 backdrop-blur md:hidden">
          <div className="container-x flex flex-col py-4">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-zinc-300 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 justify-center"
            >
              Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
