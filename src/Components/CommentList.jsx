import { useState, useEffect } from "react";
import { CommentCard } from "./CommentCard";
import { getCommentsById } from "../api";
import { CommentForm } from "./CommentForm";

export const CommentList = ({ review_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successfulPost, setSuccessfulPost] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCommentsById(review_id).then((comments) => {
      setCommentList(comments);
      setLoading(false);
    });
  }, [review_id]);

  const handleCommentSubmit = (newComment) => {
    setCommentList((commentList) => {
      if (commentList.length === 0) {
        return [newComment];
      }
      return [newComment, ...commentList];
    });
    setSuccessfulPost(true);
  };

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <section className="mt-8">
      <header>
        <h2 className="text-2xl font-bold mb-4">Comments:</h2>
      </header>
      {commentList.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {commentList.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard {...comment} />
              </li>
            );
          })}
        </ul>
      ) : (
        <header>
          <h3 className="text-gray-500">No comments yet!</h3>
        </header>
      )}

      {successfulPost ? (
        <div className="mt-8">
          <p className="text-green-500">Thank you for commenting!</p>
        </div>
      ) : (
        <CommentForm
          review_id={review_id}
          onCommentSubmit={handleCommentSubmit}
        />
      )}
    </section>
  );
};
