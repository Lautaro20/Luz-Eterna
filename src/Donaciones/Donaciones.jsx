import { useState } from "react";
import "./Donaciones.css"
import { planes } from "../Data/Dataplanes"

export const Donaciones = () => {

  const populares = planes.filter(p => p.plan === "Colaboraciones")
  const sponsors = planes.filter(p => p.plan === "Sponsor")

  const [mostrarModal, setMostrarModal] = useState(false);

  const renderCards = (lista) => (
    <div className="suscripcionesGrid">
      {lista.map((plan,i)=>(
        <div className="planCard" key={i}>
          <h3>{plan.plan}</h3>
          <span className="precio">{plan.precio}</span>

          <ul>
            {plan.beneficios.map((b,j)=>(
              <li key={j}>{b}</li>
            ))}
          </ul>

          <button onClick={() => setMostrarModal(true)}>Elegir</button>
        </div>
      ))}
    </div>
  )

  return (
    <section id="Donaciones" className="suscripciones">

      <h2 className="suscripcionesTitulo">Donaciones</h2>

      <div className="introProyecto">
          <p>Hay proyectos que no se hacen solos.<br/>Se hacen en encuentro.</p>

          <p>
            “Luz Eterna” es un cortometraje inspirado en el universo de Guido Buffo, 
            con el objetivo de recrear una época y construir un mundo visual y poético propio.
          </p>

          <p>
            Para hacerlo posible, lanzamos nuestro plan de financiamiento colectivo:
          </p>

          <p className="objetivo">
            Nuestro objetivo es llegar a <strong>$10.000.000</strong>, con una fecha límite:
            <strong> 11 de diciembre de 2026</strong>.
          </p>

          <p className="subtituloLista">
            Tu aporte se destina a:
          </p>

          <ul className="listaUso">
            <li>Viáticos y transporte del equipo</li>
            <li>Comidas en jornadas de rodaje</li>
            <li>Escenografía y recreación de época</li>
          </ul>

          <p className="rodaje">
            Fecha de Rodaje: 7 a 10 días, a principios de 2027, entre Córdoba y Unquillo
          </p>

          <p className="cta">
            Sumate. Acompañá. Hacé que exista.
          </p>
      </div>

      <h3 className="categoria">Para el público</h3>
      {renderCards(populares)}

      <h3 className="categoria sponsorTitulo">Sponsors</h3>
      {renderCards(sponsors)}


      {mostrarModal && (
        <div className="modalOverlay" onClick={() => setMostrarModal(false)}>
          
          <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
          <h3>Contribuir al proyecto</h3>

          <p className="modalTexto">
            Podés hacer tu aporte mediante transferencia:
          </p>

          <div className="aliasBox">
            <span>Alias</span>
            <strong>Luz.eterna.corto</strong>

            <div className="datosExtra">
              <p><span>Titular:</span> Facundo Salvador Graziano</p>
              <p><span>Medio:</span> Mercado Pago</p>
            </div>
          </div>

          <button className="cerrarBtn" onClick={() => setMostrarModal(false)}>
            Cerrar
          </button>
        </div>

        </div>
      )}
    </section>
  )
}
