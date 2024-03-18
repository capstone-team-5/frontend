import React from 'react';
import Favorites from './Pages/Favorites';
// Import other components

// Each route is now a function that returns a route object
function getRoutes({ authUser, favorites, handleAddToFavoritesCart, handleAddFavoritesToCart, user }) {
  return [
    // Other routes...
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
    // More routes...
  ];
}

export default getRoutes;
