import Header from "./Components/header";
import Footer from "./Components/footer";

function About(){
    return (
    <>
        <Header title="Food4Cheap"></Header>
            <div class="container text-center mx-5">
                <h2>About us</h2>
                <div class="row py-4">
                    <div class="col mx-5">
                    <h3>Who are we</h3>
                    <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus mauris lobortis non aliquet fusce cras integer nam. Nulla scelerisque dui ac  posuere venenatis facilisis leo magna integer. Dis venenatis eu  convallis quis egestas. Montes praesent eu egestas magnis ridiculus  class semper. Neque molestie elementum fringilla lobortis mi iaculis  adipiscing tempor. Fusce eros sed dictumst lobortis duis massa.
                    Sed inceptos nunc turpis tempor cras ullamcorper. Avolutpat lobortis  blandit quisque metus porta. Fringilla porttitor blandit proin justo sem hac nibh. Facilisis congue ultricies adipiscing maximus lectus volutpat massa. Eget laoreet proin taciti quisque aliquet potenti tristique ac.  Adipiscing himenaeos egestas est id massa laoreet. Dignissim proin odio  dignissim montes efficitur habitasse viverra. Lobortis non a sodales  morbi ridiculus aptent vestibulum ad.
                    </p>
                    </div>
                    <div class="col">
                    <img src="assets/save-us.png" alt="not found" style={ styles.image}/>
                    </div>
                </div >
                <h2>Our mission</h2>
                <p class="pb-5">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus mauris lobortis non aliquet fusce cras integer nam. Nulla scelerisque dui ac  posuere venenatis facilisis leo magna integer. Dis venenatis eu  convallis quis egestas. Montes praesent eu egestas magnis ridiculus  class semper. Neque molestie elementum fringilla lobortis mi iaculis  
                </p>
            </div>
        <Footer/>
    </>
    );
}

const styles = {
    image : {
        maxWidth: "90vh"
    }
}

export default About