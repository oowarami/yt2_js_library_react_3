import React, { createContext, useState, useContext, useEffect } from 'react';
import { useProducts } from '../components/customHooks/useProducts';

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

// Function to clean and convert price string to number
const parsePrice = (priceString) => {
  if (!priceString) return 0;
  // Remove "Rp." and convert to number
  return Number(priceString.replace(/[Rp,.]/g, '').trim());
};

export const CartProvider = ({ children }) => {
  const { products } = useProducts();
  
  const [cartItems, setCartItems] = useState([]); // Initialize cart as an empty array
  const [cartOpen, setCartOpen] = useState(false); // Manage cart open/close state
	const [totalItems, setTotalItems] = useState(0); // Track total items in cart

  // Function to toggle cart open/close
  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  // Update total items in the cart whenever cartItems changes
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      const cleanedPrice = parsePrice(product.price);  // Clean price when adding
      
      if (existingProduct) {
        // If product is already in the cart, increase its quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If product is not in the cart, add it
      return [...prevItems, { ...product, quantity: 1, price: cleanedPrice }];
    });
    // toggleCart(); // Open the cart when a product is added
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartOpen, toggleCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
