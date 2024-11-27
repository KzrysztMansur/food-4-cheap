import Header from "./Components/header"
import Footer from "./Components/footer"
import Restaurant from "./Components/restaurant";

// import data
import restaurantOffers from "../jsons/restaurantOffers.json";

function NearYou (){
    
    return (
        <>
            <Header title="Near you"></Header>
            <div class="section text-center">
                <div class="">
                    {restaurantOffers.map((item) => (
                        <Restaurant restaurant={item}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default NearYou