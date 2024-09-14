import { useState, useEffect } from 'react';

import productData from '../../../data/product.json'
// import productData from '../products/productData';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
	
  useEffect(() => {
    setProducts (productData.products); // Load products from the JSON
  }, []);

  return {
	products,
  };
};