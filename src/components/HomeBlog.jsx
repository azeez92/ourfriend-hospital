import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Get The Exercise Limited Mobility",
    date: "December 17, 2021",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    title: "Transfusion Strategy And Heart Surgery",
    date: "December 5, 2021",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Latest Equipment For The Heart Treatment",
    date: "December 5, 2021",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const HomeBlog = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full uppercase">
            Our Blog
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            See Our Latest Blog
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Date Badge */}
                <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                  {blog.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    👤 Admin
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {blog.comments} Comments
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-5">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-blue-600 font-semibold text-sm uppercase tracking-wide hover:underline"
                >
                  Read More +
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <div className="text-center mt-14">
          <Link
            to="/news"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;