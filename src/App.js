import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { ReviewList } from "./Components/ReviewList";
import { useState } from "react";
import Home from "./Components/Home";
import { Nav } from "./Components/Nav";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home setReviews={setReviews} reviews={reviews} />}
        />

        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
