import Header from "./Components/header";
import Footer from "./Components/footer";
import Section from "./Components/section";

// import data
import typesOfRestaurants from "../jsons/restaurantType.json";
import offers from "../jsons/offers.json";


function Home(){
    console.log("Restaurant Types:", typesOfRestaurants);
    console.log("Offers:", offers);
    
    return (
    <>
        <Header title="Food4Cheap" showInput="true"></Header>
        <Section title="Types of restaurants" listOfOptions={typesOfRestaurants} />
        
        <hr/>
        <Section title="Types of offers" listOfOptions={offers} />
        <hr/>
        <section>
        
        <div class="container text-center">
        <h3>Currently operating in</h3>
            <div class="row align-items-start">
                <div class="col">
                    <ul>
                        <li>Guadalajara</li>
                        <li>Paris</li>
                        <li>Luxemburgo</li>
                        <li>Ciudad Victoria</li>
                        <li>Monterrey</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>Tuxpan</li>
                        <li>Edinburgh</li>
                        <li>Reynosa</li>
                        <li>Tampico</li>
                        <li>Nueva York</li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li>Austin</li>
                        <li>Tijuana</li>
                        <li>Mexicali</li>
                        <li>Chicago</li>
                        <li>CDMX</li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
        
        
        <Footer></Footer>
    </>
    );
}

export default Home