import React from "react";

const About = () => {
  return (
    <div className="w-full bg-slate-600 text-white">
      <div className="h-[91dvh]  max-w-6xl mx-auto flex items-center justify-between lg:flex-row flex-col">
        <img
          src="/images/full-stack-text-image.svg"
          className="animate-ping duration-1000"
        />
        <div className="w-2/3 space-y-4">
          <h1 className="text-4xl text-blue-500 font-medium">About me</h1>
          <p className="text-2xl ">A dedicated Full stack Engineer</p>
          <p className="text-lg text-slate-300">
            As a experienced Full Stack Engineer with 1 year of software
            development experience,who has worked extensively on the front-end
            aspect of web applications using React JavaScript . and used MongoDB
            Node PHP for back-end
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
