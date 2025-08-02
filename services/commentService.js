import axios from 'axios';

const API_BASE_URL = 'https://v2-db.vercel.app/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Public comment services
export const publicCommentService = {
  // Get comments for a blog
  getComments: async (blogId, params = {}) => {
    try {
      const response = await api.get(`/blogs/${blogId}/comments`, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch comments');
    }
  },

  // Add a new comment
  addComment: async (blogId, commentData) => {
    try {
      const response = await api.post(`/blogs/${blogId}/comments`, commentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add comment');
    }
  },

  // Like a comment
  likeComment: async (commentId) => {
    try {
      const response = await api.post(`/comments/${commentId}/like`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to like comment');
    }
  }
};

// Admin comment services
export const adminCommentService = {
  // Get all comments (admin view)
  getAllComments: async (params = {}) => {
    try {
      const response = await api.get('/admin/comments', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch comments');
    }
  },

  // Update comment status
  updateCommentStatus: async (commentId, status) => {
    try {
      const response = await api.put(`/admin/comments/${commentId}`, { status });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update comment');
    }
  },

  // Delete comment
  deleteComment: async (commentId) => {
    try {
      const response = await api.delete(`/admin/comments/${commentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete comment');
    }
  }
};

// Utility functions
export const commentUtils = {
  // Format date
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Format relative time
  formatRelativeTime: (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  },

  // Validate email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate comment content
  validateContent: (content) => {
    if (!content || content.trim().length === 0) {
      return { valid: false, message: 'Comment cannot be empty' };
    }
    if (content.trim().length > 1000) {
      return { valid: false, message: 'Comment cannot exceed 1000 characters' };
    }
    return { valid: true };
  }
};

export default {
  public: publicCommentService,
  admin: adminCommentService,
  utils: commentUtils
}; 