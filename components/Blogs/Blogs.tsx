import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { blogs } from "@/Data/data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Our Blogs</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5">
        {blogs.map((blogs, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={`${i * 140}`}
              data-aos-anchor-placement="top-center"
              key={blogs.id}
            >
              <BlogCard Blogs={blogs} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
