import React, { useEffect, useState } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Hastag = (props) => {
  return (
    <li className="p-1 rounded text-xs lg:text-sm hover:bg-slate-400 cursor-pointer">
      #{props.hastag}
    </li>
  );
};

const FullBlog = () => {
  const [blogView, setBlogView] = useState({
    type_of: "article",
    id: 1533496,
    title: "Add Element To Div Using appendChild() JavaScript",
    description:
      "Learn how to add one or more HTML elements using appendChild() method in JavaScript.   appendChild()...",
    readable_publish_date: "Jul 11 '23",
    slug: "add-element-to-div-using-appendchild-javascript-1pa7",
    path: "/rajatamil/add-element-to-div-using-appendchild-javascript-1pa7",
    url: "https://dev.to/rajatamil/add-element-to-div-using-appendchild-javascript-1pa7",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: null,
    published_timestamp: "2023-07-11T14:23:51Z",
    positive_reactions_count: 0,
    cover_image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy1c58h4z9ttpztso61a6.png",
    social_image:
      "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy1c58h4z9ttpztso61a6.png",
    canonical_url:
      "https://softauthor.com/javascript-add-element-to-div-using-appendchild/",
    created_at: "2023-07-11T13:37:21Z",
    edited_at: null,
    crossposted_at: null,
    published_at: "2023-07-11T14:23:51Z",
    last_comment_at: "2023-07-11T14:23:51Z",
    reading_time_minutes: 2,
    tag_list: "webdev, javascript, beginners, programming",
    tags: ["webdev", "javascript", "beginners", "programming"],
    body_html: "<p></p>",
    body_markdown: "",
    user: {
      name: "Raja Tamil",
      username: "rajatamil",
      twitter_username: "HiRajaTamil",
      github_username: null,
      user_id: 305742,
      website_url: "https://lnkd.in/gh579ibA",
      profile_image:
        "https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F305742%2F9fbcd58d-5093-4cbd-8b51-beac411204dc.jpg",
      profile_image_90:
        "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F305742%2F9fbcd58d-5093-4cbd-8b51-beac411204dc.jpg",
    },
  });

  const navigate = useNavigate();
  function navigateTo() {
    navigate(`/`);
  }

  const { slug } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        `https://dev.to/api/articles/rajatamil/${slug}`
      );
      // `https://dev.to/api/articles?username=rajatamil`;
      const postJson = await fetchedPosts.json();
      console.log(postJson);
      // console.log
      setBlogView(postJson);
    };
    fetchPosts();
  }, []);
  // console.log(blogView);
  return (
    <div className="relative h-screen bg-slate-100">
      <Navbar />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2">
        <div
          key={blogView.id}
          onClick={() => navigateTo()}
          className="bg-slate-200 rounded  max-w-4xl mx-auto  cursor-pointer hover:shadow-lg"
        >
          <img
            className="w-full h-[181px] object-cover rounded-t"
            src={
              blogView.cover_image == null
                ? blogView.social_image
                : blogView.cover_image
            }
          />

          <div className="p-2 space-y-2">
            <h2 className="text-2xl font-semibold">{blogView.title}</h2>

            <p className="font-medium"> {blogView.description}</p>

            <p className="bg-slate-300 p-1 rounded text-sm font-medium w-fit">
              {blogView.reading_time_minutes + " mins"}
            </p>

            <div className="flex gap-2 items-center">
              <img
                className="w-10 rounded-full"
                src={blogView.user.profile_image}
                alt={blogView.user.name + "profile"}
              />
              <div>
                <p className="font-medium"> {blogView.user.name}</p>
                <p className="text-sm">
                  {blogView.readable_publish_date.replace("'", "- 20")}
                </p>
              </div>
            </div>
            <ol className="flex gap-2 items-center">
              {blogView.tags.map((tag, index) => {
                return <Hastag hastag={tag} key={index} />;
              })}
            </ol>
          </div>
        </div>

        <a href={blogView.url} target="_blank">
          <button className="bg-slate-200  hover:bg-slate-300 max-w-4xl hover:shadow-lg rounded  mx-auto w-full text-slate-700 mt-4 p-2 flex gap-2 justify-center items-center">
            <span className="text-lg font-medium">Read Blog at</span>
            <span className="bg-black p-1 rounded text-white">DEV.to</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default FullBlog;
