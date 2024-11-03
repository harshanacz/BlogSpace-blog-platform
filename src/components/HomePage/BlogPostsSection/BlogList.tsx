"use client";
import React from "react";

import { blog_data } from "../../../../public/demo data/assets";
import BlogCard from "./BlogCard";

const BlogList = () => {

  const [menu, setMenu] = React.useState("All");

  return (
    <div>
      <div className="flex justify-center gap-3 my-10">
      <button
        onClick={() => setMenu("All")}
        className={`${
          menu === "All" ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-2 rounded-lg`}
      >
        All
      </button>
      <button
        onClick={() => setMenu("Technology")}
        className={`${
          menu === "Technology" ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-2 rounded-lg`}
      >
        Technology
      </button>
      <button
        onClick={() => setMenu("Startup")}
        className={`${
          menu === "Startup" ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-2 rounded-lg`}
      >
        Startup
      </button>
      <button
        onClick={() => setMenu("Lifestyle")}
        className={`${
          menu === "Lifestyle" ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-2 rounded-lg`}
      >
        Lifestyle
      </button>
       

      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.filter(
          (blog) => menu === "All" || blog.category === menu
        ).map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })  
        }
       </div>
    </div>
  );
};

export default BlogList;
