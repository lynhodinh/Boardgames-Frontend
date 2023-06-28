import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

export const CategoriesNav = () => {
  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    getCategories().then((allCategories) => {
      console.log(allCategories);
      setCategories(allCategories);
    });
  }, [setCategories]);
  return (
    <aside>
      <Link to="/">
        <h3 className="font-medium mb-1">All reviews</h3>
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          to={`/?category=${category.slug}`}
          className="block mb-2 hover:text-blue-500"
        >
          <h3 className="font-medium">{category.slug}</h3>
        </Link>
      ))}
    </aside>
  );
};

// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Selected categories:", selectedCategories);
//   };
