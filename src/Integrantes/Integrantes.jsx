import "./Integrantes.css"
import {cardIntegrantes} from "../Data/Dataintegrantes"
import { useEffect, useState } from "react"

export const Integrantes= () => {

    const [listaIntegrantes, setListaintegrantes] = useState([])
    const [index, setIndex] = useState(0);

    const CARD_WIDTH = 500;
    const GAP = 40; 

    const next = () => {
        setIndex((prev) =>
            prev === listaIntegrantes.length - 1 ? 0 : prev + 1
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? listaIntegrantes.length - 1 : prev - 1
        );
    };

    const pedirIntegrantes = () => {
       return new Promise((resolve, reject) => {
            resolve(cardIntegrantes)
       })
    }


    useEffect(() => {
        pedirIntegrantes()
        .then((res) => {
            setListaintegrantes(res)
        })


    },[])

    

    return (
        <div className="SobreNosotros">
            <h3>Equipo</h3>

            <div className="integrantes">
                <button className="btn prev" onClick={prev}><i class="fa-solid fa-caret-down fa-rotate-90"></i></button>
                <button className="btn next" onClick={next}><i class="fa-solid fa-caret-down fa-rotate-270"></i></button>
                <div className="track" style={{ transform: `translateX(calc(50% - ${(index + 0.5) * (CARD_WIDTH + GAP)}px))` }}>
                    
                    { listaIntegrantes.length > 0 && listaIntegrantes.map((integrante, i) => {
                            const isActive = i === index;
                            return(
                                <div className={`cardintegrante ${isActive ? "active" : ""}`} key={i}>
                                    <img src={integrante.img} alt="" />
                                    <h3>{integrante.nombre}</h3>
                                    <p>{integrante.rol}</p>
                                    <a href={`https://www.instagram.com/${integrante.ig}/`} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> {integrante.ig}</a>
                                </div>
                            )
                        })
                    }   
                </div>
            
            </div>

        </div>
        
    )
} 