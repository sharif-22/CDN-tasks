import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import blogs from "../data/blogs.json";
import { Link } from "react-router-dom";

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

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="lg:max-w-6xl mx-auto lg:h-[25dvh] flex flex-col-reverse justify-center lg:flex-row items-center lg:justify-between my-5 rounded bg-blue-500 text-white p-5">
        <div className="space-y-8">
          <h1 className="font-semibold text-4xl">Sharif's Blog's</h1>
          <p className="text-lg">
            "Explore the World of Web Development with Sharif's Insightful Blogs
            – Your Guide to Building Exceptional Online Experiences!"
          </p>
        </div>
        <div>
          <img
            className="lg:w-1/3 w-1/2 rounded-full lg:float-end "
            src="/sharif-22.jpg"
            alt="sharif-profile-pic"
          />
        </div>
      </div>

      <div className="space-y-4 lg:max-w-6xl mx-auto">
        <h2 className="text-2xl"> Trending Blogs </h2>
        {blogs[0].blogs.map((blog) => {
          // console.log(blog);
          if (blog.id <= 3) {
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
          }
        })}
      </div>

      <div className="lg:max-w-6xl mx-auto flex justify-center my-4">
        <Link to="/blogs">
          <button className="mx-auto w-fit px-24 py-2 rounded text-white bg-blue-500 hover:bg-blue-600">
            Read More Blogs
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
