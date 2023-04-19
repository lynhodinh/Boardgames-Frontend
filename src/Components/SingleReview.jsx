import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import { CommentList } from "./CommentList";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as api from "../api.js";

export const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);
  const [reviewVotes, setReviewVotes] = useState(0);
  const [error, setError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { review_id } = useParams();

  const addVote = (event) => {
    event.preventDefault();
    setHasClicked(true);
    setError(false);
    setReviewVotes((currentVotes) => {
      return currentVotes + 1;
    });
    api.patchVotes(review_id).catch((err) => {
      setHasClicked(false);
      setReviewVotes((currentVotes) => {
        return currentVotes - 1;
      });
      setError(true);
    });
    setIsLiked(true);
  };

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReviewVotes(review.votes);
      setReview(review);
    });
  }, [review_id]);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-screen-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4">{review.title}</h3>
        <img src={review.review_img_url} className="mb-4" alt={review.title} />
        <h4 className="text-lg font-medium mb-2">
          Review Owner: {review.owner}
        </h4>
        <p className="mb-4">{review.review_body}</p>
        <div className="flex items-center">
          <button
            onClick={addVote}
            disabled={hasClicked}
            className="border border-gray-400 rounded-full px-3 py-2 flex items-center justify-center hover:bg-gray-100 transition duration-200 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              className={`text-gray-400 mr-2 ${
                isLiked ? "text-green-500" : ""
              }`}
              onClick={addVote}
              onMouseEnter={() => setIsLiked(true)}
              onMouseLeave={() => setIsLiked(false)}
              style={{ cursor: "pointer" }}
              aria-label="Like"
            />
            Like
          </button>
          <p className="text-gray-600 ml-4 mb-0">Likes: {reviewVotes}</p>
        </div>
        {error ? (
          <p className="error">
            {" "}
            Your vote did not count. Please try again later
          </p>
        ) : null}
      </div>
      <section>
        <CommentList review_id={review_id} />
      </section>
    </section>
  );
};
