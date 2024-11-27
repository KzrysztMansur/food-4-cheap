import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./Components/formInput";
import PrimaryButton from "./Components/buttons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission reload

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', {
        position: "top-center",
        autoClose: 2000, // Closes in 2 seconds
      });
      return; // Stop further execution
    }

    // Display success toast
    toast.success('Signup successful!', {
      position: "top-center",
      autoClose: 2000,
    });

    // Redirect to login page after the toast disappears
    setTimeout(() => {
      navigate('/log-in');
    }, 2000); // Match the toast's autoClose duration
  };

  return (
    <div className="card container m-5 p-5">
      <h2 className="text-center">Sign up</h2>
      <form onSubmit={handleSignup} className="mt-4">
        <FormInput 
          label="Email" 
          id="email" 
          placeholder="john@tecmilenio.mx" 
          type="text" 
          required={true} 
        />
        <FormInput 
          label="Password" 
          id="password" 
          placeholder="password" 
          type="password" 
          required={true} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <FormInput 
          label="Confirm Password" 
          id="confirm-password" 
          placeholder="confirm-password" 
          type="password" 
          required={true} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <PrimaryButton>Sign up</PrimaryButton>
      </form>
      <ToastContainer /> {/* Toast container for messages */}
    </div>
  );
}

export default Signup;
