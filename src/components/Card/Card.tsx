import "./Card.scss"

export default function Card(){
    return(
        <>
            <div className="card">
                <img src="./img/card-img/1.svg" alt="Card Img" />
                <div className="card-content">
                    <div className="card-header">
                        <div className="card-title">Monstera Deliciosa</div>
                        <span>Easy to care, air purifying</span>
                    </div>
                    <div className="card-footer">
                        <div>$45.00</div>
                        <button>
                            <img src="./icons/add-to-card.svg" alt="Add to card" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}