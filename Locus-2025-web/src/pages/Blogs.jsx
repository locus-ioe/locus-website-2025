import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blog data from JSON file
    const loadBlogs = async () => {
      try {
        const response = await fetch("/src/data/blogs.json");
        const blogData = await response.json();
        setBlogs(blogData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleBlogClick = (mediumUrl) => {
    window.open(mediumUrl, "_blank", "noopener,noreferrer");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full w-32 h-32 animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="w-full max-w-[1148px] mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-[#48d0ff]">LOCUS</span> Blogs
          </h1>
          <p className="text-lg text-white">
            Discover insights and stories from our community
          </p>
          <div className="mt-4 mb-4">
            <hr className="border-gray-300" />
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlogClick(blog.mediumUrl)}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-[#48d0ff]/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Blog Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#48d0ff] transition-colors duration-300 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <ExternalLink
                  size={20}
                  className="text-gray-400 group-hover:text-[#48d0ff] transition-colors duration-300 flex-shrink-0 ml-2"
                />
              </div>

              {/* Blog Description */}
              <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                {blog.description}
              </p>

              {/* Blog Footer */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{formatDate(blog.publishedDate)}</span>
                <span className="text-[#48d0ff] group-hover:text-[#48d0ff]/80 transition-colors duration-300">
                  Read on Medium →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No Blogs Available
            </h3>
            <p className="text-gray-300">
              Check back later for new blog posts!
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to contribute?
            </h3>
            <p className="text-gray-300 mb-6">
              Are you a member of the LOCUS community with insights to share?
              We&apos;d love to feature your story on our blog!
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-[#48d0ff] text-white font-semibold rounded-lg hover:bg-[#48d0ff]/80 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
