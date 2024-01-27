import React from "react";
import Navbar from "../Components/Navbar";
import blogs from "../data/blogs.json";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  function readBlog(event) {
    // console.dir(event.target.parentElement.parentElement.parentElement);
    console.dir(event.target.closest(".blog-card"));
  }
  return (
    <div
      key={props.index}
      id={props.index}
      className="blog-card lg:max-w-6xl mx-auto m-4 p-4 space-y-4 rounded-md bg-slate-200 hover:bg-slate-300 cursor-pointer"
    >
      <h2 className="text-2xl font-semibold hover:underline">{props.title}</h2>
      <div className="flex items-center gap-8 text-lg font-medium">
        <img
          className="w-1/4 rounded hover:shadow-md "
          src={props.images}
          alt={props.title}
        />
        <div className="space-y-4">
          <p>{props.description}</p>
          <a
            className="hover:underline inline-block text-slate-500"
            href={props.src}
            target="_blank"
          >
            source : {props.src}
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-600 p-2 inline-block text-white rounded float-end"
            onClick={readBlog}
            type="button"
          >
            <Link to="/Blogs">Read Blog</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      {blogs[0].blogs.map((blog) => {
        // console.log(blog);
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
    </>
  );
};

export default Home;
