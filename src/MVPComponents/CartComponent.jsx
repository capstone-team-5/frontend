//This will function is for the user's cart before they are logged in

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import axios from "axios";
import ReactToPrint from "react-to-print";


interface CartItem {
  id: string;
  name: string;
  image: string;
  length: number;
}

interface CartComponentProps {
  deleteItem: (id: string) => void;
  clearCart: () => void;
  cart: CartItem[];
  cartLength: number;
  handleQuantityChange: (cart: CartItem[]) => void;
  updateCartLength: (length: number) => void;
}

const CartComponent: FunctionComponent<CartComponentProps> = ({
    deleteItem,
    clearCart,
    cart,
    cartLength,
    handleQuantityChange,
    updateCartLength,
  }) => {
  const [itemQuantities, setItemQuantities] = useState({});
  const [comparison, setComparison] = useState({});
  const [shoppingList, setShoppingList] = useState(
    "Your shopping list goes here."
  );
  const componentRef = useRef(null);

  // Log the JSON representation of itemQuantities
  // console.log("itemQuantities:", JSON.stringify(itemQuantities, null, 2));

  useEffect(() => {
    const quantities = cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {});

    setItemQuantities(quantities);
  }, [cart]);

  const handleQuantityChangeClick = (itemId, change) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[itemId] + change >= 1) {
      updatedQuantities[itemId] += change;
      setItemQuantities(updatedQuantities);

      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        updatedCart[itemIndex].length = updatedQuantities[itemId];
      } else {
        const newItem = {
          id: itemId,
          length: updatedQuantities[itemId],
        };
        updatedCart.push(newItem);
      }

      handleQuantityChange(updatedCart);

      localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
    }
  };

  const handleSubmit = () => {
    const cartIds = cart.map((food) => food.id);
    const convertIdsToString = cartIds.join(",");
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/compare-prices?productIds=${convertIdsToString}`;
    axios
      .get(backendEndPoint)
      .then((response) => {
        setComparison(response.data);
      })
      .catch((error) => console.log("error:", error));
  };

  useEffect(() => {
    const cartTotal = Object.values(itemQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );
    updateCartLength(cartTotal);

    localStorage.setItem(
      "Testing_Cart_Quantities",
      JSON.stringify(itemQuantities)
    );
  }, [itemQuantities, cartLength, updateCartLength]);

  useEffect(() => {
    const updatedShoppingList = cart.map(
      (item) => `${item.name} - Quantity: ${itemQuantities[item.id] || 0}`
    );
    setShoppingList(updatedShoppingList.join("\n"));
  }, [cart, itemQuantities]);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(shoppingList)
      .then(() => alert("Shopping list copied to clipboard!"))
      .catch((error) => console.error("Failed to copy: ", error));
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p className="mx-auto mb-8 max-w-2xl font-light text-black md:mb-12 sm:text-xl dark:text-gray-400">
          Your cart is empty. Click Cart to Add Items
          <Link to="/home">
            <img
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
              alt="Add Items to Cart"
              className="object-contain"
            />
          </Link>
        </p>
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8"
            ref={componentRef}
          >
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 mb-4 text-3xl tracking-tight sm:text-4xl font-extrabold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Shopping List
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2 md:px-6 md:py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 md:px-6 md:py-3 text-center sm:text-sm md:text-md lg:text-lg"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 md:px-6 md:py-3 sm:text-sm md:text-md lg:text-lg"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 md:px-6 md:py-3 sm:text-sm md:text-md lg:text-lg"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-2 md:p-0 lg:p-0 md:w-52 lg:w-52">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-contain"
                        />
                      </Link>
                    </td>
                    <td className="px-2 py-2 md:px-6 md:py-4 font-semibold text-center text-gray-900 dark:text-white sm:text-sm md:text-md lg:text-lg">
                      {item.name}
                    </td>
                    <td className="px-2 py-2 md:px-6 md:py-4">
                      <div className="flex items-center space-x-3">
                        <button
                          className="inline-flex items-center justify-center p-1 sm:text-sm md:text-md lg:text-lg font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                          onClick={() => handleQuantityChangeClick(item.id, -1)}
                        >
                          <span className="sr-only">Quantity button</span>
                          <FaMinus />
                        </button>
                        <div className="bg-gray-50 w-12 md:w-14 border border-gray-300 text-gray-900 sm:text-sm md:text-md lg:text-lg text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {itemQuantities[item.id]}
                        </div>
                        <button
                          className="inline-flex items-center justify-center h-6 w-6 p-1 sm:text-sm md:text-md lg:text-lg font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                          onClick={() => handleQuantityChangeClick(item.id, 1)}
                        >
                          <span className="sr-only">Quantity button</span>
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="px-2 py-2 md:px-6 md:py-4">
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline sm:text-sm md:text-md lg:text-lg"
                        onClick={() => deleteItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-8"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <Link to="/price-compare">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-8"
              onClick={handleSubmit}
            >
              Confirm Your Cart!
            </button>
          </Link>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-8"
            onClick={() => {
              window.print();
            }}
          >
            Print Shopping List
          </button>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-8"
            onClick={handleCopyToClipboard}
          >
            Copy Shopping List
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
