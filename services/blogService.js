import axios from 'axios';

const API_BASE_URL = 'https://retro-bd.vercel.app//api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Public blog services
export const publicBlogService = {
  // Get all published blogs with pagination and filters
  getBlogs: async (params = {}) => {
    try {
      const response = await api.get('/blogs', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
    }
  },

  // Get single blog by slug
  getBlogBySlug: async (slug) => {
    try {
      const response = await api.get(`/blogs/${slug}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blog');
    }
  },

  // Search blogs
  searchBlogs: async (searchTerm) => {
    try {
      const response = await api.get('/blogs', { 
        params: { search: searchTerm } 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search blogs');
    }
  },

  // Get blogs by tag
  getBlogsByTag: async (tag) => {
    try {
      const response = await api.get('/blogs', { 
        params: { tag } 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs by tag');
    }
  }
};

// Admin blog services
export const adminBlogService = {
  // Get all blogs (admin view)
  getAllBlogs: async (params = {}) => {
    try {
      const response = await api.get('/admin/blogs', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
    }
  },

  // Get blog by ID (for editing)
  getBlogById: async (id) => {
    try {
      const response = await api.get(`/blogs/id/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blog');
    }
  },

  // Create new blog
  createBlog: async (blogData) => {
    try {
      const response = await api.post('/admin/blogs', blogData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create blog');
    }
  },

  // Update blog
  updateBlog: async (id, blogData) => {
    try {
      const response = await api.put(`/admin/blogs/${id}`, blogData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update blog');
    }
  },

  // Delete blog
  deleteBlog: async (id) => {
    try {
      const response = await api.delete(`/admin/blogs/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete blog');
    }
  },

  // Get blog statistics
  getBlogStats: async () => {
    try {
      const response = await api.get('/admin/blogs/stats');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blog statistics');
    }
  }
};

// Utility functions
export const blogUtils = {
  // Format date
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Generate excerpt from content
  generateExcerpt: (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  },

  // Format read time
  formatReadTime: (minutes) => {
    if (minutes < 1) return 'Less than 1 min read';
    return `${minutes} min read`;
  },

  // Format view count
  formatViews: (views) => {
    if (views < 1000) return views.toString();
    if (views < 1000000) return `${(views / 1000).toFixed(1)}K`;
    return `${(views / 1000000).toFixed(1)}M`;
  }
};

export default {
  public: publicBlogService,
  admin: adminBlogService,
  utils: blogUtils
}; 