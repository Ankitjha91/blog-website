import React from "react";
import { Link } from "react-router-dom";

// Function to generate random past dates
const getRandomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
};

// Blog data with specific images
const blogs = [
  {
    id: 1,
    title: "The Future of Real Estate Investments",
    image: "https://picsum.photos/id/200/300/200",
    description: "Explore the benefits and risks of investing in real estate...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content about real estate investments...",
  },
  {
    id: 2,
    title: "Travel Hacks You Must Know!",
    image: "https://picsum.photos/id/208/300/200",
    description: "Discover secret travel hacks to save money and time...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content about travel hacks...",
  },
  {
    id: 4,
    title: "Understanding Stock Market Trends",
    image: "https://picsum.photos/id/206/300/200",
    description: "A deep dive into how market trends shape investments...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content on stock market trends...",
  },
  {
    id: 6,
    title: "How to Start a Profitable Online Business",
    image: "https://picsum.photos/id/204/300/200",
    description: "Step-by-step guide to launching an online business...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content about starting an online business...",
  },
  {
    id: 7,
    title: "Best Tips for Work-Life Balance",
    image: "https://picsum.photos/id/203/300/200",
    description: "Learn how to manage work and personal life effectively...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content about work-life balance...",
  },
  {
    id: 8,
    title: "Healthy Eating: Myths vs. Facts",
    image: "https://picsum.photos/id/202/300/200",
    description: "Debunking common myths about healthy diets...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content on healthy eating myths...",
  },
  {
    id: 9,
    title: "The Impact of Politics on the Economy",
    image: "https://picsum.photos/id/201/300/200",
    description: "How political decisions shape global markets...",
    createdon: getRandomDate(),
    comments: Math.floor(Math.random() * 10),
    content: "Full content about the impact of politics on the economy...",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">🚀 Latest Blog Posts</h1>
      
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-white shadow-lg p-5 rounded relative group transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <h2 className="text-xl font-bold mt-3">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  Read More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
