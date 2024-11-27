function Restaurant({restaurant}) {
    console.log(restaurant.Image);
    return (
        <div className="card mb-3 px-4" style={styles.restaurant}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={restaurant.Image}
                        className="img-fluid rounded-start"
                        alt="Restaurant"
                        style={styles.image}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={styles.cardBody}>
                        <p className="card-text">
                            
                            Santiago
                        </p>
                        <h5 className="card-title">{restaurant.Name}</h5>
                        <p className="card-text">
                            {restaurant.Description}
                        </p>
                        <p className="card-text">
                        <small className="text-muted">rating: 5</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">open from {restaurant.OpenHour}:00 to {restaurant.CloseHour}:00</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    restaurant: {
        maxWidth: "90%", // Stretch from left to right
        padding: "15px", // Add padding
        borderRadius: "10px", // Smooth edges
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        margin: "10px 0", // Add vertical spacing
    },
    image: {
        objectFit: "cover", // Ensure the image covers the area nicely
        maxHeight: "150px", // Match the height of the card section
    },
    cardBody: {
        textAlign: "left", // Align text to the left
    },
};

export default Restaurant;
