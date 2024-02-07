import React from "react";
import dayjs from "dayjs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import blogs from "../data/newBlobs.json";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

function formatDate(inputDateString = "2002-01-31") {
  // Split the input date string into day, month, and year
  const [year, month, day] = inputDateString.split("-");
  const formattedDateString = `${year}-${month}-${day}`;

  return dayjs(formattedDateString).format("DD-MMM-YYYY");
}

const Hastag = (props) => {
  return (
    <li className="p-1 rounded text-sm hover:bg-slate-200">#{props.hastag}</li>
  );
};

const BlogCard = (props) => {
  return (
    <div
      key={props.index}
      id={props.index}
      className="lg:my-4 w-11/12  lg:w-full space-y-4 rounded-md bg-slate-200 hover:bg-slate-300 border hover:shadow-lg delay-75 ease-in"
    >
      <img
        className="rounded-t lg:h-80 lg:w-full lg:object-cover"
        src={props.images}
        alt={props.title}
      />
      <div className="flex p-2 lg:p-3 flex-col lg:gap-y-2 gap-1 text-lg font-medium">
        <div className="flex gap-2 items-center">
          <span className="text-sm p-1 w-fit rounded text-white bg-slate-500 cursor-pointer">
            {props.name}
          </span>
          <span className="text-xs text-slate-600">
            {formatDate(props.publish_date)}
          </span>
        </div>
        <h2 className="lg:text-2xl font-semibold text-lg">{props.title}</h2>

        <p className="text-sm demo-1 lg:text-lg py-2  border-slate-300">
          {props.description}
        </p>
        <ol className="flex list-none gap-2">
          {props.hashtags.map((hastag) => {
            return <Hastag hastag={hastag} />;
          })}
        </ol>

        <div className="flex justify-around">
          <div className="flex gap-2 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegHeart size={24} />
            <p className="text-sm">{props.likes}</p>
          </div>
          <div className="flex gap-2 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegComment size={22} />
            <p className="text-sm">{props.total_comments}</p>
          </div>
          <div className="flex gap-2 hover:bg-slate-200 p-1 rounded items-center">
            <IoShareSocialOutline size={24} />
            <p className="text-sm">{props.shares}</p>
          </div>
          <div className="flex gap-2 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegBookmark size={24} />
            <p className="text-sm">{props.saves}</p>
          </div>
        </div>

        <Link to={`/blog/${props.index}`}>
          <button
            className="bg-blue-400 hover:bg-blue-500 lg:text-base text-sm p-2 inline-block text-black hover:text-white duration-500 rounded w-full"
            type="button"
          >
            Read Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="lg:max-w-6xl flex lg:gap-x-4 justify-between mx-3 lg:mx-auto">
        <div className="space-y-4 lg:w-4/5">
          <h2 className="text-2xl font-semibold mt-4"> Trending Blogs </h2>
          {blogs.map((blog) => {
            // console.log(blog);

            if (blog.id <= 3) {
              return (
                <BlogCard
                  key={blog.id}
                  index={blog.id}
                  publish_date={blog.publish_date}
                  hashtags={blog.hashtags}
                  images={blog.image}
                  title={blog.title}
                  name={blog.author.name}
                  description={blog.short_description}
                  likes={blog.reactions.likes}
                  total_comments={blog.reactions.total_comments}
                  shares={blog.reactions.shares}
                  saves={blog.reactions.saves}
                />
              );
            }
          })}
        </div>
        <div className="hidden w-1/5 lg:block bg-slate-200 p-4 rounded sticky top-20 h-1/2">
          <div>
            <h2 className="font-semibold py-2 border-b border-slate-300 text-lg">
              Active discussions
            </h2>
            <ol>
              <li className="p-2 hover:bg-slate-400 border-b rounded border-slate-300 cursor-pointer m-1">
                Meme Monday
              </li>
              <li className="p-2 hover:bg-slate-400 border-b rounded border-slate-300 cursor-pointer m-1">
                Caption This!
              </li>
              <li className="p-2 hover:bg-slate-400 border-b rounded border-slate-300 cursor-pointer m-1">
                How to improve your GitHub vanity metrics FAST
              </li>
              <li className="p-2 hover:bg-slate-400  rounded border-slate-300 cursor-pointer m-1">
                Be a inventer Not 'Frameworker'
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="lg:max-w-6xl mx-auto flex justify-center my-4">
        <Link to="/blogs">
          <button className="mx-auto w-fit px-24 py-2 rounded hover:underline">
            Read More Blogs
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
