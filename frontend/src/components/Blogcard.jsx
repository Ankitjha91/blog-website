import React from "react";

const BlogCard = ({ blogdata }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={blogdata.image} alt={blogdata.title} className="w-full h-56 object-cover" />
      
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{blogdata.title}</h2>
        <p className="text-gray-600 mt-2">{blogdata.description}</p>
        
        <div className="mt-4 flex justify-between text-gray-500 text-sm">
          <span>{blogdata.createdOn}</span>
          <span>💬 {blogdata.comments} Comments</span>
        </div>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
