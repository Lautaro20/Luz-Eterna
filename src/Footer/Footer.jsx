import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* Marca */}
        <div className="footerBrand">
          <h3>Cortometraje Luz Eterna</h3>
          <p>Proyecto audiovisual independiente</p>
        </div>

        {/* Navegación */}
        <div className="footerLinks">
          <h4>Navegación</h4>
          <a href="#Inicio">Inicio</a>
          <a href="#Cortometraje">Cortometraje</a>
          <a href="#Agenda">Agenda</a>
        </div>

        {/* Contacto oficial */}
        <div className="footerContacto">
          <h4>Contacto</h4>

          <a href="mailto:luzeternacorto@gmail.com">
            luzeternacorto@gmail.com
          </a>

          <a 
            href="https://instagram.com/luz.eterna.cortometraje"
            target="_blank"
            rel="noopener noreferrer"
            className="instagramLink"
          >
            <i className="fa-brands fa-instagram"></i>
            <span>luz.eterna.cortometraje</span>
            
          </a>

          <p>Director: 351-3514751</p>
          <p>Productora: 3541-602190</p>
        </div>

      </div>

      <div className="footerBottom">

        <p>© 2026 Luz Eterna — Todos los derechos reservados</p>

        <div className="footerCredits">

          <div className="creditItem">
            <p>Desarrollo y programación: Lautaro Nieto</p>
            <a 
              href="https://instagram.com/Lautaroo_nc"
              target="_blank"
              rel="noopener noreferrer"
              className="instagramLink"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>Lautaroo_nc</span>
              
            </a>
          </div>

          <div className="creditItem">
            <p>Diseño visual: Valentina Montes de Oca</p>
            <a 
              href="https://instagram.com/Valen.montesdeoca.dg"
              target="_blank"
              rel="noopener noreferrer"
              className="instagramLink"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>Valen.montesdeoca.dg</span>
              
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}