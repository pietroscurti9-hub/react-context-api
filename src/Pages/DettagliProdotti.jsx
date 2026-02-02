import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const endDetail = "https://fakestoreapi.com/products/"



export default function DettagliProdotti() {

    const { id } = useParams();

    const [dettagliProdotto, setDettagliProdotto] = useState(null)
   

    useEffect(() => {
        axios.get(endDetail + id)
            .then(res => {
                console.log(res.data)
                setDettagliProdotto(res.data)
            })
            .catch(err => console.log("errore chiamata api"))
    }, [])



    return (
        <>
            <h2>pagina dettaglio prodotti {id}</h2>
            

            {dettagliProdotto !== null ? (
                <div className="container-dettagli">
                    <div className="set-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{dettagliProdotto.title}</h5>
                                <img src={dettagliProdotto.image} alt="" className="card-img-top" />
                                <p className="card-text">Descrizione: {dettagliProdotto.description} </p>
                                <p className="card-text">Prezzo {dettagliProdotto.price} </p>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <p>Loading product, wait please...</p>
            )}

        </>






    )
}