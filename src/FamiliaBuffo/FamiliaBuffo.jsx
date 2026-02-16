import { cardBuffos } from "../Data/Databuffos"
import "./FamiliaBuffo.css"

export const FamiliaBuffo = () => {

  return (
    <section className="familia">

      {cardBuffos.map((item,i)=>(
        <div
          className={`bloque ${i % 2 === 1 ? "invertido" : ""}`}
          key={i}
        >

          <div className="texto">
            <h2>{item.titulo}</h2>
            <p>{item.texto1}</p>
            <p>{item.texto2}</p>
          </div>

          <div className="imagenes">
            <img src={item.img1} alt="" />
            <img src={item.img2} alt="" className="superpuesta"/>
          </div>

        </div>
      ))}

    </section>
  )
}
