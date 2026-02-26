import "./Cortometraje.css"
import { CardCortometraje } from "../Data/Cortometraje"
import { useState, useEffect } from "react"

export const Cortometraje = () => {

  const data = CardCortometraje[0]
  const [index, setIndex] = useState(0)

  // Autoplay del carrusel
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) =>
        prev === data.imagenes.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(intervalo)
  }, [data.imagenes])

  const nextSlide = () => {
    setIndex(index === data.imagenes.length - 1 ? 0 : index + 1)
  }

  const prevSlide = () => {
    setIndex(index === 0 ? data.imagenes.length - 1 : index - 1)
  }

  return (
    <section id="Cortometraje" className="historiaIntro">
      <div className="historiaOverlay">
        <div className="historiaContent">

          {/* 🔴 COLUMNA IZQUIERDA */}
          <div className="historiaTexto">
            <h2>{data.Titulo}</h2>
            <p>{data.Texto}</p>

            <div className="historiaCarrusel">
              <img 
                src={data.imagenes[index]} 
                alt="cortometraje"
              />

              <div className="controles">
                <button onClick={prevSlide}>◀</button>
                <button onClick={nextSlide}>▶</button>
              </div>
            </div>
          </div>

          {/* 🔵 COLUMNA DERECHA (lista para otras imágenes) */}
          <div className="historiaZonaDerecha">
            {/* Acá después podés poner otro carrusel */}
          </div>

        </div>
      </div>
    </section>
  )
}