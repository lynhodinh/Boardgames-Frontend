import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  {getReviewById}  from "../api";

export const SingleReview = () => {
    const [review, setReview] = useState([]);
    const { review_id } = useParams();
  
    useEffect(() => {
      console.log(review_id,"review-id")
      getReviewById(review_id).then((review) => {
        setReview(review);
      });
    }, [review_id]);
    return (
      <section className="bg-gray-100 py-10">
        <div className="max-w-screen-md mx-auto p-6 bg-white rounded-md shadow-md">
          <h3 className="text-2xl font-bold mb-4">{review.title}</h3>
          <img src={review.review_img_url} className="mb-4" alt={review.title} />
          <h4 className="text-lg font-medium mb-2">Review Owner: {review.owner}</h4>
          <p className="mb-4">{review.review_body}</p>
          <p className="text-gray-600 mb-2">Votes: {review.votes}</p>
          <p className="text-gray-600 mb-2">Comment Count: {review.comment_count}</p>
        </div>
      </section>
    );
  };

