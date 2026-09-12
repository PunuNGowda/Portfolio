import React from "react";

const ProjectsCard = ({ image, images, title, category, link, description, techStack }) => {
  const list = images || (image ? [image] : []);

  if (list.length === 0) {
    return (
      <div className="w-full border border-zinc-800 rounded-2xl overflow-hidden bg-[#111111] hover:border-designColor/40 transition-colors duration-300">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Open project: ${title}`}
        >
          <div className="w-full h-28 flex flex-col justify-center items-center bg-gradient-to-t from-designColor/15 to-transparent border-b border-zinc-800">
            <h3 className="font-titleFont text-2xl font-bold text-designColor">
              {title.charAt(0)}
            </h3>
          </div>
        </a>
        <div className="p-5 flex flex-col gap-3">
          <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">{title}</h3>
          <p className="text-sm text-gray-400 -mt-1">{category}</p>
          {description && (
            <p className="text-sm text-zinc-500 leading-6">{description}</p>
          )}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm w-fit text-designColor hover:underline"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
        <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group flex flex-col gap-2">
          {list.map((src, i) => (
            <img
              key={i}
              className="w-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer border border-zinc-800 rounded-lg"
              src={src}
              alt={title}
              loading="lazy"
            />
          ))}
          <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
        </div>
        <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
          {title}
        </h3>
        <p className="text-base text-gray-400 -mt-1">{category}</p>
      </div>
    </a>
  );
};

export default ProjectsCard;