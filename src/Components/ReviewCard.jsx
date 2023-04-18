import { Link } from "react-router-dom";

// export const ReviewCard = ({ review }) => {
//     // const votes = review?.votes !== undefined ? review.votes : 0;
//     // const hasImg = review?.review_img_url !== undefined;
//     return (
//         <li className="review-list">
//         {/* <p>Votes: {votes}</p> */}
//         {/* {hasImg ? ( */}
//           {/* <img src={review.review_img_url} alt={review.title} /> */}
//         {/* // ) : (
//         //   <div>No Image Available</div>
//         // )} */}
//         <h4 className="text-sm font-medium text-gray-900">{review.title}</h4>
//         <h5>Review by: {review.owner}</h5>
//         <p>Comment Count: {review.comment_count}</p>
//         {/* <Link
//           to={`/reviews/${review?.review_id}`}
//           className="underline text-blue-500 hover:text-blue-700"
//         >
//           Read More
//         </Link> */}
//       </li>
//     );
//   };

export const ReviewCard = (review) => {
    return (
      <li className="review-list">
        <p>Votes: {review.votes}</p>
        <img src={review.review_img_url} alt={review.title} />
        <h4 className="text-sm font-medium text-gray-900">{review.title}</h4>
        <h5>Review by: {review.owner}</h5>
        <p>Comment Count: {review.comment_count}</p>
        <Link to={`/reviews/${review.review_id}`}>
  <button className="underline text-blue-500 hover:text-blue-700" type="button">
    Read More
  </button>
</Link>
      </li>
    );
  };