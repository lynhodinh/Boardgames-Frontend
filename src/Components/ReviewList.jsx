import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { getReviews } from "../api";
import { useSearchParams } from "react-router-dom";
import { CategoriesNav } from "./Categories";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category, setReviews]);

  const filteredReviews = category
    ? reviews.filter((review) => review.category === category)
    : reviews;

  return (
    <article className="container mx-auto py-6">
      <aside className="fixed left-0">
        <CategoriesNav />
      </aside>
      <div className="ml-48">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center h-full">
          Review List
        </h2>

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
      </div>
    </article>
  );
};
