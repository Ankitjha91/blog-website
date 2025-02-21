import React from "react";

// Dummy data for Travel blogs
const travelBlogs = [
  {
    id: 1,
    title: "Top 10 Must-Visit Destinations in 2025",
    image: "https://picsum.photos/id/1036/600/300",
    content: "Traveling opens up a world of adventure and culture. Here are the top 10 breathtaking destinations for 2025 that you must visit, from the serene beaches of Bali to the historical streets of Rome...",
  },
  {
    id: 2,
    title: "How to Travel on a Budget",
    image: "https://picsum.photos/id/1042/600/300",
    content: "Many people believe traveling is expensive, but with the right tips, you can explore the world without breaking the bank. Learn how to find cheap flights, book budget stays, and enjoy an affordable adventure...",
  },
];

const Travel = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-blue-800 mb-6">✈️ Travel Blogs</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {travelBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-2xl font-semibold mt-3">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 150)}...</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
