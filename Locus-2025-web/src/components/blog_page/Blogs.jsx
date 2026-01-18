import { useState, useEffect } from "react";
import { FiClock, FiUser, FiArrowUpRight, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import default_image from "../../../public/assets/blog/blog_default.png";

// Utility function to extract the first image URL from HTML content
const extractImageUrl = (content) => {
  const regex = /<img[^>]+src="([^">]+)"/;
  const match = regex?.exec(content);
  return match ? match[1] : null;
};

// Utility function to check if URL is a valid image
const isValidImageUrl = (url) => {
  if (!url) return false;
  
  // Check if URL ends with common image formats
  const imageFormats = /\.(jpg|jpeg|png|gif|webp|bmp|svg|ico)(\?.*)?$/i;
  return imageFormats?.test(url);
};

// Utility function to strip HTML and get excerpt
const getExcerpt = (content, maxLength = 150) => {
  const text = content?.replace(/<[^>]*>/g, "") || "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// Utility function to create URL-friendly slug from title
const createSlug = (title) => {
  return title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "";
};

// Blog Post Card Component
const BlogPost = ({
  title,
  date,
  guid,
  author,
  imageUrl,
  categories,
  content,
}) => {
  const formattedDate = new Date(date)?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const excerpt = getExcerpt(content);
  const slug = createSlug(title);

  // Use default image if no image is provided or if URL is not a valid image
  const displayImage = isValidImageUrl(imageUrl) ? imageUrl : default_image;

  console.log("BlogPost Image URL:", imageUrl, "Is Valid:", isValidImageUrl(imageUrl));

  return (
    <Link
      to={`/blog/${slug}`}
      state={{ title, date, author, imageUrl, categories, content, guid }}
      className='group relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 rounded-xl overflow-hidden hover:border-[#48d0ff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105 block'
    >
      {/* Image Container */}
      <div className='relative aspect-[16/9] bg-gray-800 overflow-hidden'>
        <img
          src={displayImage}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
          onError={(e) => {
            e.target.src = default_image;
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>

        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-[#48d0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <FiArrowUpRight className='text-white text-3xl sm:text-4xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300' />
        </div>

        {/* Categories Badges */}
        {categories && categories?.length > 0 && (
          <div className='absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2'>
            {categories?.slice(0, 2)?.map((category, index) => (
              <span
                key={index}
                className='px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[#48d0ff] text-white backdrop-blur-sm shadow-lg'
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-5 sm:p-6'>
        <h3 className='text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#48d0ff] transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-sm text-gray-400 mb-4 line-clamp-3'>{excerpt}</p>

        {/* Meta Info */}
        <div className='flex items-center justify-between pt-4 border-t border-gray-700/50'>
          <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-400'>
            <FiUser className='text-[#48d0ff] flex-shrink-0' />
            <span className='font-medium truncate'>{author}</span>
          </div>
          <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-400 flex-shrink-0'>
            <FiClock className='text-[#48d0ff]' />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className='absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#48d0ff]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
    </Link>
  );
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@locus-ioe"
    )
      .then((res) => res?.json())
      .then((data) => {
        console.log("Fetched articles:", data);
        setArticles(data?.items || []);
        setFilteredArticles(data?.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  // Handle search filtering
  const handleSearch = (e) => {
    const query = e?.target?.value || "";
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles?.filter(
        (article) =>
          article?.title?.toLowerCase()?.includes(query?.toLowerCase()) ||
          article?.author?.toLowerCase()?.includes(query?.toLowerCase()) ||
          article?.categories?.some((cat) =>
            cat?.toLowerCase()?.includes(query?.toLowerCase())
          )
      );
      setFilteredArticles(filtered);
    }
  };

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='relative'>
          <div className='border-8 border-zinc-700 border-t-[#00abe6] rounded-full w-20 h-20 animate-spin'></div>
          <div
            className='absolute inset-0 border-8 border-transparent border-t-[#48d0ff] rounded-full w-20 h-20 animate-spin'
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>
        <p className='mt-6 text-gray-400 animate-pulse'>Loading blogs...</p>
      </div>
    );
  }

  if (articles?.length === 0) {
    return (
      <div className='text-center mt-20 px-4'>
        <div className='text-8xl mb-6'>📭</div>
        <h1 className='text-3xl md:text-4xl text-red-400 font-bold mb-4'>
          Articles Not Found
        </h1>
        <p className='text-gray-400'>
          Unable to fetch articles at this moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12 sm:py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight'>
            <span className='text-white'>LOCUS </span>
            <span className='text-[#48d0ff]'>Blogs</span>
          </h1>
          <div className='flex justify-center mt-6 sm:mt-8 mb-8'>
            <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
          </div>

          {/* Search Bar */}
          <div className='max-w-2xl mx-auto mb-6 sm:mb-8'>
            <div className='relative'>
              <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#48d0ff] text-lg sm:text-xl' />
              <input
                type='text'
                placeholder='Search articles by title, author, or category...'
                value={searchQuery}
                onChange={handleSearch}
                className='w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-900/80 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#48d0ff] transition-all duration-300 text-sm sm:text-base'
              />
            </div>
          </div>

          <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            Explore our collection of insightful articles, tutorials, and updates from the LOCUS community
          </p>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <p className='text-center text-sm sm:text-base text-gray-400 mb-8'>
            Found <span className='text-[#48d0ff] font-semibold'>{filteredArticles?.length}</span> article{filteredArticles?.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Articles Grid */}
        {filteredArticles?.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {filteredArticles?.map((post) => {
              const imageUrl = post?.thumbnail || extractImageUrl(post?.content);
              return (
                <BlogPost
                  key={post?.guid}
                  title={post?.title}
                  date={post?.pubDate}
                  guid={post?.guid}
                  author={post?.author}
                  imageUrl={imageUrl}
                  categories={post?.categories}
                  content={post?.content}
                />
              );
            })}
          </div>
        ) : (
          <div className='text-center py-16 sm:py-20'>
            <div className='text-5xl sm:text-6xl mb-4'>🔍</div>
            <p className='text-gray-400 text-base sm:text-lg'>
              No articles found matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;