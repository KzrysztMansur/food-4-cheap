import { Link } from "react-router-dom";
import PrimaryButton from "./buttons";

function Footer(){
    return (
        <footer class="shadow-none p-3 bg-light rounded">
            <div class="container text-center">
                <div class="row pt-2">
                    <div class="col">
                        <h2>Food4Cheap</h2>
                    </div>
                    <div class="col">
                        <PrimaryButton>Log in</PrimaryButton>    
                    </div>
                    <div class="col">
                        <h3>Contact us</h3>
                        <p>Contactanos para convertirte en admin
+52 81 8031 6405
Rick@food4cheap.com</p>
                    </div>
                    <div class="col">
                        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
                            <h3>About us</h3>
                            <p>Somos unos desarrolladores que tuvimos la idea de hacer un proyecto open source para poder recomendar promociones de comida a toda persona.</p>
                        
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}



export default Footer