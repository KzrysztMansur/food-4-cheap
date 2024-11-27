import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Header({ title, showInput, onInputChange }) {
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Function to handle 'Enter' key press for redirect
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Prevent the default form submission behavior
      // Navigate to the home page or any other page
      navigate('/near-you');  // Change '/home' to the desired route
    }
  };

  return (
    <header style={styles.header} className="p-3 mb-5">
      <div style={styles.contentWrapper}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={styles.title}>{title}</h1>
        </Link>
        
        {showInput && (
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={onInputChange} 
            onKeyDown={handleKeyDown} // Trigger handleKeyDown when 'Enter' is pressed
            style={styles.input} 
          />
        )}
      </div>
    </header>
  );
}

const styles = {
    header: {
      background: 'linear-gradient(to right, #FF7158, #FD2B7B)', // Gradient background
      color: 'white',
      padding: '20px 0', // Padding to create some space around content
      display: 'flex',
      justifyContent: 'center', // Horizontally center the content
      alignItems: 'center', // Vertically center the content
      boxSizing: 'border-box', // Ensures padding doesn't affect the layout
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adding shadow
    },
    contentWrapper: {
      textAlign: 'center', // Center text and input within the content wrapper
    },
    title: {
      fontFamily: '"Lobster", sans-serif', // Apply Lobster font
      fontSize: '100px', // Larger font size for the title
      margin: '0', // Remove default margin from h1
      fontWeight: 'normal',
      textDecoration: "none", 
      color: "white"
    },
    input: {
      marginTop: '10px', // Space between h1 and input
      padding: '12px', // Increase padding for a more spacious input
      width: '450px', // Make the input longer (you can adjust this value)
      height: '15px', // Make the input longer (you can adjust this value)
      borderRadius: '10px',
      border: '1px solid #ddd',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
      fontSize: '16px', // Slightly larger text
    },
};

export default Header;
