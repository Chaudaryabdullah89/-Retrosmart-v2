// src/components/BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { publicBlogService, blogUtils } from '../services/blogService';
import CommentSection from '../components/CommentSection';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await publicBlogService.getBlogBySlug(slug);
      setBlog(response.data);
      
      // Fetch related blogs (same tags or recent posts)
      if (response.data.tags && response.data.tags.length > 0) {
        const relatedResponse = await publicBlogService.getBlogsByTag(response.data.tags[0]);
        setRelatedBlogs(relatedResponse.data.filter(b => b.slug !== slug).slice(0, 3));
      } else {
        // If no tags, get recent posts
        const recentResponse = await publicBlogService.getBlogs({ limit: 3 });
        setRelatedBlogs(recentResponse.data.filter(b => b.slug !== slug));
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching blog:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 mt-20 min-h-screen">
        <div className="container mx-auto px-6 py-4">
          <Link to="/blog" className="text-indigo-500 hover:underline font-medium">
            ← Back to all posts
          </Link>
        </div>
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="text-xl font-medium">Loading blog post...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-gray-100 mt-20 min-h-screen">
        <div className="container mx-auto px-6 py-4">
          <Link to="/blog" className="text-indigo-500 hover:underline font-medium">
            ← Back to all posts
          </Link>
        </div>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="text-gray-500 text-lg mb-4">
              {error || 'Blog post not found'}
            </div>
            <button
              onClick={() => navigate('/blog')}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white mt-20 text-gray-700 font-sans">
    {/* Back Link */}
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Link to="/blog" className="text-indigo-500 hover:underline text-sm font-medium">
        ← Back to all posts
      </Link>
    </div>

    {/* Layout */}
    <div className="max-w-6xl mx-auto px-4 lg:grid lg:grid-cols-12 lg:gap-24 ">
      {/* Main content */}
      <div className="lg:col-span-8">
        {blog.image && (
          <div
            className="w-full h-64 sm:h-96 rounded-xl bg-center bg-cover mb-6 shadow-sm"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>

        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-4 mb-6">
          <span>By <strong className="text-gray-700">{blog.author}</strong></span>
          <span>• {blogUtils.formatDate(blog.createdAt)}</span>
          <span>• {blogUtils.formatReadTime(blog.readTime)}</span>
          <span>• {blogUtils.formatViews(blog.views)} views</span>
        </div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this post</h3>
          <div className="flex gap-3 flex-wrap">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Facebook
            </button>
            <button
              className="bg-sky-400 hover:bg-sky-500 text-white text-sm px-4 py-2 rounded-md transition"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(blog.title);
                window.open(
                  `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Twitter
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition"
              onClick={() => {
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(blog.title);
                window.open(
                  `https://wa.me/?text=${text}%20${url}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <CommentSection blogId={blog._id} />
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 mt-12 lg:mt-0 space-y-6">
        {/* Related Posts */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Posts</h3>
          {relatedBlogs.length > 0 ? (
            <ul className="space-y-4">
              {relatedBlogs.map((relatedBlog) => (
                <li key={relatedBlog._id} className="flex space-x-4">
                  {relatedBlog.image && (
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <Link
                      to={`/blog/${relatedBlog.slug}`}
                      className="text-sm font-medium text-gray-800 hover:text-indigo-500 line-clamp-2"
                    >
                      {relatedBlog.title}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">
                      {blogUtils.formatDate(relatedBlog.createdAt)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No related posts found.</p>
          )}
        </div>

        {/* Blog Stats */}
        {/* <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Blog Stats</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Read Time</span>
              <span className="font-medium">{blogUtils.formatReadTime(blog.readTime)}</span>
            </div>
            <div className="flex justify-between">
              <span>Views</span>
              <span className="font-medium">{blogUtils.formatViews(blog.views)}</span>
            </div>
            <div className="flex justify-between">
              <span>Published</span>
              <span className="font-medium">{blogUtils.formatDate(blog.createdAt)}</span>
            </div>
          </div>
        </div> */}
      </aside>
    </div>
  </div>
  );
};

export default BlogDetail;
