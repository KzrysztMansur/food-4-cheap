import Header from "./Components/header";
import Footer from "./Components/footer";
import Restaurant from "./Components/restaurant";

import restaurantOffers from "../jsons/restaurantOffers.json";


function ByType(){
    return (
    <>
        <Header title="2x1"></Header>
        <div class="section text-center">
                <div class="">
                    {restaurantOffers.map((item) => (
                        <Restaurant restaurant={item}/>
                    ))}
                </div>
            </div>
        <Footer></Footer>
    </>
    );
}

export default ByType