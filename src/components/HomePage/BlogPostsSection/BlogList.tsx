import React from "react";

import { blog_data } from "../../../../public/demo data/assets";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          All
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Technology
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
        Startup
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
        Lifestyle
        </button>
       

      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })  
        }
       </div>
    </div>
  );
};

export default BlogList;
