import React from "react";

// Dummy data for Politics blogs
const politicsBlogs = [
  {
    id: 1,
    title: "How Global Politics Shapes the Economy",
    image: "https://picsum.photos/id/190/600/300",
    content: "Political decisions have a significant impact on global markets. From trade policies to international relations, every move made by world leaders affects the stock market, inflation, and economic growth...",
  },
  {
    id: 2,
    title: "The Role of Social Media in Modern Elections",
    image: "https://picsum.photos/id/191/600/300",
    content: "In the digital era, social media platforms play a crucial role in elections. Politicians leverage Facebook, Twitter, and Instagram to connect with voters, spread their messages, and influence public opinion...",
  },
];

const Politics = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">🏛️ Politics Blogs</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {politicsBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-2xl font-semibold mt-3">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 150)}...</p>
              <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politics;
