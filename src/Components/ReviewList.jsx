import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { getReviews } from "../api";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <article className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center h-full">
        Review List
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <li
            key={review.review_id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
    </article>
  );
};
