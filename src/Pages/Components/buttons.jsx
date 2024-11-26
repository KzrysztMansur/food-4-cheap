function PrimaryButton({ children, onClick, type }) {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={onClick} type={type || null}>
          {children}
        </button>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
     },
    button: {
      background: 'linear-gradient(to right, #FF7158, #FD2B7B)', // Gradient background like the header
      color: 'white', // Text color white
      padding: '10px 20px', // Some padding for the button
      border: 'none', // Remove default border
      borderRadius: '5px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
      fontSize: '16px', // Font size for the text
      cursor: 'pointer', // Change cursor to pointer on hover
      transition: 'all 0.3s ease', // Smooth transition for hover effects
    },
  };
  
  export default PrimaryButton;
  