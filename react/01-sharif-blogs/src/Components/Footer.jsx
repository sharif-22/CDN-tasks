import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-blue-500 text-white p-5">
        <div className="lg:max-w-6xl mx-auto   flex justify-between items-center">
          <Link className="text-2xl font-medium" to={"/"}>
            Sharif's Blog
          </Link>
          <ol>
            <li>
              <a
                href="https://github.com/sharif-22/cyberdude-challenges/tree/main/react/01-sharif-blogs"
                target="_blank"
              >
                <FaGithub size={"28px"} />
              </a>
            </li>
          </ol>
        </div>
      </footer>
    </>
  );
};

export default Footer;
