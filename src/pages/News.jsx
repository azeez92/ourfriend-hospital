import { useState } from "react";
import about from "../assets/about-us.jpg.jpeg";
import PageBanner from "../components/PageBanner";

export default function BlogNews() {
  const [activeTab, setActiveTab] = useState("blog");

  const blogPosts = [
    // Your original posts
    {
      id: 1,
      title: "5 Tips for Maintaining a Healthy Heart",
      category: "Cardiology",
      date: "March 1, 2026",
      image:
        "https://www.naturemade.com/cdn/shop/articles/how-to-improve-heart-health.jpg?v=1613593732",
      excerpt:
        "Discover essential lifestyle habits that can significantly improve your heart health and overall wellbeing.",
    },
    {
      id: 2,
      title: "Why Regular Medical Checkups Matter",
      category: "General Health",
      date: "February 20, 2026",
      image:
        "https://gidimedics.com/wp-content/uploads/2025/03/Why-Regular-Checkups-Matter.jpg",
      excerpt:
        "Routine checkups help detect early warning signs and prevent serious health complications.",
    },
    {
      id: 3,
      title: "Understanding MRI Diagnostics",
      category: "Diagnostics",
      date: "February 10, 2026",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "MRI technology provides advanced imaging solutions for accurate and reliable diagnosis.",
    },

    // Newly added from homepage
    {
      id: 4,
      title: "Get The Exercise Limited Mobility",
      category: "Rehabilitation",
      date: "December 17, 2021",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 5,
      title: "Transfusion Strategy And Heart Surgery",
      category: "Cardiac Surgery",
      date: "December 5, 2021",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 6,
      title: "Latest Equipment For The Heart Treatment",
      category: "Cardiology",
      date: "December 5, 2021",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "New MRI Machine Installed",
      date: "March 2, 2026",
      image:
        "https://images.unsplash.com/photo-1580281657527-47a47e06a7f4?q=80&w=1200&auto=format&fit=crop",
      content:
        "We are proud to announce the installation of our latest MRI diagnostic equipment to improve patient care and accuracy.",
    },
    {
      id: 2,
      title: "Free Community Health Outreach",
      date: "February 25, 2026",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      content:
        "Join us this weekend for a free health outreach program offering basic checkups and consultations.",
    },
  ];

  return (
    <div className="bg-white">
     <PageBanner title="News"  image={about}/>

      {/* Tabs */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex space-x-6 border-b mb-10">
            <button
              onClick={() => setActiveTab("blog")}
              className={`pb-3 font-medium transition ${
                activeTab === "blog"
                  ? "border-b-2 border-teal-600 text-teal-600"
                  : "text-gray-500 hover:text-teal-600"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`pb-3 font-medium transition ${
                activeTab === "news"
                  ? "border-b-2 border-teal-600 text-teal-600"
                  : "text-gray-500 hover:text-teal-600"
              }`}
            >
              News
            </button>
          </div>

          {/* BLOG GRID */}
          {activeTab === "blog" && (
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <span className="text-sm text-teal-600 font-medium">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-800 mt-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">{post.date}</p>

                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <button className="mt-4 text-teal-600 font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* NEWS LIST */}
          {activeTab === "news" && (
            <div className="space-y-8">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-3 gap-6 items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover rounded-md"
                  />

                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">{item.date}</p>

                    <h3 className="text-2xl font-bold text-gray-800 mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {item.content}
                    </p>

                    <button className="mt-4 text-teal-600 font-medium hover:underline">
                      Read Full Story →
                    </button>
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