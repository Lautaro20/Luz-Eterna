import { useEffect, useState } from "react"
import { cardBuffos } from "../Data/Databuffos"
import "./FamiliaBuffo.css"

export const FamiliaBuffo = () => {

    const [listaBuffos, setListaBuffos] = useState([])
    const [mostrar, setMostrar] = useState(false)

    const PedirFamilia = () => {
        return new Promise((resolve, reject) => {
            resolve(cardBuffos)
        })
    }

    useEffect(() => {
        PedirFamilia()
        .then((res) => {
            setListaBuffos(res);
        })

        const Contar = setInterval(() => {
            setMostrar(prev => !prev)
        },5000)

        return () => clearInterval(Contar)
    }, [])

    

    return(
        <div>
            {listaBuffos.length > 0 && 
                listaBuffos.map((Buffo) => {
                    return(
                        <div className={Buffo.id}>
                            <h3 className="Titulo">{Buffo.titulo? Buffo.titulo : ""}</h3>
                            <div className={`Contenedor ${Buffo.id}`}>
                                <p>{Buffo.texto1? Buffo.texto1 : ""}</p>
                                <p>{Buffo.texto2? Buffo.texto2 : ""}</p>
                            </div>
                            <div className={`Buffo ${Buffo.id}`}>
                                <img src={Buffo.img1} alt="" className="ImgBuffo abajo" />
                                <img src={Buffo.img2} alt="" className={`ImgBuffo arriba ${mostrar? "visible" : ""}`}/>
                            </div>
                            
                        </div>
                    )
                }) 
            }
        </div>
    )
}