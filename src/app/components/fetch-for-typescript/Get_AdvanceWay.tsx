"use client";


// Define the type for your API response data
interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    // Add other properties as needed
  }
  
  // Function to fetch user data from the API
  async function fetchUserList(): Promise<UserData[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch user list');
    }
    const userList: UserData[] = await response.json();
    return userList;
  }
  
  // Usage example in a React component
  import React, { useEffect, useState } from 'react';
  
  const Get_AdvanceWay: React.FC = () => {
    const [userList, setUserList] = useState<UserData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchUserList();
          setUserList(data);
        } catch (error) {
          console.error('Error fetching user list:', error);
        }
      };
      fetchData();
    }, []);
  
    if (userList.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
   <h2 className=' mb-4 text-lg font-bold text-green-700'>Fetch Data Using Fetch and TypeScript</h2>

        <ul >
          {userList.map(user => (
            <li key={user.id} className=' p-2 border-4'>
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              {/* Render other user data properties as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Get_AdvanceWay;
  