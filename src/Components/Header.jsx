import { NavLink } from "react-router-dom";
import BudgetContext, { useBudget } from "../Context.jsx/BudgetContext";

export default function Header() {
   const {budgetMode,toggleBudgetMode } =  useBudget()

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

                <button onClick={toggleBudgetMode}>
                    {budgetMode === false ? 'Attiva ' : 'Disattiva '} budget mode
                </button>
                
                    {/* <BudgetContext /> */}
                

            </div>
        </header>
    )
}