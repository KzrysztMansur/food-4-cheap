import Header from "./Components/header";
import Footer from "./Components/footer";

function Home(){
    return (
    <>
        <Header title="Food4Cheap" showInput="true"></Header>
        <section>
        <h3>Restaurant types</h3>
        <div>
            Content
        </div>
        </section>
        
        <hr/>
        <h3>Types of promotion</h3>
        <div>
            Content
        </div>
        <hr/>
        <section>
        <h3>Currently operating in</h3>
        
        </section>
        
        
        <Footer></Footer>
    </>
    );
}

export default Home