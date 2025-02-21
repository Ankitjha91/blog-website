import React from "react";

// Dummy data for Nature blogs
const natureBlogs = [
  {
    id: 1,
    title: "Exploring the Amazon Rainforest",
    image: "https://picsum.photos/id/1018/600/300",
    content: "The Amazon Rainforest is one of the most biodiverse places on Earth, home to thousands of species of flora and fauna. Exploring this lush green paradise is a once-in-a-lifetime experience...",
  },
  {
    id: 2,
    title: "The Benefits of Plant-Based Living",
    image: "https://picsum.photos/id/1020/600/300",
    content: "A plant-based diet is not only beneficial for personal health but also helps reduce environmental impact. With an increasing awareness of sustainable living, many people are shifting towards a greener lifestyle...",
  },
];

const Nature = () => {
  return (
    <div className="min-h-screen bg-green-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-6">🌿 Nature Blogs</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {natureBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-2xl font-semibold mt-3">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 150)}...</p>
              <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nature;
