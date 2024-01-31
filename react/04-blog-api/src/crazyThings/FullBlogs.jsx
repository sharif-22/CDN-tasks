import React, { useEffect, useState } from "react";

import DOMPurify from "dompurify";

import { useParams } from "react-router-dom";

const FullBlog = () => {
  const [blogView, setBlogView] = useState([{}]);

  const { slug } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        `https://dev.to/api/articles/rajatamil/${slug}`
      );
      const postJson = await fetchedPosts.json();
      const sanitizedHTML = DOMPurify.sanitize(postJson.body_html);
      // setBlogView([postJson]);
      setBlogView(sanitizedHTML);
      console.log(sanitizedHTML);
    };
    fetchPosts();
  }, []);

  // const currentView = blogView.filter((post) => {
  //   console.log(post);
  //   return post.slug == slug;
  // });
  // console.log(currentView);

  return <div dangerouslySetInnerHTML={{ __html: blogView }}></div>;
};

export default FullBlog;
