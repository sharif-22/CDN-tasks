import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  function navigateTo(page) {
    navigate(`/blog/${page}`);
  }

  // fetching blog data from server
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        "https://dev.to/api/articles?username=rajatamil"
      );
      const postJson = await fetchedPosts.json();
      setBlogPosts(postJson);
    };
    fetchPosts();
  }, []);

  const Hastag = (props) => {
    return (
      <li className="p-1 rounded text-xs lg:text-sm hover:bg-slate-400 cursor-pointer">
        #{props.hastag}
      </li>
    );
  };

  return (
    <>
      <Navbar />

      <div className="my-6">
        {blogPosts.map((blog, index) => {
          return (
            <div
              key={blog.id}
              onClick={() => navigateTo(blog.slug)}
              className="bg-slate-200 rounded my-4 max-w-4xl mx-auto cursor-pointer hover:shadow-lg"
            >
              <img
                className="w-full h-[181px] object-cover rounded-t"
                src={
                  blog.cover_image == null
                    ? blog.social_image
                    : blog.cover_image
                }
              />

              <div className="p-2 space-y-2">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="font-medium"> {blog.description}</p>
                <ol className="flex gap-2">
                  {blog.tag_list.map((tag, index) => {
                    return <Hastag hastag={tag} key={index} />;
                  })}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
