"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
      coin: string;
      wallet: string;
      network: string;
    };
  }

const SingleDataFetch: React.FC = () => {
  const [users, setUsers] = useState<User | null>(null); // Initialize users as null

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // for identifying copy this url with id and pest it on a braowser ,then u may understand what would be the interface
        // and how to use it 
        const res = await axios.get<User>('https://dummyjson.com/users/8');
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='flex flex-col justify-center items-start '>
      <h2 className=' text-4xl text-green-600'>Advance Json and Typescript - Users List</h2>
      {users && (
        <>
          <span>{users.firstName}</span>
          <span>{users.lastName}</span>
          <span>{users.age}</span>
          <span>{users.email}</span>
        </>
      )}
    </div>
  );
};

export default SingleDataFetch;
