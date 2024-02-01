import data from "../data/data.json";
import React from "react";

const Projects = () => {
  return (
    <div className=" w-full bg-gradient-to-tr bg-blue-400 text-white">
      <h2 className="text-4xl text-white text-center pt-8 font-medium">
        Projects
      </h2>
      <div className="h-[100dvh] lg:h-[82dvh] max-w-6xl mx-auto flex items-center justify-center">
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse p-2 gap-4">
          {data.projects.map((project) => {
            return (
              <div className="max-w-6xl mx-auto text-black ">
                <div className="max-w-sm flex bg-white rounded-t gap-2 p-4">
                  <img
                    className="object-contain w-60"
                    src={project.mobileDesktop}
                    alt=""
                    srcset=""
                  />
                  <img
                    className="w-20 object-contain"
                    src={project.mobileView}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="bg-white px-4 max-w-sm rounded-b">
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
