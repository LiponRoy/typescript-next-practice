"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define the type for your API response data
interface Post {
    id: number;
    name: string;
    username: string;
    email: string;
  // Add other properties as needed
}

// Usage example in a React component
const Axios_use: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make GET request using Axios
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/users');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className=' mb-4 text-lg font-bold text-green-700'>Fetch Data Using Axios and TypeScript</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className=' border-2 p-2'>
            <h3>{post.name}</h3>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios_use;
