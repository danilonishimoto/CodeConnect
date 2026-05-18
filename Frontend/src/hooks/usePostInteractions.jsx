import { useCallback, useEffect, useState } from "react";
import { http } from "../api";

export const usePostInteractions = (post) => {
  const [likes, setLikes] = useState(post?.likes || 0);
  const [comments, setComments] = useState(post?.comments || []);

  useEffect(() => {
    if (post) {
      setLikes(post?.likes || 0);
      setComments(post?.comments || []);
    }
  }, [post]);

  const handleLikeButton = useCallback(async (postId) => {
    try {
      await http.post(`blog-posts/${postId}/like`, {}).then(() => {
        setLikes((prev) => prev + 1);
      });
    } catch (error) {
      console.log(error);
    }
  });

  const handleNewComment = useCallback((comment) => {
    setComments((prev) => [comment, ...prev]);
  }, []);

  const handleDeleteComment = useCallback((commentId) => {
    const isConfirmed = confirm("Tem certeza que deseja remover o comentário");

    if (isConfirmed) {
      http.delete(`comments/${commentId}`).then(() => {
        setComments((prev) => prev.filter((c) => c.id != commentId));
      });
    }
  }, []);

  const updateComments = useCallback((newComments) => {
    setComments(newComments);
  }, []);

  const updateLikes = useCallback((newLikes) => {
    setLikes(newLikes);
  }, []);

  return {
    likes,
    handleLikeButton,
    comments,
    handleNewComment,
    handleDeleteComment,
    updateLikes, 
    updateComments
  };
};
