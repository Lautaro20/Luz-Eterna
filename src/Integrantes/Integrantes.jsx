import "./Integrantes.css"
import { cardIntegrantes } from "../Data/Dataintegrantes"
import { useEffect, useRef, useState, useCallback } from "react"

export const Integrantes = () => {

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

 
  const startX = useRef(0)

  const total = cardIntegrantes.length

  // ---- CONTROLES ----
  const next = useCallback(() => {
    setIndex(i => (i + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + total) % total)
  }, [total])

  // ---- AUTOPLAY ----
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  // ---- SWIPE ----
  const handleTouchStart = e => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = e => {
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
  }

  return (
    <section id="Sobre-Nosotros" className="SobreNosotros">

  <div className="layout">

    {/* COLUMNA INFO */}
    <div className="info">
      <h2>Equipo</h2>
      <p>
        Somos el equipo creativo detrás de Luz Eterna, un cortometraje inspirado en la vida y obra de Guido Buffo. Nuestro trabajo combina investigación histórica, sensibilidad artística y producción audiovisual para llevar al presente una historia real donde el arte, la ciencia y el amor trascienden el tiempo.
      </p>
    </div>

    {/* COLUMNA SLIDER */}
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <button className="btn prev" onClick={prev}>‹</button>
      <button className="btn next" onClick={next}>›</button>

      <div
        className="track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {cardIntegrantes.map((p, i) => (
          <div className={`card ${i === index ? "active" : ""}`} key={i}>
            <img src={p.img} alt={p.nombre}/>
            <h3>{p.nombre}</h3>
            <p>{p.rol}</p>
            <p><i  className="ig fa-brands fa-instagram"></i>  <a href={`https://instagram.com/${p.ig}`} target="_blank" rel="noopener noreferrer" className="ig-text"> {p.ig} </a></p>
          </div>
        ))}
      </div>

    </div>

  </div>
</section>

  )
}
