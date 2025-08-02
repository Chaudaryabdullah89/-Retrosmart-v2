import React, { useState, useEffect } from 'react';
import { publicCommentService, commentUtils } from '../services/commentService';

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: ''
  });

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await publicCommentService.getComments(blogId);
      setComments(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const contentValidation = commentUtils.validateContent(formData.content);
    if (!contentValidation.valid) {
      setError(contentValidation.message);
      return;
    }

    if (!commentUtils.validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      
      const commentData = {
        ...formData,
        parentComment: replyTo
      };
      
      await publicCommentService.addComment(blogId, commentData);
      
      // Reset form
      setFormData({ author: '', email: '', content: '' });
      setShowCommentForm(false);
      setReplyTo(null);
      
      // Refresh comments
      await fetchComments();
      
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = async (commentId) => {
    try {
      await publicCommentService.likeComment(commentId);
      // Update the comment's like count locally
      setComments(prevComments => 
        prevComments.map(comment => 
          comment._id === commentId 
            ? { ...comment, likes: (comment.likes || 0) + 1 }
            : comment
        )
      );
    } catch (err) {
      console.error('Error liking comment:', err);
    }
  };

  const handleReply = (commentId) => {
    setReplyTo(commentId);
    setShowCommentForm(true);
    // Focus on the comment form
    setTimeout(() => {
      document.getElementById('comment-content').focus();
    }, 100);
  };

  const cancelReply = () => {
    setReplyTo(null);
    setShowCommentForm(false);
    setFormData({ author: '', email: '', content: '' });
  };

  const renderComment = (comment, isReply = false) => (
    <div key={comment._id} className={`${isReply ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-800">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {commentUtils.formatRelativeTime(comment.createdAt)}
              </span>
            </div>
            <p className="text-gray-700 mb-3">{comment.content}</p>
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => handleLike(comment._id)}
                className="flex items-center gap-1 text-gray-500 hover:text-indigo-600 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                {comment.likes || 0}
              </button>
              {!isReply && (
                <button
                  onClick={() => handleReply(comment._id)}
                  className="text-gray-500 hover:text-indigo-600 transition"
                >
                  Reply
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Render replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-3">
            {comment.replies.map(reply => renderComment(reply, true))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      {showCommentForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          {replyTo && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-800">
                Replying to a comment
                <button
                  onClick={cancelReply}
                  className="ml-2 text-blue-600 hover:text-blue-800 underline"
                >
                  Cancel reply
                </button>
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="comment-content" className="block text-sm font-medium text-gray-700 mb-1">
                Comment *
              </label>
              <textarea
                id="comment-content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Share your thoughts..."
                required
              />
              <div className="text-xs text-gray-500 mt-1">
                {formData.content.length}/1000 characters
              </div>
            </div>
            
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition"
              >
                {submitting ? 'Submitting...' : 'Post Comment'}
              </button>
              {!replyTo && (
                <button
                  type="button"
                  onClick={() => setShowCommentForm(false)}
                  className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Show Comment Form Button */}
      {!showCommentForm && (
        <button
          onClick={() => setShowCommentForm(true)}
          className="mb-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add a Comment
        </button>
      )}

      {/* Comments List */}
      {loading ? (
        <div className="text-center py-8">
          <div className="text-gray-500">Loading comments...</div>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-500">No comments yet. Be the first to comment!</div>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map(comment => renderComment(comment))}
        </div>
      )}
    </div>
  );
};

export default CommentSection; 