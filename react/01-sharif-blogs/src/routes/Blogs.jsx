import React from "react";
import Navbar from "../Components/Navbar";
import blogs from "../data/blogs.json";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const BlogCard = (props) => {
  return (
    <div
      key={props.index}
      id={props.index}
      className="lg:max-w-6xl mx-auto m-4 p-4 space-y-4 rounded-md bg-slate-200 hover:bg-slate-300 hover:shadow-lg delay-75 ease-in cursor-pointer"
    >
      <h2 className="text-2xl font-semibold hover:underline">{props.title}</h2>
      <div className="flex lg:flex-row flex-col items-center gap-8 text-lg font-medium">
        <img
          className="lg:w-1/4 rounded hover:shadow-md "
          src={props.images}
          alt={props.title}
        />
        <div className="space-y-4">
          <p>{props.description}</p>
          <a
            className="hover:underline text-sm inline-block text-slate-500"
            href={props.src}
            target="_blank"
          >
            source : {props.src}
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-600 p-2 inline-block text-white rounded float-end"
            type="button"
          >
            <Link to={`/blog/${props.index}`}>Read Blog</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <>
      <Navbar />
      <p className="lg:max-w-6xl mx-auto text-lg font-medium mt-4">
        Total Blogs : {blogs[0].blogs.length}
      </p>
      {blogs[0].blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            index={blog.id}
            images={blog.images[0]}
            title={blog.title}
            description={blog.description}
            src={blog.src}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Blogs;
