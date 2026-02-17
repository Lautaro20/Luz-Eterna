import { Cardcapilla } from "../Data/Datacapilla"
import "./Capilla.css"

export const Capilla = () => {

  return (
    <section id="Capilla" className="capilla">

      {Cardcapilla.map((item,i)=>(
        <div className="capillaBox" key={i}>

          <img src={item.img} alt={item.titulo} className="capillaImg"/>

          <div className="capillaOverlay">

            <h2>{item.titulo}</h2>

            <div className="capillaTextos">
              <p>{item.texto}</p>
              <p>{item.texto2}</p>
              <p>{item.texto3}</p>
            </div>

          </div>

        </div>
      ))}

    </section>
  )
}
