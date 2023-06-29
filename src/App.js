import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { ReviewList } from "./Components/ReviewList";
import { Nav } from "./Components/Nav";
import { SingleReview } from "./Components/SingleReview";
import { CategoriesNav } from "./Components/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ReviewList />
            </div>
          }
        />
        <Route
          path="/reviews"
          element={
            <div>
              <ReviewList />
            </div>
          }
        ></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route
          path="/categories"
          element={
            <div>
              <CategoriesNav />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
