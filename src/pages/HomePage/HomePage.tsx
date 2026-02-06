import Header from "../../components/Header/Header"
import "./HomePage.scss"

export default function HomePage(){
    return(
        <>
        <Header/>
        <main>
            <section className="hero-section">
                <div>
                    <h1>Bring Nature Into Your Home</h1>
                    <p>Discover our collection of beautiful indoor plants that will 
                    transform your space into a green paradise.</p>
                    <div>
                        <button>Shop Now</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}