import { useState, useEffect } from 'react';
import blogData from '../../../data/blog.json';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  let showBlogs = blogData.blogPosts;;
  let recentBlogs = blogData.recentPosts;
  
  useEffect(() => {
    setBlogs(showBlogs);  // Set blogs from the JSON file
  }, []);

  return { showBlogs,recentBlogs
   };
};
