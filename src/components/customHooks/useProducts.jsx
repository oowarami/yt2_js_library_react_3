import { useState, useEffect } from 'react';
import productData from '../../../data/product.json';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  let showProducts = productData.products;
  let productSize = productData.sizes;
  let productColor = productData.colors;

  useEffect(() => {
    setProducts(showProducts);  // Set products from the JSON file
  }, []);

  return { showProducts,productSize, productColor
   };
};

