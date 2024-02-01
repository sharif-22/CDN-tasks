import React from "react";
import data from "../data/data.json";
console.log(data);
const Hero = () => {
  return (
    <div className="h-[91dvh] max-w-6xl mx-auto flex items-center justify-between lg:flex-row flex-col-reverse p-2">
      <div className="space-y-4">
        <h1 className="text-6xl font-semibold">{data.name}</h1>
        <p className="text-xl font-medium">
          A passionate {data.profession} From India. 📍
        </p>
        <div className="flex w-full gap-3 items-center">
          <p className="font-medium">Tech Stack : </p>
          {data.icons.map((skill) => {
            return (
              <img
                className="w-8 object-contain hover:rotate-45 hover:scale-110 duration-1000 cursor-pointer"
                src={skill.icon_path}
                alt={skill.icon}
              />
            );
          })}
        </div>
      </div>

      <img
        className="w-80 rounded-full"
        src={data.profilePic}
        alt={data.name}
      />
    </div>
  );
};

export default Hero;
