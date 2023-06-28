import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

export const CategoriesNav = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getCategories().then((allCategories) => {
      setCategories(allCategories);
    });
  }, [setCategories]);
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center h-full">
        Categories
      </h2>
      {isLoading ? (
        <p className="text-xl font-medium text-gray-600">
          Loading categories...
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-12 mx-auto">
          {categories.map((category) => {
            const categoryLowercase = category.slug.split("-").join(" ");
            const categorySentenceCase =
              categoryLowercase.charAt(0).toUpperCase() +
              categoryLowercase.slice(1);
            return (
              <article className="">
                <Link
                  to={`/?category=${category.slug}`}
                  className="border rounded-xl overflow-hidden bg-white hover:shadow-md hover:-translate-y-1 transition-all min-h-full p-6 gap-10 items-center active:border-gray-400 justify-between flex flex-col flex-grow my-4 px-4"
                >
                  <div className="flex flex-col flex-grow gap-4 my-4 px-4">
                    <div className="flex justify-between">
                      <h3
                        className="text-lg font-bold  tracking-wider text-black"
                        aria-hidden="true"
                      >
                        {categorySentenceCase}
                      </h3>
                    </div>
                    <p>{category.description}</p>
                    <div className="mt-auto text-lg text-black font-bold flex justify-between">
                      <p>{categorySentenceCase} reviews</p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
