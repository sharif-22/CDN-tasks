import React from "react";
import Navbar from "../Components/Navbar";
import blogs from "../data/newBlobs.json";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import dayjs from "dayjs";
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
    <li className="p-1 rounded text-xs cursor-pointer lg:text-sm duration-300 hover:bg-slate-200">
      #{props.hastag}
    </li>
  );
};
const BlogCard = (props) => {
  return (
    <div
      key={props.index}
      id={props.index}
      className="lg:my-4 w-11/12 lg:max-w-6xl  mx-auto space-y-4 rounded-md bg-slate-200 hover:bg-slate-300 border hover:shadow-lg delay-75 ease-in"
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
          <div className="flex gap-2 cursor-pointer duration-300 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegHeart size={24} />
            <p className="text-sm">{props.likes}</p>
          </div>
          <div className="flex gap-2 cursor-pointer duration-300 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegComment size={22} />
            <p className="text-sm">{props.total_comments}</p>
          </div>
          <div className="flex gap-2 cursor-pointer duration-300 hover:bg-slate-200 p-1 rounded items-center">
            <IoShareSocialOutline size={24} />
            <p className="text-sm">{props.shares}</p>
          </div>
          <div className="flex gap-2 cursor-pointer duration-300 hover:bg-slate-200 p-1 rounded items-center">
            <FaRegBookmark size={24} />
            <p className="text-sm">{props.saves}</p>
          </div>
        </div>

        <Link to={`/blog/${props.index}`}>
          <button
            className="bg-blue-400 hover:bg-blue-500 lg:text-base text-sm p-2 inline-block hover:text-white duration-500 rounded w-full"
            type="button"
          >
            Read Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <>
      <Navbar />
      <p className="lg:max-w-6xl mx-auto text-lg p-2 font-medium mt-4">
        Saved Blogs : {blogs.length}
      </p>
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            index={blog.id}
            publish_date={blog.publish_date}
            images={blog.image}
            title={blog.title}
            name={blog.author.name}
            description={blog.short_description}
            hashtags={blog.hashtags}
            likes={blog.reactions.likes}
            total_comments={blog.reactions.total_comments}
            shares={blog.reactions.shares}
            saves={blog.reactions.saves}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Blogs;
