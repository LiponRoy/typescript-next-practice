"use client"

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
}

const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add logic to submit the form data to your backend or perform any other actions
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default SimpleForm;
