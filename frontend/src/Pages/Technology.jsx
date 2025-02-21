import React from "react";

// Dummy data for Technology blogs
const techBlogs = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence in 2025",
    image: "https://picsum.photos/id/180/600/300",
    content: "Artificial Intelligence is evolving at a rapid pace, transforming industries from healthcare to finance. In 2025, AI-powered automation, chatbots, and deep learning are expected to revolutionize the way we work and live...",
  },
  {
    id: 2,
    title: "Top 5 Programming Languages to Learn This Year",
    image: "https://picsum.photos/id/181/600/300",
    content: "Choosing the right programming language can boost your career. In this blog, we discuss the top 5 languages for 2025, including Python, JavaScript, and Rust, and their applications in web development, AI, and data science...",
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">💻 Technology Blogs</h1>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {techBlogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg p-5 rounded-lg hover:shadow-2xl transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-2xl font-semibold mt-3">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 150)}...</p>
              <button className="mt-3 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
