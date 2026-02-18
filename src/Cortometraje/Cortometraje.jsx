import "./Cortometraje.css"
import { CardCortometraje } from "../Data/Cortometraje"
import { useState, useEffect } from "react"

export const Cortometraje = () => {

  const data = CardCortometraje[0]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) =>
        prev === data.imagenes.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(intervalo)
  }, [data.imagenes])

  return (
    <section id="Cortometraje" className="historiaIntro">
      <div className="historiaOverlay">
        <div className="historiaContent">

          <div className="historiaTexto">
            <h2>{data.Titulo}</h2>
            <p>{data.Texto}</p>
          </div>

          <div className="historiaImagen">
            <img src={data.imagenes[index]} alt="cortometraje"/>
          </div> 

        </div>
      </div>
    </section>
  )
}
