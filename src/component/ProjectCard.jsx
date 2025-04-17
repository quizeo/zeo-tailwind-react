import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl">{title}</h2>
        <p className="mt-4 text-slate leading ">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="text-2xl text-slate-500 hover:text-slate-800 duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="text-2xl text-slate-500 hover:text-slate-800 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
