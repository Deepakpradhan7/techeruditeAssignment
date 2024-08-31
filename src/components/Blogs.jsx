import React from 'react';
import useBlogs from '../hooks/useBlogs';
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  const { blogData, error, loading } = useBlogs();
  const data = blogData?.data.slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long', 
      day: '2-digit', 
      year: 'numeric', 
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className='flex justify-between px-10'>
          <h1 className='text-primary font-bold text-[32px] px-5'>Blogs</h1>
          <span className='font-bold flex gap-2 justify-center items-center text-blue-700'>
            View All <FaArrowRightLong />
          </span>
        </div>

        <div className="container px-5 py-24 mx-auto">
          {loading ? (
            // Show loading spinner when loading
            <div className="flex justify-center items-center">
              <div className="rounded-md h-12 w-12 border-4 border-t-4 border-orange animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-wrap -m-4">
              {data && data.map((item) => (
                <div key={item.id} className="p-4 md:w-1/3 px-10">
                  <div className="h-full rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover rounded-2xl object-center" src={item.image_url} alt="blog" />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-primary mb-3">{item.name}</h1>
                      <h2 className="tracking-widest text-xs title-font font-medium text-tertiary mb-1">
                        {formatDate(item.createdAt)}
                        <span className='text-orange ml-2'>{item?.writer_name}</span>
                      </h2>
                      <p className="leading-relaxed mb-3">{item?.short_description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
