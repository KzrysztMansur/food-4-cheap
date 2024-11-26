import Offer from "./offer";

function Section({ title, listOfOptions = [] }) {
    return (
        <div class="section text-center">
            <h3>{title}</h3>
            <div class="d-flex justify-content-evenly">
                {listOfOptions.map((item) => (
                    <Offer key={item.id} title={item.title} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default Section;
