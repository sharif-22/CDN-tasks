import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdSend } from "react-icons/md";
import blogs from "../data/newBlobs.json";
import dayjs from "dayjs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

const posts = blogs;

function formatDate(inputDateString = "2002-01-31") {
  // Split the input date string into day, month, and year
  const [year, month, day] = inputDateString.split("-");
  const formattedDateString = `${year}-${month}-${day}`;

  return dayjs(formattedDateString).format("DD-MMM-YYYY");
}

const Content = (props) => {
  return (
    <div className="space-y-4 px-3">
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

      <div className="lg:max-w-6xl flex lg:gap-x-4 justify-between mx-3 lg:mx-auto">
        <div
          className="mx-auto w-9/12 bg-slate-100 pb-8 lg:px-0 px-5 mt-2"
          key={id}
        >
          <img
            className="rounded-t object-cover w-full h-96"
            src={currentBlog.image}
            alt={currentBlog.title}
          />
          <div className="mx-auto max-w-4xl space-y-4 px-3">
            <div
              className="text-3xl max-w-lg mt-8 font-medium"
              key={currentBlog.id}
            >
              <h1>{currentBlog.title}</h1>
            </div>
            <div className="text-lg px-3">
              <p>{currentBlog.description}</p>
            </div>

            {currentBlog.content.map((topic, index) => {
              return (
                <Content
                  count={index}
                  heading={topic.heading}
                  details={topic.details}
                />
              );
            })}

            <div className="px-3">
              <hr />
              <p className="text-slate-700 font-medium text-2xl">
                Author : {currentBlog.author.name}
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

            <div className="flex flex-col gap-y-2 px-3">
              <label htmlFor="comment">
                Leave your taughts about this blog
              </label>
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
        <div className="hidden w-1/4 lg:block bg-slate-200  rounded sticky top-20 h-1/2">
          <div>
            <h2 className="font-semibold p-4  border-b border-slate-300 text-lg">
              Related Blogs
            </h2>

            <div className="flex flex-col gap-2 p-4  hover:bg-slate-100 border-y border-slate-300">
              <h1 className="font-medium">
                {currentBlog.related_blogs[0].title}
              </h1>
              <img
                className="rounded"
                src={currentBlog.related_blogs[0].image}
                alt={currentBlog.related_blogs[0].title}
              />
              <p className="text-sm">
                {currentBlog.related_blogs[0].short_description}
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 hover:bg-slate-100 border-y border-slate-300">
              <h1 className="font-medium">
                {currentBlog.related_blogs[1].title}
              </h1>
              <img
                className="rounded"
                src={currentBlog.related_blogs[1].image}
                alt={currentBlog.related_blogs[1].title}
              />
              <p className="text-sm">
                {currentBlog.related_blogs[1].short_description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullBlog;
