import { useRef } from "react"
import "./Fechasimportantes.css"

export const Fechasimportantes = () => {

  const carruselRef = useRef(null)

  const scroll = (direction) => {
    const scrollAmount = 320

    carruselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })
  }

  return (
    <section className="fechasIntro">
      <div className="fechasOverlay">
        <div className="fechasContent">

          <h2 className="fechasTitulo">Agenda del Proyecto</h2>

          <div className="carruselWrapper">

            <button
              className="btnCarrusel left"
              onClick={() => scroll("left")}
            >
              ‹
            </button>

            <div className="fechasCarrusel" ref={carruselRef}>

              {/* EVENTO */}
              <div className="fechaCard">
                <div className="fechaNumero">
                  17 Diciembre
                </div>

                <div className="fechaInfo">
                  <h3>Evento de Recaudación</h3>
                  <p>
                    Evento de recaudación para el cortometraje,
                    como parte del plan de financiamiento colectivo.
                  </p>
                </div>
              </div>


              {/* FERIA */}
              <div className="fechaCard">
                <div className="fechaNumero">
                  Feria en Unquillo
                </div>

                <div className="fechaInfo">
                  <h3>Paseo de Artesanos</h3>

                  <p>
                    Estaremos participando en la feria del
                    Paseo de Artesanos de Unquillo donde
                    presentaremos el proyecto.
                  </p>

                  <iframe
                    className="feriaMapa"
                    title="Mapa Paseo de Artesanos Unquillo"
                    src="https://www.google.com/maps?q=Paseo+de+Artesanos+Unquillo+Córdoba&output=embed"
                    loading="lazy"
                  ></iframe>

                </div>
              </div>


              {/* DIFUSION */}
              <div className="fechaCard">
                <div className="fechaNumero">
                  Difusión
                </div>

                <div className="fechaInfo">
                  <h3>Espacios de Divulgación</h3>

                  <p>
                    El proyecto aparecerá en diferentes
                    espacios culturales y medios.
                  </p>

                  <ul className="listaDivulgacion">
                    <li>Medios culturales</li>
                    <li>Comunidades audiovisuales</li>
                    <li>Redes de cine independiente</li>
                    <li>Charlas culturales</li>
                  </ul>

                </div>
              </div>

            </div>

            <button
              className="btnCarrusel right"
              onClick={() => scroll("right")}
            >
              ›
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}