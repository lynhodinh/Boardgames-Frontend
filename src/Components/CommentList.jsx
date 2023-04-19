import { useState,useEffect } from "react";
import {CommentCard} from "./CommentCard";
import { getCommentsById } from "../api";

export const CommentList = ({ review_id }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentsById(review_id).then((comments) => {
      setCommentList(comments);
    });
  });

  return (
    <section className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Comments:</h3>
      <ul className="divide-y divide-gray-200">
        {commentList.map((comment) => {
          return (
            <li key={comment.comment_id} className="py-4">
              <CommentCard {...comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};