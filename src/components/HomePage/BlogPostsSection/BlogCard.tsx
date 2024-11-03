import React from 'react'
import { StaticImageData } from 'next/image';

interface BlogCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    category: string;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({
    title,
    description,
    image,
    category,
  }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-blue-50 rounded-lg">
      <img src={image.src} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div className="mx-4 my-4">
        <p className="font-semibold text-black text-base bg-blue-200 inline px-2 py-1 rounded-lg">
          {category}
        </p>

        <p className="font-semibold text-black text-lg mt-2">
          {title}
        </p>

        <p className="font-normal text-black text-lg mt-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export default BlogCard