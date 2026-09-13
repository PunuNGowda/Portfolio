import React from "react";

const Section = ({ id, eyebrow, title, description, children }) => {
  return (
    <section id={id} className="border-t border-white/5 py-20 sm:py-24">
      <div className="container-x">
        <div className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="font-titleFont text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-3 text-zinc-400">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
