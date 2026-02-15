import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import "./HomePage.scss"

export default function HomePage(){
    return(
        <>
        <Header/>
        <main>
            <section className="hero-section">
                <div className="flex">
                    <div className="hero-content">
                        <h1>Bring Nature Into Your Home</h1>
                        <p>Discover our collection of beautiful indoor plants that will 
                        transform your space into a green paradise.</p>
                        <div className="buttons">
                            <button className="shop-now">Shop Now</button>
                            <button className="learn-more">Learn More</button>
                        </div>
                </div>
                    <div className="img-box">
                     <img src="./img/hero-img.svg" alt="Hero Img" />
                    </div>
                </div>
            </section>
            <section className="category-section">
                <span>Shop By Category</span>

                <ul className="category-cards">
                    <li>
                        <img src="./icons/indoor-icon.svg" alt="" />
                        <span>Indoor Plants</span>
                    </li>
                    <li>
                        <img src="./icons/outdoor-icon.svg" alt="" />
                        <span>Outdoor Plants</span>
                    </li>
                    <li>
                        <img src="./icons/purifying-icon.svg" alt="" />
                        <span>Succulents</span>
                    </li>
                    <li>
                        <img src="./icons/succulents-icon.svg" alt="" />
                        <span>Air Purifying</span>
                    </li>
                </ul>
            </section>
            <section className="featured-section">
                <div>
                    <span>Featured Plants</span>
                    <div>View All </div>
                </div>
                <Card/>
            </section>
        </main>
        </>
    )
}