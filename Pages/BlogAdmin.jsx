// ```jsx
// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthTest from '../components/AuthTest';
import { adminBlogService, blogUtils } from '../services/blogService';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
    fetchStats();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await adminBlogService.getAllBlogs({ 
        page: currentPage, 
        limit: 10 
      });
      setPosts(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await adminBlogService.getBlogStats();
      setStats(response.data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    try {
      await adminBlogService.deleteBlog(postId);
      // Refresh the posts list
      fetchPosts();
      fetchStats();
    } catch (err) {
      alert('Error deleting post: ' + err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/verification");
  };

  const getStatusBadge = (status) => {
    return status === 'published' 
      ? <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Published</span>
      : <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Draft</span>;
  };

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen mt-20 bg-gray-100 p-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-medium">Loading posts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/admin/createblog')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            + New Blog
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
          <p className="text-3xl font-bold text-indigo-600">{stats.totalPosts || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Published</h3>
          <p className="text-3xl font-bold text-green-600">{stats.publishedPosts || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Drafts</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.draftPosts || 0}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">Total Views</h3>
          <p className="text-3xl font-bold text-blue-600">{blogUtils.formatViews(stats.totalViews || 0)}</p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Posts List */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Click 
            <span
              className="text-indigo-600 hover:underline cursor-pointer"
              onClick={() => navigate('/admin/createblog')}
            > here</span> to create your first blog.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Title</th>
                    <th className="text-left py-3 px-4 font-semibold">Author</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Views</th>
                    <th className="text-left py-3 px-4 font-semibold">Created</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post._id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-800">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.excerpt}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{post.author}</td>
                      <td className="py-4 px-4">{getStatusBadge(post.status)}</td>
                      <td className="py-4 px-4 text-gray-600">{blogUtils.formatViews(post.views)}</td>
                      <td className="py-4 px-4 text-gray-600">{blogUtils.formatDate(post.createdAt)}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Link
                            to={`/admin/edit/${post._id}`}
                            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(post._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={!pagination.hasPrev}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <span className="px-4 py-2 text-gray-600">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={!pagination.hasNext}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Auth Test Component
      <div className="mt-8">
        <AuthTest />
      </div> */}
    </div>
  );
};

export default AdminDashboard;
// ```
