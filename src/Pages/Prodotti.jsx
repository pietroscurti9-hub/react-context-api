// importo axios useeffect e usestate
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../Context.jsx/BudgetContext";


const endPoint = "https://fakestoreapi.com/products"
export default function Prodotti() {

     const {budgetMode} = useBudget()


    const [articoli, setArticoli] = useState([])
   

    // Valuta se budgetMode e true o false
    // se true applica filtro dove prezzo <= 30
    // se false mostra tutti gli articoli
    // Tool filter() su array articoli

    let articoliFiltrati = articoli
    
    if(budgetMode === true){

        articoliFiltrati = articoli.filter( articoloFiltrato => articolo.price <= 30)

    } else {articoliFiltrati = articoli}


    useEffect(() => {
        axios.get(endPoint)
            .then(response => {



                setArticoli(response.data)

            })
            .catch(err => console.log(err))
    }, [])

    



    return (
        <>
            <h1>prodotti</h1>
            {budgetMode === false ? 'Il budget mode non e attivo' : 'Bidget mode is one!'}

            <div className="prodotti-container">

                {articoli.map(articolo => (
                    <div className="set-card" key={articolo.id}>
                        <div className="card">

                            <Link to={`/prodotti/${articolo.id}`}>
                                <div className="card-body">
                                    <h5 className="card-title">{articolo.title}</h5>
                                    <img src={articolo.image} alt="" className="card-img-top" />
                                    <p className="card-text">category {articolo.category} </p>
                                    <p className="card-text">Rating {articolo.rating.rate}</p>
                                    <p className="card-text">Price {articolo.price}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}












