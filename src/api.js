import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-board-game-reviews.onrender.com/api",
});

export const getReviews = (category) => {
  return reviewsApi
    .get(`/reviews`, { params: { category: category } })
    .then(({ data }) => {
      console.log(category);
      return data.reviews;
    });
};
export const getCategories = () => {
  return reviewsApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};
export const getReviewById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const getCommentsById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (review_id) => {
  return reviewsApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.updatedReview;
    });
};

export const postComment = (comment, review_id) => {
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};
