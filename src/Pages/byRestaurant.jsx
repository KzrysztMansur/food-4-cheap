import Header from "./Components/header";
import Footer from "./Components/footer";
import Restaurant from "./Components/restaurant";

//import data

import restaurantOffers from "../jsons/restaurantOffers.json";
var restaurants = ["Family", "Students", "Coworkers"]
var restaurant = restaurants[0];


function ByRestaurant(){

    return (
    <>
        <Header title={restaurant}></Header>
        <div class="section text-center">
                <div class="">
                    {restaurantOffers.map((item) => (
                        <Restaurant restaurant={item}/>
                    ))}
                </div>
            </div>

        <Footer/>
    </>
    );
}

export default ByRestaurant