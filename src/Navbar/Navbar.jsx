import { useState,useEffect } from "react"
import "./Navbar.css"

export const Navbar = () => {

    const [abierto, setAbierto] = useState(false)

    const toggleMenu = () => {
        setAbierto(!abierto)
    }

    useEffect(()=>{
        if(abierto){
            document.body.style.overflow = "hidden"
        } else{
            document.body.style.overflow = "auto"
        }
    },[abierto])

    return(
        <div>
            <nav className="Navbar">
                <h2 className="TituloNav"><a href="/"><img src="/LogosPng/logorecord2.png" alt="" className="LogoNavbar"/></a></h2>
                
                <div className={`Hamburguesa ${abierto? "activo" : ""}`} onClick={toggleMenu}>
                    <i className={`fa-solid ${abierto ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <ul className={`UlNavbar ${abierto ? "mostrar" : ""}`}>
                    <li className="UlNavbar_elemento"><a href="/">Guido Guffo</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Sobre Nosotros</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Proyectos</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Donaciones</a></li>
                </ul>
            </nav>
        </div>
    )
    
}