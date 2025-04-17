import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import React from "react";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div
        className="max-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8"
        style={{
          margin: " 0 auto",
        }}
      >
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Zeo</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wider">
            Junior Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turining ideas into reality with code
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="text-4xl text-slate-700 hover:text-emerald-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
