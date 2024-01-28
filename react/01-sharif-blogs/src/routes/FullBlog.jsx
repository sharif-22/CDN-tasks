import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdSend } from "react-icons/md";
const posts = blogsData[0].blogs;

const Headings = (props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">
        <span> {props.count + 1}. </span>
        {props.heading}
      </h2>
      <p className="text-lg">{props.details}</p>
    </div>
  );
};

console.log(posts);
const FullBlog = () => {
  const { id } = useParams();
  const currentBlog = posts.find((post) => {
    return post.id == id;
  });
  return (
    <>
      <Navbar />
      <div
        className="mx-auto max-w-6xl bg-slate-100 pb-8 lg:px-0 px-5 mt-8"
        key={id}
      >
        <img src={currentBlog.images[0]} alt={currentBlog.title} />
        <div className="mx-auto max-w-4xl space-y-4">
          <div
            className="text-3xl max-w-lg mt-8 font-medium"
            key={currentBlog.id}
          >
            <h1>{currentBlog.title}</h1>
          </div>
          <div className="text-lg">
            <p>{currentBlog.description}</p>
          </div>

          {currentBlog.content.map((topic, index) => {
            return (
              <Headings
                count={index}
                heading={topic.heading}
                details={topic.details}
              />
            );
          })}

          <img src={currentBlog.images[1]} alt={currentBlog.title} />

          <div>
            <p className="text-slate-700 font-medium text-2xl">
              Author : {blogsData[0].author.name}
            </p>
            <a
              target="_blank"
              href={blogsData[0].author.github}
              className="text-slate-700 font-medium text-sm"
            >
              Github
            </a>
            <p className="text-slate-700 font-medium text-base">
              source :{" "}
              <a
                href={blogsData[0].blogs[id - 1].src}
                target="_blank"
                className="italic"
              >
                {blogsData[0].blogs[id - 1].src}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="comment">Leave your taughts about this blog</label>
            <div className="flex gap-4">
              <input
                className="p-2 rounded bg-slate-300 w-8/12  "
                type="text"
                name="comment"
                id="comment"
                placeholder="Comment about the blog"
              />
              <button
                className="bg-blue-500 text-white lg:w-1/6 p-2 rounded flex items-center justify-center gap-1"
                type="button"
              >
                <span>Comment</span> <MdSend className="inline" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullBlog;
