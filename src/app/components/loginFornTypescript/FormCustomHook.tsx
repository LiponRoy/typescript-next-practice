"use client"
import { useState } from 'react';

// Define the type for the form values
type FormValues = {
  username: string;
  password: string;
};

// Define the type for the custom hook
type UseFormReturnType = {
  values: FormValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

// Define the custom hook
const useForm = (): UseFormReturnType => {
  // State to store form values
  const [values, setValues] = useState<FormValues>({
    username: '',
    password: '',
  });

  // Function to handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to reset form values
  const reset = () => {
    setValues({
      username: '',
      password: '',
    });
  };

  // Return the state and functions
  return {
    values,
    handleChange,
    reset,
  };
};

// Usage of the custom hook
const FormCustomHook = () => {
  const { values, handleChange, reset } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with values:', values);
    // Reset the form after submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormCustomHook;
