import "./Donaciones.css"
import { planes } from "../Data/Dataplanes"

export const Donaciones = () => {

  const populares = planes.filter(p => p.plan === "Popular")
  const sponsors = planes.filter(p => p.plan === "Sponsor")

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

          <button>Elegir</button>
        </div>
      ))}
    </div>
  )

  return (
    <section id="Donaciones" className="suscripciones">

      <h2 className="suscripcionesTitulo">Donaciones</h2>

      <h3 className="categoria">Para el público</h3>
      {renderCards(populares)}

      <h3 className="categoria sponsorTitulo">Sponsors</h3>
      {renderCards(sponsors)}

    </section>
  )
}
