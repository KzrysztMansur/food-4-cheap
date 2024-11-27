import Offer from "./offer";
import { Link } from "react-router-dom";

function Section({ title, listOfOptions = [], linkTo= null}) {
    return (
        <div class="section text-center">
            <h3>{title}</h3>
            <div class="d-flex justify-content-evenly">
                {listOfOptions.map((item) => (
                    <Link to={linkTo}  style={{ textDecoration: "none", color: "inherit" }}>
                        <Offer key={item.id} title={item.title} image={item.image} />    
                    </Link>
                    
                ))}
            </div>
        </div>
    );
}

export default Section;
