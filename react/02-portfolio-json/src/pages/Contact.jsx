import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div id="contact" className="w-full bg-slate-600 text-white">
      <div className=" p-5 max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-2xl">Connect with me in </p>
        <ul className="flex gap-8">
          <li className="hover:text-slate-400 duration-500">
            <a
              title="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/khaja-sharif/"
            >
              <i>{<FaLinkedin size={24} />}</i>
            </a>
          </li>
          <li className="hover:text-slate-400 duration-500">
            <a
              title="github"
              target="_blank"
              href="https://github.com/sharif-22"
            >
              <i>{<FaGithub size={24} />}</i>
            </a>
          </li>
          <li className="hover:text-slate-400 duration-500">
            <a href="mailto:khajasharif065@gmail.com">
              <i>{<SiGmail size={24} />}</i>
            </a>
          </li>
          <li className="hover:text-slate-400 duration-500">
            <a href="tel:+919652195263">
              <i>{<IoCallSharp size={24} />}</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
