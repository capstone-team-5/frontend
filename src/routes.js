import React, { lazy, Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import LoadingComponent from './components/LoadingComponent'; // You need to create this component

// Lazy-loaded components using lazy
const Favorites = lazy(() => import('./Pages/Favorites'));
const SignIn = lazy(() => import("./Pages/SignIn"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const Home = lazy(() => import("./Pages/Home"));
// Lazy load the rest of your components in this file

function getRoutes({ authUser, favorites, handleAddToFavoritesCart, handleAddFavoritesToCart, user, handleAddToCart  }) {
  //...rest of your handlers that are passed down to your components
  const routesConfig = [
    {
      path: "/user/:id/favorites",
      element: authUser ? (
        <Favorites
          addToCart={handleAddToFavoritesCart}
          updatedFavorites={favorites}
          addAllFavorites={handleAddFavoritesToCart}
          user={user}
        />
      ) : (
        <p>Please sign in to view favorites</p>
      )
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/home",
      element: <Home addToCart={handleAddToCart} />
    },
    // Add other routes similarly
  ];

  return routesConfig;
}

// this is what you'll use in your App.js file
const AppRoutes = (props) => {
  const routeComponents = getRoutes(props).map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<LoadingComponent/>}>
      <Routes>
        {routeComponents}
        {/* Fallback route for handling 404s... I see this in the wild a lot */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
