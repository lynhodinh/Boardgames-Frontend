import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-board-game-reviews.onrender.com/api",
});

export const getReviews = () => {
  return reviewsApi.get(`/reviews`).then(({ data }) => {
    return data.reviews;
  });
};
