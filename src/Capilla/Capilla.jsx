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


  <div className="Mapita">
    <iframe
      title="Ubicación Casa Museo y Capilla Buffo"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68387.55669825294!2d-64.37782265819703!3d-31.224328621294763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7ddfceeaec41%3A0x491a5eb9f8273032!2sCasa%20Museo%20y%20Capilla%20Buffo!5e0!3m2!1ses!2sar!4v1771435190583!5m2!1ses!2sar"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>


    </section>
  )
}
