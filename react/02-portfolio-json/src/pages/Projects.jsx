import data from "../data/data.json";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" w-full bg-gradient-to-tr bg-blue-400 text-white"
    >
      <h2 className="text-4xl text-white text-center pt-8 font-medium">
        Projects
      </h2>
      <div className="h-[100dvh] lg:h-[82dvh] max-w-6xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-2 p-2 gap-4 max-w-6xl">
          {data.projects.map((project) => {
            return (
              <div className="text-black w-full rounded bg-gray-100 hover:bg-slate-300 hover:shadow-md cursor-pointer transition-all duration-300">
                <div className="w-full flex p-4">
                  <img
                    className="w-5/6 object-contain"
                    src={project.mobileDesktop}
                  />
                  <img
                    className="w-1/6 object-contain"
                    src={project.mobileView}
                  />
                </div>
                <div className="px-4">
                  <h2 className="text-2xl font-semibold pb-6">
                    {project.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
