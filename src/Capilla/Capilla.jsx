import { useEffect, useState } from "react"
import { Cardcapilla } from "../Data/Datacapilla"
import  "./Capilla.css"

export const Capilla = () => {

    const [listaCapilla, setListaCapilla] = useState([])
    const [mostrar, setMostrar] = useState(false)

    const pedirCapilla = () => {
     return new Promise((resolve, reject) => {
            resolve(Cardcapilla)
        })
    }

    const Cambio = () => {
        setMostrar(false)
    }

    const Cambion = () => {
        setMostrar(true)
    }

    useEffect(() => {
        pedirCapilla()
            .then((res) => {
            setListaCapilla(res)
        }) 

        const Contar = setTimeout(() => {
            setMostrar(true)
        },5000)

        return () => clearTimeout(Contar)
            
    },[])

    


    return(
        <div>
            {listaCapilla.length > 0 && listaCapilla.map((Capilla) => {
                return(
                    <div className="ContenedorCapilla" onMouseEnter={Cambio} onMouseLeave={Cambion}>
                        <h3 className="Capillatitulo"><em>{Capilla.titulo}</em></h3>
                        <p className="Capillatexto">{Capilla.texto}</p>
                        <p className="Capillatexto2">{Capilla.texto2}</p>
                        <p className="Capillatexto3">{Capilla.texto3}</p>
                        <img src={Capilla.img} alt="" className="Capillaimg" />

                        
                        
                        <video src={Capilla.vid}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className={`Capillavid ${mostrar ? "aparecer": ""}`}
                        ></video>
                    
                        
                    </div>
                )
            })}
        </div>
    )
}