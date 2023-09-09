// This function will list all categories

import { useState, useEffect } from "react";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // to choose which categgory user selects
  const [categories, setCategories] = useState([]); // to fetch unique categories from backend
  const [products, setProducts] = useState([]); // to fetch all products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // to filter products based on selected categgory

  useEffect(() => {
    // Fetch all products from backend and extract only unique categories to categories
    fetch(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.product_category)),
        ];
        setCategories(uniqueCategories);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Check if a category is selected and filter products accordingly
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.product_category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Function to handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category}
              className="flex flex-col items-center"
              onClick={() => handleCategorySelection(category)}
            >
              <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
                <button
                  className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide p-4"
                  onClick={() => handleCategorySelection(category)}
                >
                  {category}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No categories found!</p>
        )}
      </div>

      <div>
        {/* Render the filtered products */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.product_id}>
              {/* Rendering the product details */}
              <p>{product.product_name}</p>
              <p>{product.product_description}</p>
            </div>
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryComponent;
