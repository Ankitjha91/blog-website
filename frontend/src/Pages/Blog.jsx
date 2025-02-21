import React from "react";
import { useParams, Link } from "react-router-dom";

// Blog data with correct images
const blogs = [
  {
    id: 1,
    title: "The Future of Real Estate Investments",
    image: "https://picsum.photos/id/200/600/400",
    description: "Explore the benefits and risks of investing in real estate...",
    createdon: "24 Jan, 2025",
    comments: 5,
    content: `
      The real estate market has always been one of the most promising investment opportunities. 
      With the increasing global population and demand for urban spaces, real estate investments 
      remain a lucrative option for investors. However, the future of real estate is changing rapidly 
      with technology-driven innovations, economic fluctuations, and environmental concerns.
      
      One of the major trends in real estate is the shift towards smart homes. With the integration 
      of IoT devices, home automation is revolutionizing how people interact with their living spaces. 
      Additionally, sustainability is becoming a priority, with developers focusing on green buildings, 
      energy-efficient designs, and eco-friendly materials.
      
      However, the risks in real estate investments include market fluctuations, economic downturns, 
      and policy changes. To make informed decisions, investors must analyze market trends, location 
      prospects, and long-term growth potential. As we move forward, digital platforms and AI-driven 
      analytics will further influence how properties are bought and sold.
    `,
  },
  {
    id: 2,
    title: "Travel Hacks You Must Know!",
    image: "https://picsum.photos/id/208/600/400",
    description: "Discover secret travel hacks to save money and time...",
    createdon: "24 Jan, 2025",
    comments: 3,
    content: `
      Traveling can be one of the most enriching experiences in life, but it can also be expensive 
      and stressful if not planned properly. Here are some of the best travel hacks that can help 
      you save money, time, and effort while ensuring a smooth and enjoyable trip.
      
      First, always book flights and hotels in advance. Airlines and hotels often offer better deals 
      months before your travel date. Also, using incognito mode while searching for tickets prevents 
      websites from tracking your searches and increasing prices.
      
      Packing efficiently is another key to hassle-free travel. Rolling your clothes instead of 
      folding them saves space and minimizes wrinkles. Carry a power bank and a universal adapter 
      to avoid charging issues. Another crucial tip is to download offline maps and language 
      translation apps to navigate easily in foreign countries.
      
      Lastly, for budget-friendly trips, opt for local food stalls rather than expensive restaurants, 
      use public transport instead of taxis, and explore free attractions like museums, parks, and 
      cultural sites. By following these travel hacks, you can enhance your travel experience and make 
      the most out of every adventure.
    `,
  },
  
  {
    id: 4,
    title: "Understanding Stock Market Trends",
    image: "https://picsum.photos/id/206/600/400",
    description: "A deep dive into how market trends shape investments...",
    createdon: "24 Jan, 2025",
    comments: 4,
    content: `
      The real estate market has always been one of the most promising investment opportunities. 
      With the increasing global population and demand for urban spaces, real estate investments 
      remain a lucrative option for investors. However, the future of real estate is changing rapidly 
      with technology-driven innovations, economic fluctuations, and environmental concerns.
      
      One of the major trends in real estate is the shift towards smart homes. With the integration 
      of IoT devices, home automation is revolutionizing how people interact with their living spaces. 
      Additionally, sustainability is becoming a priority, with developers focusing on green buildings, 
      energy-efficient designs, and eco-friendly materials.
      
      However, the risks in real estate investments include market fluctuations, economic downturns, 
      and policy changes. To make informed decisions, investors must analyze market trends, location 
      prospects, and long-term growth potential. As we move forward, digital platforms and AI-driven 
      analytics will further influence how properties are bought and sold.
    `,
  },
  
  {
    id: 6,
    title: "How to Start a Profitable Online Business",
    image: "https://picsum.photos/id/204/600/400",
    description: "Step-by-step guide to launching an online business...",
    createdon: "24 Jan, 2025",
    comments: 2,
    content: "Thinking of starting an online business? Here’s a step-by-step guide...",
  },
  {
    id: 7,
    title: "Best Tips for Work-Life Balance",
    image: "https://picsum.photos/id/203/600/400",
    description: "Learn how to manage work and personal life effectively...",
    createdon: "24 Jan, 2025",
    comments: 5,
    content: "Maintaining work-life balance is crucial. Learn how to master it...",
  },
  {
    id: 8,
    title: "Healthy Eating: Myths vs. Facts",
    image: "https://picsum.photos/id/202/600/400",
    description: "Debunking common myths about healthy diets...",
    createdon: "24 Jan, 2025",
    comments: 8,
    content: "There’s a lot of misinformation about healthy eating. Let’s clear the myths...",
  },
  {
    id: 9,
    title: "The Impact of Politics on the Economy",
    image: "https://picsum.photos/id/201/600/400",
    description: "How political decisions shape global markets...",
    createdon: "24 Jan, 2025",
    comments: 3,
    content: "Politics and economy go hand in hand. See how policies shape global markets...",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-red-500 text-xl">Blog not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="container mx-auto max-w-3xl bg-white shadow-lg p-6 rounded">
        {/* Blog Image */}
        <img src={blog.image} alt={blog.title} className="w-full rounded-md mb-5" />

        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>

        {/* Blog Meta Information */}
        <p className="text-gray-600 mt-2">{blog.createdon} • {blog.comments} Comments</p>

        {/* Blog Content */}
        <p className="mt-5 text-lg text-gray-700 leading-relaxed">{blog.content}</p>

        {/* Back to Home Button */}
        <Link to="/" className="block text-blue-500 mt-5 text-lg">← Back to Home</Link>
      </div>
    </div>
  );
};

export default BlogDetails;
