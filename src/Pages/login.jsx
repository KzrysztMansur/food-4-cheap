import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./Components/formInput";
import PrimaryButton from "./Components/buttons";


function Login(){
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup submitted");
  };

  return (

    <div className="card container m-5 p-5">
      <h2 className="text-center">Log in</h2>
      <form onSubmit={handleSignup} className="mt-4">
        <FormInput label="email" id="email" placeholder="john@tecmilenio.mx" type="text" required="true"/>
        <FormInput label="password" id="password" placeholder="password" type="password" required="true"/>
    
        <PrimaryButton>Log in</PrimaryButton>
      </form>
      <p>Don't have an account? <Link to="/sign-up">Sign up</Link></p>
    </div>
  );
};

export default Login;
