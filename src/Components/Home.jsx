import { ReviewList } from "./ReviewList";

const Home = ({reviews, setReviews})=> {
    return (
        <main>
          <ReviewList reviews={reviews} setReviews={setReviews} />
        </main>
      );
    } 

    export default Home 