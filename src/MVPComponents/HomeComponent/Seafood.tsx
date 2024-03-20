import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_BACKEND_API;


interface ProductType {
  product_id: number;
  product_name: string;
  product_image: string;
  // add more properties as needed
}

interface SeafoodProps {
  addToCart: (product: ProductType) => void;
}

const Seafood: React.FC<SeafoodProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/products/seafood`, {
          params: {
            page: currentPage, // Send the current page
            pageSize: productsPerPage, // Send the products per page
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="sm:px-8 md:px-24 py-12 dark:bg-gray-900">
      <div className="flex flex-col dark:bg-gray-900">
        <div className="bg-transparent bg-cover bg-[url(https://oscwebdesign.biz/wp-content/uploads/2020/12/15-tips-marketing-seafood-business-online.jpg)] bg-gray-700 bg-blend-multiply ">
          <div className="px-4 w-full mx-auto text-center py-8 md:py-32 lg:py-40 bg-black bg-opacity-50">
            <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-wide leading-none">
              All Seafood
            </h1>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 p-4 md:p-6 dark:bg-gray-900 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="group group-hover:bg-opacity-60 rounded-2xl drop-shadow-md transition duration-500 relative bg-white p-4 md:p-6 flex flex-col justify-center items-center"
            >
              <div className="flex justify-center mb-2">
                <div
                  className="duration-700 ease-in-out dark:bg-gray-900"
                  data-carousel-item
                 >

                <Link to={`/product/${product.product_id}`}>
                  <img
                    className="group-hover:opacity-60 transition duration-500 w-full h-48 object-contain"
                    src={product.product_image}
                    alt={product.product_name}
                  />
                 </Link>
                </div>
              </div>

              <div className="flex flex-row justify-between w-full mt-4">
                <p className="group-hover:opacity-60 transition duration-500 text-lg md:text-xl text-black">
                  {product.product_name}
                </p>
                <button>
                  <AiOutlineHeart size={30} />
                </button>
              </div>

              <div className="flex justify-center mt-4 mb-4">
                <button
                  onClick={() => addToCart(product)}
                  className="justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-end items-end mt-12">
          <div className="flex flex-row items-center justify-center space-x-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg ${
                currentPage === 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              className={`justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg ${
                products.length < productsPerPage
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 cursor-pointer"
              }`}
              disabled={products.length < productsPerPage}
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/categories">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900  focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900 my-4"
              aria-label="Categories"
            >
              Back To Categories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Seafood;
