import Header from "./Components/header";

var restaurants = ["McRonald's", "Pub Jerryngton", "Burger Queen"]
var restaurant = restaurants[0];

function ByRestaurant(){
    return (
    <>
        <Header title={restaurant}></Header>
    </>
    );
}

export default ByRestaurant