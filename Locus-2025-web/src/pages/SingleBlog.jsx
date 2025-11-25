import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiClock, FiUser, FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const SingleBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Fetch all articles
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@locus-ioe")
      .then((res) => res?.json())
      .then((data) => {
        console.log("Fetched articles:", data);
        
        // Find the blog post that matches the slug
        const createSlug = (title) => {
          return title
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || '';
        };

        const foundBlog = data?.items?.find(
          (post) => createSlug(post?.title) === slug
        );

        if (foundBlog) {
          setBlog(foundBlog);
          
          // Get related blogs (exclude current blog)
          const related = data?.items
            ?.filter((post) => createSlug(post?.title) !== slug)
            .slice(0, 3);
          setRelatedBlogs(related || []);
        } else {
          // If blog not found, redirect to blogs page
          navigate('/blogs');
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
        navigate('/blogs');
      });
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="relative">
          <div className="border-8 border-zinc-700 border-t-[#00abe6] rounded-full w-20 h-20 animate-spin"></div>
          <div className="absolute inset-0 border-8 border-transparent border-t-[#48d0ff] rounded-full w-20 h-20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        <p className="mt-6 text-gray-400 animate-pulse">Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const formattedDate = new Date(blog?.pubDate)?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Extract first image from content
  const extractImageUrl = (content) => {
    const regex = /<img[^>]+src="([^">]+)"/;
    const match = regex?.exec(content);
    return match ? match[1] : null;
  };

  const featuredImage = blog?.thumbnail || extractImageUrl(blog?.content);

  // Remove only the first image to avoid duplication of featured image
  const removeFirstImage = (content) => {
    return content?.replace(/<img[^>]*>/, '') || '';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-16">
      {/* Back Button */}
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 text-[#00abe6] hover:text-[#48d0ff] transition-colors mb-8 group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </Link>

      {/* Header */}
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog?.title}
          </h1>
          
          {/* Categories */}
          {blog?.categories && blog?.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog?.categories?.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-[#00abe6]/20 text-[#00abe6] border border-[#00abe6]/30"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <FiUser className="text-[#00abe6]" />
              <span className="font-medium">{blog?.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-[#00abe6]" />
              <span>{formattedDate}</span>
            </div>
            <a
              href={blog?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00abe6] hover:text-[#48d0ff] transition-colors ml-auto"
            >
              <span>View on Medium</span>
              <FiExternalLink />
            </a>
          </div>
        </header>

        {/* Featured Image - Only show thumbnail if available */}
        {featuredImage && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={featuredImage}
              alt={blog?.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content - Keep all images except the first one */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#00abe6] prose-a:no-underline hover:prose-a:text-[#48d0ff] prose-a:transition-colors
            prose-strong:text-white prose-strong:font-bold
            prose-em:text-gray-300 prose-em:italic
            prose-code:text-[#00abe6] prose-code:bg-zinc-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700 prose-pre:rounded-lg prose-pre:p-4
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8 prose-img:w-full
            prose-blockquote:border-l-4 prose-blockquote:border-[#00abe6] prose-blockquote:pl-4 prose-blockquote:text-gray-400 prose-blockquote:italic
            prose-ul:text-gray-300 prose-ul:my-6
            prose-ol:text-gray-300 prose-ol:my-6
            prose-li:mb-2
            prose-hr:border-zinc-800 prose-hr:my-8
            prose-table:text-gray-300 prose-table:border-zinc-800
            prose-th:bg-zinc-800 prose-th:border-zinc-700 prose-th:p-3
            prose-td:border-zinc-700 prose-td:p-3"
          dangerouslySetInnerHTML={{ __html: removeFirstImage(blog?.content) || '' }}
        />
      </article>

      {/* Related Articles */}
      {relatedBlogs?.length > 0 && (
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs?.map((post) => {
              const createSlug = (title) => {
                return title
                  ?.toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '') || '';
              };
              
              const postSlug = createSlug(post?.title);
              const imageUrl = post?.thumbnail || extractImageUrl(post?.content);

              return (
                <Link
                  key={post?.guid}
                  to={`/blog/${postSlug}`}
                  className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-[#00abe6] transition-all hover:scale-105"
                >
                  <div className="aspect-video bg-zinc-800 overflow-hidden">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={post?.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl">
                        📝
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold line-clamp-2 group-hover:text-[#00abe6] transition-colors">
                      {post?.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;