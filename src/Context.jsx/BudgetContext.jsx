import { createContext } from "react";
import { useState, useEffect } from "react";


export default function BudgetContext() {

    const [budgetMode, setBudgetMode] = useState(false)

    const handleClick = () => {
        setBudgetMode(true);

    }
        return (
            <>

                <button onClick={handleClick}>
                    Vedi prezzi inferiori a 50 euro
                </button>


            </>
        )
}


