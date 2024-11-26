import React from "react";
import FormInput from "./Components/formInput";
import PrimaryButton from "./Components/buttons";

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Signup submitted");
  };

  return (

    <div className="card container m-5 p-5">
      <h2 className="text-center">Sign up</h2>
      <form onSubmit={handleSignup} className="mt-4">
        <FormInput label="email" id="email" placeholder="john@tecmilenio.mx" type="text" required="true"/>
        <FormInput label="password" id="password" placeholder="password" type="password" required="true"/>
        <FormInput label="confirm password" id="confirm-password" placeholder="confirm-password" type="password" required="true"/>

        <PrimaryButton>Sign up</PrimaryButton>
      </form>
    </div>
  );
};

export default Signup;
