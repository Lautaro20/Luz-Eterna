import "./Fechasimportantes.css"

export const Fechasimportantes = () => {

  return (
    <section className="fechasIntro">
      <div className="fechasOverlay">
        <div className="fechasContent">

          <h2 className="fechasTitulo">Agenda del Proyecto</h2>

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

        </div>
      </div>
    </section>
  )
}