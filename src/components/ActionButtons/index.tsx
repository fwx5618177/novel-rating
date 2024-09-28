import CommentSection from '@components/CommentSection';
import React, { useState } from 'react';
import {
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaShareAlt,
} from 'react-icons/fa';

import styles from './index.module.scss';

interface ActionButtonsProps {
  initialLikes?: number;
  initialDislikes?: number;
  initialComments?: number;
  initialShares?: number;
  onLike?: () => void;
  onDislike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  showReply?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  initialLikes = 0,
  initialDislikes = 0,
  initialComments = 0,
  initialShares = 0,
  onLike = () => {},
  onDislike = () => {},
  onComment = () => {},
  onShare = () => {},
  showReply = true,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [hasRated, setHasRated] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleLike = () => {
    if (hasRated) return; // 如果已经点赞或踩过，则无法再点击
    if (disliked) {
      setDisliked(false);
      setDislikes(dislikes - 1);
    }
    setLiked(true);
    setHasRated(true); // 记录用户已进行评分
    setLikes(likes + 1);
    onLike();
  };

  const handleDislike = () => {
    if (hasRated) return; // 如果已经点赞或踩过，则无法再点击
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    }
    setDisliked(true);
    setHasRated(true); // 记录用户已进行评分
    setDislikes(dislikes + 1);
    onDislike();
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
    onComment();
  };

  return (
    <>
      <div className={styles.actionButtons}>
        <button
          className={liked ? styles.active : ''}
          onClick={handleLike}
          disabled={hasRated}
        >
          <FaThumbsUp /> 赞 {likes}
        </button>
        <button
          className={disliked ? styles.active : ''}
          onClick={handleDislike}
          disabled={hasRated}
        >
          <FaThumbsDown /> 踩 {dislikes}
        </button>
        <button onClick={handleToggleComments}>
          <FaComment /> 评论 {initialComments}
        </button>
        <button onClick={onShare}>
          <FaShareAlt /> 分享 {initialShares}
        </button>
      </div>
      {showReply && showComments && (
        <CommentSection onClose={() => setShowComments(false)} />
      )}
    </>
  );
};

export default ActionButtons;
