import "./Header.scss"
import { useState } from "react"

export default function Header(){
        const [isNavActive, setIsNavActivve] = useState<number | null>(null)

    return(
        <>
        <header className=" flex justify-between">
            <div className=" flex">
                <img src="./img/logo.svg" alt="Logo Icon" />
                <div className="logo ml-2 text-2xl">Plantify</div>
            </div>
            <ul  className="nav flex">
                <li onClick={() => {setIsNavActivve(0)}} className={isNavActive === 0 ? "active" : ""}>Home</li>
                <li onClick={() => {setIsNavActivve(1)}} className={isNavActive === 1 ? "active" : ""}>About</li>
                <li onClick={() => {setIsNavActivve(2)}} className={isNavActive === 2 ? "active" : ""}>Contact</li>
                <li onClick={() => {setIsNavActivve(3)}} className={isNavActive === 3 ? "active" : ""}>Plants</li>
            </ul>
            <ul className="profile flex">
                <li>
                    <img src="./img/search-icon.svg" alt="Search Icon" />
                </li>
                <li>
                    <img src="./img/cart-icon.svg" alt="Cart icon" />
                </li>
                <li>
                    <img src="./img/profile-icon.svg" alt="Profile Icon" />
                </li>
            </ul>
        </header>
        </>
    )
}