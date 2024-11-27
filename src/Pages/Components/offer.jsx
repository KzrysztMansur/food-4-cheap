
function Offer ({ title, image }) {
  return (
    <div className="card mb-3 offer p-3 border-0" style={ styles.card }>
      <img src={image} className="card-img-top" alt={title} style={styles.image}/>
      <div className="card-body">
        <h5 className="card-title pt-3">{title}</h5>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "12rem", // Card width
    margin: "10px", // Spacing between cards
    borderRadius: "10px", // Rounded edges
    overflow: "hidden", // Ensure image fits within card
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
    textAlign: "center"
  },
  image: {
    width: "100%", // Full width image
    height: "75px", // Fixed height for consistency
    objectFit: "cover", // Ensure the image is cropped nicely
  },
  cardBody: {
    textAlign: "center", // Center align text
    padding: "10px", // Padding inside the body
  },
  cardTitle: {
    fontSize: "1.25rem", // Larger title font size
    fontWeight: "bold", // Bold title
    color: "#333", // Neutral text color
  },
};

export default Offer;
