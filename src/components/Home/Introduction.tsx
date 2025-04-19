"use client";

import React from "react";

const Introduction = () => {
  return (
    <div className="text-white max-w-3xl mt-6 px-4 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
        👋 Hi, I&apos;m <span className="text-yellow-400">Nguyễn Phi Long</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-shadow-lg">
        I&apos;m a <span className="text-yellow-300 font-semibold">Software Developer </span>
        passionate about building clean, scalable, and user-focused applications across 
        <span className="text-yellow-300 font-semibold"> web</span>, <span className="text-yellow-300 font-semibold">mobile</span>
        , and <span className="text-yellow-300 font-semibold">game </span>
        platforms. I enjoy working with technologies like <span className="text-yellow-300 font-semibold">React</span>
        , <span className="text-yellow-300 font-semibold">Next.js</span>, <span className="text-yellow-300 font-semibold">
          React Native</span>, <span className="text-yellow-300 font-semibold">FastAPI</span>, 
        <span className="text-yellow-300 font-semibold"> Express.js</span>, <span className="text-yellow-300 font-semibold">
          NestJS</span>, and <span className="text-yellow-300 font-semibold">Unity</span>.
        <br /><br />
        I&apos;m always excited to turn ideas into reality and continuously explore new tools in the ever-evolving tech world.
      </p>
    </div>
  );
};

export default Introduction;
