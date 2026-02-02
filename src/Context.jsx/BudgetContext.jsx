import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

// Define a new context
const BudgetContext = createContext()

// Define the context provider
// Provider shares state with its childrens 
export default function BudgetContextProvider({ children }) {

    // Context state
    const [budgetMode, setBudgetMode] = useState(false)

    // State actions
    const toggleBudgetMode = () => {
        setBudgetMode(!budgetMode ); // 
    }
    
    return (
        <BudgetContext.Provider value={{
        budgetMode,
        toggleBudgetMode
        }}>
        {/* mettere componenti figli */}
        { children }
        </BudgetContext.Provider>
    )
        
}

// Custom hook per leggere i valori del context provieder
// nei componenti figli del provider
export function useBudget() {
    const context = useContext(BudgetContext)
    if(!context) {
        throw new Error('useBudget most be used within the BudgetContextProvider')
    }
    return context;
}

