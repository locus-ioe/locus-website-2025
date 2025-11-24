import { useState, useEffect } from "react";
import { FiClock, FiUser, FiArrowUpRight } from "react-icons/fi";

// Utility function to extract the first image URL from HTML content
const extractImageUrl = (content) => {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = regex.exec(content);
  return match ? match[1] : null;
};

// Utility function to strip HTML and get excerpt
const getExcerpt = (content, maxLength = 150) => {
  const text = content.replace(/<[^>]*>/g, '');
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// Blog Post Card Component
const BlogPost = ({ title, date, link, author, imageUrl, categories, content }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const excerpt = getExcerpt(content);

  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 rounded-xl overflow-hidden hover:border-[#00abe6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00abe6]/10">
      {/* Image Container */}
      <div className="relative aspect-[16/9] bg-zinc-800 overflow-hidden">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60"></div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="text-zinc-600 text-6xl">📝</div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#00abe6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <FiArrowUpRight className="text-white text-4xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
        </div>

        {/* Categories Badges */}
        {categories && categories.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#00abe6] text-white backdrop-blur-sm shadow-lg"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00abe6] transition-colors duration-300">
            {title}
          </h3>
        </a>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiUser className="text-[#00abe6]" />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiClock className="text-[#00abe6]" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Read More Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-[#00abe6] font-medium text-sm group-hover:gap-3 transition-all duration-300"
        >
          Read Article
          <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00abe6]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeevan.neupane003"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched articles:", data);
        setArticles(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="relative">
          <div className="border-8 border-zinc-700 border-t-[#00abe6] rounded-full w-20 h-20 animate-spin"></div>
          <div className="absolute inset-0 border-8 border-transparent border-t-[#48d0ff] rounded-full w-20 h-20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        <p className="mt-6 text-gray-400 animate-pulse">Loading blogs...</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center mt-20 px-4">
        <div className="text-8xl mb-6">📭</div>
        <h1 className="text-3xl md:text-4xl text-red-400 font-bold mb-4">
          Articles Not Found
        </h1>
        <p className="text-gray-400">Unable to fetch articles at this moment. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-12 md:mt-20 px-4 mb-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[#48d0ff] text-4xl md:text-6xl mb-4 font-bold">
          <span className="text-white">LOCUS</span> Blogs
        </h1>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-[80%] mx-auto mb-6"></div>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#00abe6]">{articles.length}</p>
            <p className="text-gray-400 text-sm">Articles</p>
          </div>
          <div className="w-px bg-zinc-700"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#00abe6]">Latest</p>
            <p className="text-gray-400 text-sm">Updates</p>
          </div>
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our collection of insightful articles, tutorials, and updates from the LOCUS community
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((post) => {
          const imageUrl = post.thumbnail || extractImageUrl(post.content);

          return (
            <BlogPost
              key={post.guid}
              title={post.title}
              date={post.pubDate}
              link={post.link}
              author={post.author}
              imageUrl={imageUrl}
              categories={post.categories}
              content={post.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;