import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <header>
            <div className="container text-center mt-3">

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Prodotti">Prodotti</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ChiSiamo">Chi siamo?</NavLink>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}