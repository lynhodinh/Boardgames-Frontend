import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { getReviews } from "../api";
import { useSearchParams } from "react-router-dom";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const category = searchParams.get("category");

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((reviews) => {
        setReviews(reviews);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  const filteredReviews = category
    ? reviews.filter((review) => review.category === category)
    : reviews;

  const capitalizedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Reviews";

  return (
    <article className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center h-full">
        {capitalizedCategory}
      </h2>

      {isLoading ? (
        <p className="text-xl font-medium text-gray-600">Loading reviews...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((review) => (
            <article
              key={review.review_id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <ReviewCard {...review} />
            </article>
          ))}
        </ul>
      )}
    </article>
  );
};
