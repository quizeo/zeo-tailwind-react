import React from "react";

import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const SkillsCard = ({ icon, title, id, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;
