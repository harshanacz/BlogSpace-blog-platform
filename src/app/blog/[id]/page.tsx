"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { blog_data } from "../../../../public/demo data/assets";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Import styles for the skeleton
import BlogPageHeader from '@/components/BlogPage/BlogPageHeader';
import { StaticImageData } from 'next/image';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  date: number;
  category: string;
  author: string;
  author_img: StaticImageData;
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<BlogPost | null>(null);

  const fetchBlogData = async () => {
    if (id && typeof id === 'string') {
      const numericId = parseInt(id, 10);
      const blogPost = blog_data.find((post: BlogPost) => post.id === numericId);
      setData(blogPost || null);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchBlogData();
    }, 1000);
  }, [id]);

  return (
    <div>
      <BlogPageHeader />

      {data ? (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <img
              src={data.image.src}
              alt={data.title}
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-600 text-sm flex justify-between items-center mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{data.category}</span>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">{data.title}</h1>
          <div className="text-gray-700 mb-6">{data.description}</div>
          <div className="flex items-center">
            <img
              src={data.author_img.src}
              alt={data.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-semibold">{data.author}</p>
              <p className="text-gray-600 text-sm">Author</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg pb-8">
          <div className="mb-4">
            <Skeleton height={288} style={{ borderRadius: '0.5rem' }} />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Skeleton width={100} height={24} />
            <Skeleton width={70} height={24} />
          </div>
          <Skeleton width="60%" height={32} />
          <Skeleton count={3} />
          <div className="flex items-center mt-6">
            <Skeleton circle width={48} height={48} className="mr-4" />
            <div>
              <Skeleton width={120} height={20} />
              <Skeleton width={80} height={16} />
            </div>
          </div>
        </div>
      )}
<div className='mt-8'></div>
      <Footer/>
    </div>
  );
};

export default BlogPostPage;

