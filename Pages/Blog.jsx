import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopCompnentHero from '../components/TopCompnentHero';
import { publicBlogService, blogUtils } from '../services/blogService';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [selectedTag, setSelectedTag] = useState('');

  const availableTags = blogs
    .flatMap(blog => blog.tags  || 'All')
    .filter((tag, index, self) => tag && self.indexOf(tag) === index);

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line
  }, [currentPage, searchTerm, selectedTag]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = {
        page: currentPage,
        limit: 12,
        ...(searchTerm && { search: searchTerm }),
        ...(selectedTag && { tag: selectedTag }),
      };
      const response = await publicBlogService.getBlogs(params);
      setBlogs(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setCurrentPage(1);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopCompnentHero
        title="Our Blog"
        description="Stay updated with the latest insights on energy efficiency, insulation tips, and more."
        image="https://www.searchenginejournal.com/wp-content/uploads/2022/07/blogging-1600-x-840-px-62c2cd930fc39-sej.png"
      />

      <main className="container mx-auto px-4 py-12 flex-1">
        {/* Search and Tag Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <form
            onSubmit={handleSearch}
            className="w-full md:w-1/2 flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-sm"
          >
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </form>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-1 rounded-full border text-sm transition ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
            {(searchTerm || selectedTag) && (
              <button
                onClick={clearFilters}
                className="ml-2 px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Error/Loading/Empty States */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-center">
            {error}
          </div>
        )}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <svg
              className="animate-spin h-8 w-8 text-indigo-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="text-gray-500 text-lg">Loading blogs...</span>
          </div>
        )}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-lg">
            {searchTerm || selectedTag
              ? 'No blogs match your criteria.'
              : 'No blogs available yet.'}
          </div>
        )}

        {/* Blog Grid */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-xs text-gray-400 mb-2 gap-2">
                    <span>{blogUtils.formatDate(blog.createdAt)}</span>
                    <span>•</span>
                    <span>{blogUtils.formatReadTime(blog.readTime)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm hover:bg-indigo-100 transition"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(pagination.currentPage - 1)}
              disabled={!pagination.hasPrev}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
            <span className="text-gray-500 text-sm">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(pagination.currentPage + 1)}
              disabled={!pagination.hasNext}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <footer className="bg-gray-100 border-t mt-16 py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Have Questions?</h2>
          <p className="mb-6 text-gray-600">
            Contact our experts to learn how we can help you save energy and money.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
