import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import FavoritesComponent from './FavoritesComponent';

jest.mock('axios');

const setup = (updatedFavorites = [], user = "user123") => {
  const addToCart = jest.fn();
  const addAllFavorites = jest.fn();
  render(
    <FavoritesComponent
      updatedFavorites={updatedFavorites}
      addToCart={addToCart}
      addAllFavorites={addAllFavorites}
      user={user}
    />
  );

  return { addToCart, addAllFavorites };
};

describe('FavoritesComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and displays favorites', async () => {
    const favoritesData = [{ product_id: 1, product_name: 'Test Product', product_image: 'test.jpg' }];
    axios.get.mockResolvedValueOnce({ data: favoritesData });

    setup();

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('adds an item to the cart when the "Add To Cart" button is clicked', async () => {
    const favoritesData = [{ product_id: 1, product_name: 'Test Product', product_image: 'test.jpg' }];
    axios.get.mockResolvedValueOnce({ data: favoritesData });

    const { addToCart } = setup();

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    userEvent.click(screen.getByText('Add To Cart'));

    expect(addToCart).toHaveBeenCalledTimes(1);
  });

  it('calls the delete confirmation when the "Remove" button is clicked', async () => {
    window.confirm = jest.fn(() => true); // Mock the window.confirm to always return true

    const favoritesData = [{ product_id: 1, product_name: 'Test Product', product_image: 'test.jpg' }];
    axios.get.mockResolvedValueOnce({ data: favoritesData });

    setup();

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    userEvent.click(screen.getByText('Remove'));

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this item from your favorites?');
  });

  it('adds all favorites to the cart when the "Add All Favorites To Cart" button is clicked', async () => {
    const favoritesData = [
      { product_id: 1, product_name: 'Test Product', product_image: 'test.jpg' },
    ];
    axios.get.mockResolvedValueOnce({ data: favoritesData });

    const { addAllFavorites } = setup();

    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    userEvent.click(screen.getByText('Add All Favorites To Cart'));

    expect(addAllFavorites).toHaveBeenCalledTimes(1);
  });
});
