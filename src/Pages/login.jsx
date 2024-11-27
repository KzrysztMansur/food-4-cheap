import React from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "./Components/formInput";
import PrimaryButton from "./Components/buttons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission reload

    // Display a success toast
    toast.success('Login successful!', {
      position: "top-center",
      autoClose: 2000, // Closes in 2 seconds
    });

    // Redirect after the toast disappears
    setTimeout(() => {
      navigate('/home'); // Redirect to the home page
    }, 2000); // Match the toast's autoClose duration
  };

  return (
    <div className="card container m-5 p-5">
      <h2 className="text-center">Log in</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <FormInput label="email" id="email" placeholder="john@tecmilenio.mx" type="text" required={true} />
        <FormInput label="password" id="password" placeholder="password" type="password" required={true} />
        <PrimaryButton>Log in</PrimaryButton>
      </form>
      <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
      <ToastContainer /> {
      }
    </div>
  );
}

export default Login;
