//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";
import axios from "axios";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

//Commons

import Navbar from "./Commons/Navbar";
import Footer from "./Commons/Footer";

//Pages
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import FourOFour from "./Pages/FourOFour";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";
import UserCart from "./Pages/UserCart";
import UserEdit from "./Pages/UserEdit";
import Subscription from "./Pages/Subscription";
import ConfirmSubscription from "./Pages/ConfirmSubscription";
import MeetTheDevelopers from "./Pages/MeetTheDevelopers";
// import TestComponent from "./MVPComponents/TestComponent";
import IndividualProduct from "./Pages/IndividualProduct";
import ContactUs from "./Pages/ContactUs";
import SearchResults from "./Pages/SearchResults";
import PriceComparison from "./Pages/PriceComparison";
import LandingPage from "./Pages/LandingPage";
import Favorites from "./Pages/Favorites";
import Savings from "./Pages/Savings";
import WhereDidYouShop from "./Pages/WhereDidYouShop";
import TermsAndConditions from "./Pages/TermAndConditions";
import Recipes from "./Pages/Recipes/Recipes";
import BreakfastFoods from "./Pages/Recipes/Breakfast/BreakfastFoods";
import CheeseOmeletteRecipe from "./Pages/Recipes/Breakfast/CheeseOmeletteRecipe";
import ChocolateChipPancakesRecipe from "./Pages/Recipes/Breakfast/ChocolateChipPancakes";
import OvernightOatsRecipe from "./Pages/Recipes/Breakfast/OvernightOatsRecipe";
import BlueberryWafflesRecipe from "./Pages/Recipes/Breakfast/BlueBerryWafflesRecipe";
import KetoChocolateCroissantsRecipe from "./Pages/Recipes/Breakfast/KetoChocolateCroissantRecipe";
import BreakfastBurritoRecipe from "./Pages/Recipes/Breakfast/BreakfastBurritoRecipe";
import SpicedCreamOfWheatPorridgeRecipe from "./Pages/Recipes/Breakfast/SpicedCreamOfWheatPorridgeRecipe";
import OldFashionOatsRecipe from "./Pages/Recipes/Breakfast/OldFashionOatsRecipe";
import YogurtParfaitRecipe from "./Pages/Recipes/Breakfast/YogurtParfaitRecipe";
import LunchFoods from "./Pages/Recipes/Lunch/LunchFoods";
import CapreseSandwichRecipe from "./Pages/Recipes/Lunch/CapreseSandwichRecipe";
import WholeWheatVeggieWrapRecipe from "./Pages/Recipes/Lunch/WholeWheatVeggieWrapRecipe";
import FarroBowlWithRotisserieChickenRecipe from "./Pages/Recipes/Lunch/FarroBowlWithRotisserieChickenRecipe";
import BaconCheeseburgerRecipe from "./Pages/Recipes/Lunch/BaconCheeseburgerRecipe";
import CajunPrawnPizzaRecipe from "./Pages/Recipes/Lunch/CajunPrawnPizzaRecipe";
import TunaMeltRecipe from "./Pages/Recipes/Lunch/TunaMeltRecipe";
import GrilledCheeseSandwichRecipe from "./Pages/Recipes/Lunch/GrilledCheeseSandwichRecipe";
import SpicyChickenSandwichRecipe from "./Pages/Recipes/Lunch/SpicyChickenSandwichRecipe";
import CrispyOnionRingsRecipe from "./Pages/Recipes/Lunch/CrispyOnionRingsRecipe";
import DinnerFoods from "./Pages/Recipes/Dinner/DinnerFoods";
import BakedMacAndCheeseRecipe from "./Pages/Recipes/Dinner/BakedMacAndCheeseRecipe";
import BajanCouCouWithFlyingFishRecipe from "./Pages/Recipes/Dinner/BajanCouCouWithFlyingFishRecipe";
import IndianButterChickenRecipe from "./Pages/Recipes/Dinner/IndianButterChickenRecipe";
import JamaicanJerkChickenRecipe from "./Pages/Recipes/Dinner/JamaicanJerkChickenRecipe";
import ChickenBiryaniRecipe from "./Pages/Recipes/Dinner/ChickenBiryaniRecipe";
import SpanishRiceAndBeansRecipe from "./Pages/Recipes/Dinner/SpanishRiceAndBeansRecipe";
import SpaghettiWithMeatballsRecipe from "./Pages/Recipes/Dinner/SpaghettiWithMeatballsRecipe";
import GingerGarlicSalmonRecipe from "./Pages/Recipes/Dinner/GingerGarlicSalmonRecipe";
import VeganCurryRecipe from "./Pages/Recipes/Dinner/VeganCurryRecipe";
import SnackFoods from "./Pages/Recipes/Snacks/SnackFoods";
import HomemadePotatoChipsRecipe from "./Pages/Recipes/Snacks/HomemadePotatoChipsRecipe";
import HomemadePretzelRecipe from "./Pages/Recipes/Snacks/HomemadePretzelRecipe";
import HomemadePopTartsRecipe from "./Pages/Recipes/Snacks/HomemadePopTartsRecipe";
import TrailMixRecipe from "./Pages/Recipes/Snacks/TrailMixRecipe";
import SmoresRecipe from "./Pages/Recipes/Snacks/SmoresRecipe";
import ButterToffeePopcornRecipe from "./Pages/Recipes/Snacks/ButterToffeePopcornRecipe";
import JollyRancherCandyApplesRecipe from "./Pages/Recipes/Snacks/JollyRancherCandyApplesRecipe";
import ChocolateDrizzledPopcornRecipe from "./Pages/Recipes/Snacks/ChocolateDrizzledPopcornRecipe";
import CoconutChipsRecipe from "./Pages/Recipes/Snacks/CoconutChipsRecipe";
import DessertFoods from "./Pages/Recipes/Desserts/DessertFoods";
import HomemadeApplePieRecipe from "./Pages/Recipes/Desserts/HomemadeApplePieRecipe";
import TresLechesCakeRecipe from "./Pages/Recipes/Desserts/TresLechesCakeRecipe";
import GermanChocolateCakeRecipe from "./Pages/Recipes/Desserts/GermanChocolateCakeRecipe";
import OatmealRaisinCookiesRecipe from "./Pages/Recipes/Desserts/OatmealRaisinCookiesRecipe";
import OatmealChocolateChipCookiesRecipe from "./Pages/Recipes/Desserts/OatmealChocolateChipCookiesRecipe";
import StrawberryCheesecakeRecipe from "./Pages/Recipes/Desserts/StrawberryCheesecakeRecipe";
import ChocolateChipCookiesRecipe from "./Pages/Recipes/Desserts/ChocolateChipCookiesRecipe";
import MacaronsRecipe from "./Pages/Recipes/Desserts/MacaronsRecipe";
import StrawberryIceCreamRecipe from "./Pages/Recipes/Desserts/StrawberryIceCreamRecipe";
import Vegetables from "./MVPComponents/HomeComponent/Vegetables";
import NutritionComponent from "./MVPComponents/NutritionComponent";
import Categories from "./MVPComponents/HomeComponent/Categories";
import AuthDetails from "./MVPComponents/AuthDetails";

// Components
import CustomerTestimonialsComponent from "./NonMVPComponents/CustomerTestimonialsComponent";
import FeedbackComponent from "./NonMVPComponents/FeedBackComponent";
import FaqComponent from "./NonMVPComponents/FaqComponent";
import ChangePasswordComponent from "./NonMVPComponents/ChangePasswordComponent";
import ForgotPasswordComponent from "./NonMVPComponents/ForgotPasswordComponent";
import Fruits from "./MVPComponents/HomeComponent/Fruits";
import Meat from "./MVPComponents/HomeComponent/Meat";
import Legumes from "./MVPComponents/HomeComponent/Legumes";
import Spices from "./MVPComponents/HomeComponent/Spices";
import Nuts from "./MVPComponents/HomeComponent/Nuts";
import Grains from "./MVPComponents/HomeComponent/Grains";
import Bakery from "./MVPComponents/HomeComponent/Bakery";
import Dairy from "./MVPComponents/HomeComponent/Dairy";
import Snacks from "./MVPComponents/HomeComponent/Snacks";
import Seafood from "./MVPComponents/HomeComponent/Seafood";
import Poultry1 from "./MVPComponents/HomeComponent/Poultry1";

// Styling
import "./App.css";

// Refactored Routes
import getRoutes from './routes';
function App() {
  const [cart, setCart] = useState(() => {
    const storedCartData = JSON.parse(
      window.localStorage.getItem("Testing_Cart")
    );
    return Array.isArray(storedCartData) ? storedCartData : [];
  });

  const [cartLength, setCartLength] = useState(() => {
    const storedCartLength = parseInt(
      window.localStorage.getItem("Testing_Cart_Length")
    );
    return isNaN(storedCartLength) ? 0 : storedCartLength;
  });

  const [favorites, setFavorites] = useState([]);

  const [loading, setLoading] = useState("Finding Shops In Your Area");
  const [stores, setStores] = useState([]);
  const [comparison, setComparison] = useState({});
  const [showDrumRoll, setShowDrumRoll] = useState(false);
  const [storeTotalPrices, setStoreTotalPrices] = useState({});
  const [selectedStore, setSelectedStore] = useState(null);

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  console.log("app.js authUser:", authUser);

  // working
  const user = authUser !== null ? authUser.uid : null;
  // const user = authUser?.uid  -- potential shorthand

  // const handleAddToFavorites = (food) => {
  // const updatedFavorites = [...favorites];
  // const existingItemIndex = updatedFavorites.findIndex(
  // (item) => item.id === food.product_id
  // );

  // if (existingItemIndex === -1) {
  // updatedFavorites.push({
  // name: food.product_name,
  // image: food.product_image,
  // id: food.product_id,
  // });
  // console.log("updatedFavorites:", updatedFavorites);
  // setFavorites(updatedFavorites);
  // window.localStorage.setItem(
  // "Testing_Favorites",
  // JSON.stringify(updatedFavorites)
  // );
  // }
  // };


  const handleStoreSelection = (store) => {
    setSelectedStore(store);
  };

  const handleAddToCart = (food) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === food.product_id
    );
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].length += 1;
    } else {
      updatedCart.push({
        name: food.product_name,
        image: food.product_image,
        id: food.product_id,
        length: 1,
      });
    }
    console.log("updatedCart:", updatedCart);
    setCart(updatedCart);
    window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
    setCartLength((previousCartLength) => previousCartLength + 1);
    updateCartLength(updateCartLength);
  };

  const handleAddToFavoritesCart = (food) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === food.id
    );
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].length += 1;
    } else {
      updatedCart.push({
        name: food.name,
        image: food.image,
        id: food.id,
        length: 1,
      });
    }
    console.log("updatedCart:", updatedCart);
    setCart(updatedCart);
    window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
    setCartLength((previousCartLength) => previousCartLength + 1);
    updateCartLength(updateCartLength);
  };

  const handleAddToFavorites = async (food, shopperFirebaseId) => {
    // Check if the item is already in favorites
    const existingItemIndex = favorites.findIndex(
      (item) => item.id === food.product_id
    );
    if (existingItemIndex === -1) {
      // If not in local favorites, add it to the backend
      try {
        console.log("app.js food:", food);
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_API}/favorites`,
          {
            shopper_firebase_uid: user,
            product_id: food.product_id,
          }
        );
        if (response.status === 201) {
          // Item added to backend successfully, update frontend state
          const updatedFavorites = [
            ...favorites,
            {
              name: food.product_name,
              image: food.product_image,
              id: food.product_id,
            },
          ];
          console.log("user in app.js:", user);
          console.log("updatedFavorites in app.js:", updatedFavorites);
          setFavorites(updatedFavorites);
        } else {
          // Handle other status codes or errors as needed
          console.error("Failed to add item to favorites.");
        }
      } catch (error) {
        console.error("Error adding item to favorites:", error);
      }
    } else {
      console.log("Item is already in favorites.");
    }
  };

  const handleAddFavoritesToCart = (favoriteItems) => {
    // Clone the current cart state
    const updatedCart = [...cart];

    // Loop through the favorite items and add them to the cart
    favoriteItems.forEach((favoriteItem) => {
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === favoriteItem.id
      );

      console.log("favoriteItem:", favoriteItem);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        updatedCart[existingItemIndex].length += 1;
      } else {
        // If the item doesn't exist in the cart, add it as a new item
        updatedCart.push({
          name: favoriteItem.name,
          image: favoriteItem.image,
          id: favoriteItem.id,
          length: 1,
        });
      }
    });

    console.log("favorite items in app.js:", updatedCart);

    console.log("favorite items in app.js:", updatedCart);
    // Update the cart state
    setCart(updatedCart);

    // Update the cart length by calculating the total quantity in the cart
    const cartAdjustedLength = updatedCart.reduce(
      (total, item) => total + item.length,
      0
    );
    setCartLength(cartAdjustedLength);

    // Save the updated cart to local storage
    window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));

    // Return the updated cart
    return updatedCart;
  };

  useEffect(() => {
    const newStoreTotalPrices = {};

    stores.forEach((store) => {
      if (comparison.hasOwnProperty(store.store_id)) {
        const storeTotalPrice = cart.reduce((total, item) => {
          const itemPrice = Number(comparison[store.store_id][item.id]);
          const itemQuantity = item.length || 0;

          if (Number(itemPrice) && Number(itemQuantity)) {
            return total + itemPrice * itemQuantity;
          }

          return total;
        }, 0);

        newStoreTotalPrices[store.store_id] = storeTotalPrice;
      }
    });

    setStoreTotalPrices(newStoreTotalPrices);
  }, [cart, comparison, stores]);

  const filteredStores =
    stores.length === 0
      ? null
      : stores
          .filter((store) => comparison.hasOwnProperty(store.store_id))
          .sort(
            (a, b) =>
              storeTotalPrices[a.store_id] - storeTotalPrices[b.store_id]
          );

  useEffect(() => {
    const cartIds = cart.map((food) => food.id);
    const convertIdsToString = cartIds.join(",");
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/compare-prices?productIds=${convertIdsToString}`;

    axios
      .get(backendEndPoint)
      .then((response) => {
        setComparison(response.data.stores);
        setTimeout(() => {
          setLoading("Calculating Your Savings");
        }, 5000);

        setTimeout(() => {
          setLoading("Drum Roll !!!!");
          setShowDrumRoll(true);
        }, 50);

        setTimeout(() => {
          setLoading(false);
        }, 700);
      })
      .catch((error) => {
        console.error("Error fetching comparison data:", error);
        setLoading(false);
      });
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("Testing_Cart_Length", cartLength.toString());
  }, [cartLength]);

  useEffect(() => {
    applyTheme();

    const storedCartLength = parseInt(
      window.localStorage.getItem("Testing_Cart_Length")
    );
    if (!isNaN(storedCartLength)) {
      setCartLength(storedCartLength);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Testing_Cart_Length", cartLength.toString());
  }, [cartLength]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  }, []);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    applyTheme();
  };

  const updateCartLength = (length) => {
    setCartLength(length);
  };

  // const updateCartWithSpecificIds = (specificIds) => {
  //   const updatedCart = [...cart];

  //   specificIds.forEach((id) => {
  //     const existingItemIndex = updatedCart.findIndex((item) => item.id === id);

  //     if (existingItemIndex !== -1) {
  //       updatedCart[existingItemIndex].length += 1;
  //     } else {
  //       updatedCart.push({
  //         name: "Item Name",
  //         image: "item_image_url",
  //         id: id,
  //         length: 1,
  //       });
  //     }
  //   });

  //   setCart(updatedCart); // Update the cart state
  //   window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
  //   setCartLength(updatedCart.length); // Update cart length
  // };

  const handleAddIngredientsToCart = (newItemAddedToFood) => {
    const updatedCart = [...cart];
    newItemAddedToFood.forEach((food) => {
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === food.id
      );
      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].length += 1;
        console.log("updatedCart 2.0:", updatedCart);
      } else {
        updatedCart.push({
          name: food.name,
          image: food.image,
          id: food.id,
          length: 1,
        });
        // updatedCart.push(newItemAddedToFood)
        console.log("updatedCart 2.1:", updatedCart);
      }
    });

    console.log("Updated Cart App.js:", updatedCart);

    // Update the cart state
    setCart(updatedCart);
    // [...cart] i believe this is empty rn
    window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));

    // Update the cart length by calculating the total quantity in the cart
    const cartAdjustedLength = updatedCart.reduce(
      (total, item) => total + item.length,
      0
    );
    setCartLength(cartAdjustedLength);

    // Return the updated cart
    return updatedCart;
  };

  useEffect(() => {
    // Log the updated cart value
    console.log("Updated Cart App.js2:", cart);
  }, [cart]); // This useEffect runs whenever cart changes

  const [itemQuantities, setItemQuantities] = useState(
    cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {})
  );

  const handleQuantityChange = (itemId, quantity) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = quantity;
    setItemQuantities(updatedQuantities);

    const cartAdjustedLength = Object.values(updatedQuantities).reduce(
      (total, itemLength) => total + itemLength,
      0
    );

    setCartLength(cartAdjustedLength);
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedCart = cart.filter((item) => item.id !== id);
      const totalQuantity = updatedCart.reduce(
        (total, item) => total + item.length,
        0
      );
      setCart(updatedCart);
      window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
      setCartLength(totalQuantity);
    }
  };

  const handleClearCart = () => {
    if (
      window.confirm(
        "This Will Delete Your Entire Cart. This Action CANNOT Be Undone!"
      )
    ) {
      setCart([]);
      setCartLength(0);
      window.localStorage.removeItem("Testing_Cart");
    }
  };

  const routes = getRoutes({
    authUser,
    favorites,
    handleAddToFavoritesCart,
    handleAddFavoritesToCart,
    user: authUser ? authUser.uid : null,
    ... <more handlers that routes file accepts>
  });

  return (
    <div className="dark:bg-gray-900">
      <BrowserRouter>
        <Navbar
          cartLength={cartLength}
          handleThemeChange={handleThemeChange}
          updateCartLength={setCartLength}
        />
        // In App.js
        // note we rename component to Component to treat it as a React component and they must start with an uppercase letter.
        {/*<Routes>*/}
        {/*  {routes.map(({ path, element }) => (*/}
        {/*    <Route key={path} path={path} element={element} />*/}
        {/*  ))}*/}
        {/*</Routes>*/}
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Home addToCart={handleAddToCart} />} path="/home" />
          {/* <Route
            element={
              <TestComponent
                updateCartLength={setCartLength}
                cartLength={cartLength}
                cart={cart}
                addToCart={handleAddToCart}
              />
            }
            path="/test"
          /> */}
          <Route element={<SignIn />} path="/sign-in" />
          <Route
            element={
              authUser ? (
                <Favorites
                  addToCart={handleAddToFavoritesCart}
                  updatedFavorites={favorites}
                  addAllFavorites={handleAddFavoritesToCart}
                  user={user}
                />
              ) : (
                <p>Please sign in to view favorites</p>
              )
            }
            path="/user/:id/favorites"
          />
          <Route
            element={
              authUser ? (
                <WhereDidYouShop
                  comparison={comparison}
                  sortedStores={filteredStores}
                />
              ) : (
                <p>Please sign in to view where you shopped</p>
              )
            }
            path="/user/:id/where-did-you-shop"
          />
          <Route element={<AuthDetails auth={auth} authUser={authUser} />} />
          <Route element={<Categories />} path="/categories" />
          <Route
            element={<Vegetables addToCart={handleAddToCart} />}
            path="/vegetables"
          />
          <Route element={<NutritionComponent />} path="/nutrition" />
          <Route
            element={
              <Savings
                sortedStores={filteredStores}
                comparison={comparison}
                stores={stores}
                selectedStore={selectedStore}
              />
            }
            path="/user/:id/savings/:selectedStore"
          />
          <Route
            element={
              authUser ? (
                <Savings
                  sortedStores={filteredStores}
                  comparison={comparison}
                />
              ) : (
                <p>Please sign in to view savings</p>
              )
            }
            path="/user/:id/savings/:selectedStore"
          />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route
            element={
              <IndividualProduct
                handleAddToCart={handleAddToCart}
                cartLength={cartLength}
                addToFavorites={handleAddToFavorites}
              />
            }
            path="/product/:id"
          />
          <Route
            element={
              <Cart
                deleteItem={handleDeleteItem}
                clearCart={handleClearCart}
                cart={cart}
                cartLength={cartLength}
                updateCartLength={updateCartLength}
                handleQuantityChange={handleQuantityChange}
              />
            }
            path="/cart"
          />

          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<User />} path="/user/:id" />
          <Route
            element={<SearchResults addToCart={handleAddToCart} />}
            path="/search-results/:query"
          />
          <Route
            element={
              <PriceComparison
                cart={cart}
                stores={stores}
                comparison={comparison}
                loading={loading}
                showDrumRoll={showDrumRoll}
                sortedStores={filteredStores}
              />
            }
            path="/price-compare"
          />
          <Route element={<UserCart />} path="/user/:id/cart" />
          {/* <Route element={<Favorites addToCart={handleAddToFavoritesCart} updatedFavorites={favorites} addAllFavorites={handleAddFavoritesToCart}  />} path="/user/:id/favorites" /> */}
          <Route element={<UserEdit />} path="/user/:id/edit" />
          <Route element={<Subscription />} path="/user/:id/subscription" />
          <Route
            element={<ConfirmSubscription />}
            path="/user/:id/subscription/confirmed"
          />
          <Route element={<MeetTheDevelopers />} path="/meet-the-developers" />
          <Route
            element={<CustomerTestimonialsComponent />}
            path="/testimonials"
          />
          <Route element={<FaqComponent />} path="/faq" />
          <Route element={<FeedbackComponent />} path="/feedback" />
          <Route
            element={<ChangePasswordComponent />}
            path="/change-password"
          />
          <Route
            element={<ForgotPasswordComponent />}
            path="/forgot-password"
          />
          {/* <Route
            element={
              <WhereDidYouShop
                comparison={comparison}
                sortedStores={filteredStores}
                handleStoreSelection={handleStoreSelection}
              />
            }
            path="/user/:id/where-did-you-shop"
          /> */}
          <Route
            element={<TermsAndConditions />}
            path="/terms-and-conditions"
          />
          <Route element={<Recipes />} path="/recipes" />
          <Route element={<BreakfastFoods />} path="/recipes/breakfast-foods" />
          <Route
            element={
              <CheeseOmeletteRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-cheese-omelette"
          />
          <Route
            element={
              <ChocolateChipPancakesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-chocolate-chip-pancakes"
          />
          <Route
            element={
              <OvernightOatsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-overnight-oats"
          />
          <Route
            element={
              <BlueberryWafflesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-blueberry-waffles"
          />
          <Route
            element={
              <KetoChocolateCroissantsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-keto-chocolate-croissant"
          />
          <Route
            element={
              <BreakfastBurritoRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-breakfast-burrito"
          />
          <Route
            element={
              <SpicedCreamOfWheatPorridgeRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-spiced-cream-of-wheat-porridge"
          />
          <Route
            element={
              <OldFashionOatsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/old-fashion-oats"
          />
          <Route
            element={
              <YogurtParfaitRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/breakfast-food-yogurt-parfait"
          />
          <Route element={<LunchFoods />} path="/recipes/lunch-foods" />
          <Route
            element={
              <CapreseSandwichRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-caprese-sandwich"
          />
          <Route
            element={
              <WholeWheatVeggieWrapRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-whole-wheat-veggie-wrap"
          />
          <Route
            element={
              <FarroBowlWithRotisserieChickenRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-farro-bowl-with-rotisserie-chicken"
          />
          <Route
            element={
              <BaconCheeseburgerRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-bacon-cheeseburger"
          />
          <Route
            element={
              <CajunPrawnPizzaRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-cajun-prawn-pizza"
          />
          <Route
            element={
              <TunaMeltRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-tuna-melt"
          />
          <Route
            element={
              <GrilledCheeseSandwichRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-grilled-cheese"
          />
          <Route
            element={
              <SpicyChickenSandwichRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-spicy-chicken-sandwich"
          />
          <Route
            element={
              <CrispyOnionRingsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/lunch-food-crisy-onion-rings"
          />
          <Route element={<DinnerFoods />} path="/recipes/dinner-foods" />
          <Route
            element={
              <BakedMacAndCheeseRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-baked-mac-and-cheese"
          />
          <Route
            element={
              <BajanCouCouWithFlyingFishRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-bajan-cou-cou-and-flying-fish"
          />
          <Route
            element={
              <IndianButterChickenRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-indian-butter-chicken"
          />
          <Route
            element={
              <JamaicanJerkChickenRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-jamaican-jerk-chicken"
          />
          <Route
            element={
              <SpanishRiceAndBeansRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-spanish-rice-and-beans"
          />
          <Route
            element={
              <ChickenBiryaniRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-chicken-biryani"
          />
          <Route
            element={
              <SpaghettiWithMeatballsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-spaghetti-with-meatballs"
          />
          <Route
            element={
              <GingerGarlicSalmonRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-ginger-garlic-salmon"
          />
          <Route
            element={
              <VeganCurryRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dinner-foods-vegan-curry"
          />
          <Route element={<SnackFoods />} path="/recipes/snack-foods" />
          <Route
            element={
              <HomemadePotatoChipsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-homemade-potato-chips"
          />
          <Route
            element={
              <HomemadePretzelRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-homemade-pretzel"
          />
          <Route
            element={
              <HomemadePopTartsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-homemade-pop-tarts"
          />
          <Route
            element={
              <TrailMixRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-trail-mix"
          />
          <Route
            element={
              <SmoresRecipe addIngredientsToCart={handleAddIngredientsToCart} />
            }
            path="/recipes/snack-foods-smores"
          />
          <Route
            element={
              <ButterToffeePopcornRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-butter-toffee-popcorn"
          />
          <Route
            element={
              <JollyRancherCandyApplesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-jolly-rancher-candy-apples"
          />
          <Route
            element={
              <ChocolateDrizzledPopcornRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-chocolate-drizzled-popcorn"
          />
          <Route
            element={
              <CoconutChipsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/snack-foods-coconut-chips"
          />
          <Route element={<DessertFoods />} path="/recipes/dessert-foods" />
          <Route
            element={
              <HomemadeApplePieRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-homemade-apple-pie"
          />
          <Route
            element={
              <TresLechesCakeRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-tres-leche-cake"
          />
          <Route
            element={
              <GermanChocolateCakeRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-german-chocolate-cake"
          />
          <Route
            element={
              <OatmealRaisinCookiesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-oatmeal-raisin-cookies"
          />
          <Route
            element={
              <OatmealChocolateChipCookiesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-oatmeal-chocolate-chip-cookie"
          />
          <Route
            element={
              <StrawberryCheesecakeRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-strawberry-cheesecake"
          />
          <Route
            element={
              <ChocolateChipCookiesRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-classic-chocolate-chip-cookie"
          />
          <Route
            element={
              <MacaronsRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-macarons"
          />
          <Route
            element={
              <StrawberryIceCreamRecipe
                addIngredientsToCart={handleAddIngredientsToCart}
              />
            }
            path="/recipes/dessert-foods-homemade-strawberry-icecream"
          />
          <Route
            element={<Fruits addToCart={handleAddToCart} />}
            path="/fruits"
          />
          <Route element={<Meat addToCart={handleAddToCart} />} path="/meat" />
          <Route element={<Seafood addToCart={handleAddToCart} />} path="/seafood" />
          <Route element={<Poultry1 addToCart={handleAddToCart} />} path="/poultry" />
          <Route
            element={<Legumes addToCart={handleAddToCart} />}
            path="/legumes"
          />
          <Route
            element={<Spices addToCart={handleAddToCart} />}
            path="/spices"
          />
          <Route element={<Nuts addToCart={handleAddToCart} />} path="/nuts" />
          <Route
            element={<Grains addToCart={handleAddToCart} />}
            path="/grains"
          />
          <Route
            element={<Dairy addToCart={handleAddToCart} />}
            path="/dairy"
          />
          <Route
            element={<Snacks addToCart={handleAddToCart} />}
            path="/snacks"
          />
          <Route
            element={<Bakery addToCart={handleAddToCart} />}
            path="/bakery"
          />
          <Route element={<FourOFour />} path="/*" />
        </Routes>
        <Footer handleThemeChange={handleThemeChange} />
      </BrowserRouter>
    </div>
  );
}

export default App;
