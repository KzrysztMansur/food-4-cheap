import Header from "./Components/header";
import Footer from "./Components/footer";

var restaurants = ["Family", "Students", "Coworkers"]
var restaurant = restaurants[0];

function ByRestaurant(){
    return (
    <>
        <Header title={restaurant}></Header>
        <Footer/>
    </>
    );
}

export default ByRestaurant