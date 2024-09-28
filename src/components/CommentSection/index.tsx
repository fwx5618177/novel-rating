import ActionButtons from '@components/ActionButtons';
import Pagination from '@components/Pagination';
import { commentsData } from '@mocks/comment';
import React, { useState, useRef } from 'react';

import styles from './index.module.scss';

export interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  onClose: () => void;
}

const commentsPerPage = 5;

const CommentSection: React.FC<CommentSectionProps> = ({ onClose }) => {
  const [comments, setComments] = useState<Comment[]>(commentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<Comment | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // 提交评论
  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const newCommentData: Comment = {
        id: comments.length + 1,
        author: '当前用户',
        avatar: '/avatar.jpg',
        content: newComment,
        time: new Date().toLocaleString(),
        replies: [],
      };
      setComments([newCommentData, ...comments]);
      setNewComment('');
      setReplyTo(null);
    }
  };

  // 点击回复时，将被回复的作者名自动添加到 textarea 中，并 focus
  const handleReplyClick = (comment: Comment) => {
    setReplyTo(comment);
    setNewComment(`@${comment.author}: `);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // 展示当前页的评论
  const currentComments = comments
    .flatMap((comment) => [comment, ...(comment.replies || [])])
    .slice((currentPage - 1) * commentsPerPage, currentPage * commentsPerPage);

  return (
    <div className={styles.commentSection}>
      <div className={styles.commentInput}>
        {replyTo && (
          <div className={styles.replyingTo}>
            正在回复 <strong>{replyTo.author}</strong>
          </div>
        )}
        <textarea
          ref={textareaRef}
          placeholder="发布你的评论..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleSubmitComment} className={styles.submitButton}>
          发布
        </button>
      </div>

      <div className={styles.commentsList}>
        {currentComments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentHeader}>
              <img
                src={comment.avatar}
                alt={comment.author}
                className={styles.avatar}
                onClick={() => handleReplyClick(comment)}
              />
              <button role="button" onClick={() => handleReplyClick(comment)}>
                {comment.author}
              </button>
              <span className={styles.time}>{comment.time}</span>
            </div>
            <p>{comment.content}</p>
            <ActionButtons
              onLike={() => console.log('赞')}
              onDislike={() => console.log('踩')}
              onComment={() => handleReplyClick(comment)}
              onShare={() => console.log('分享')}
              showReply={false}
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <button onClick={onClose} className={styles.closeButton}>
        收起评论
      </button>
    </div>
  );
};

export default CommentSection;
