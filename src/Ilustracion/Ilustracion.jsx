import { useEffect, useState } from "react"
import { CardIlustracion } from "../Data/Datailustracion"
import "./Ilustracion.css"


export const Ilustracion = () => {

    const [listaIntegrantes, setListaintegrantes] = useState([])
    const [mostrar, setMostrar] = useState(false)

    const pedirIlustraciones = () => {
        return new Promise((resolve, reject) => {
            resolve(CardIlustracion)
        })
    }

    useEffect(() => {
        pedirIlustraciones()
            .then((res) => {
                setListaintegrantes(res)
            })

        const Contar = setInterval(() => {
            setMostrar(prev => !prev)
        }, 15000) 
        
        return () => clearInterval(Contar)
    },[])

    return(
        <div className="IlustracionContenedor">
            <img src="/LogosPng/logos_Mesadetrabajo1copia.png" alt="" className="Logoprincipal"/>
            {
                listaIntegrantes.length > 0 && listaIntegrantes.map((Ilustracion) => {
                   return(
                        <div className="Ilustracion">
                            <img src={Ilustracion.img1} className="ImgIlustracion abajo" alt="" />
                            <img src={Ilustracion.img2} alt="" className={`ImgIlustracion arriba ${mostrar ? "visible" : ""}`}/>
                        </div>
                    )
                })
            }
        </div>
    )

}