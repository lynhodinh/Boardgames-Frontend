export const ReviewCard = (review) => {
    return (
        <li className="review-list">
        <p>Votes: {review.votes}</p>
        <img src={review.review_img_url} alt="{review.title}"></img>
        <h4 className="text-sm font-medium text-gray-900">{review.title}</h4>
        <h5 className="Header5">Review by: {review.owner}</h5>
        <p>Comment Count: {review.comment_count}</p>
        </li>
    );
  };
  