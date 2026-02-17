import { useState,useEffect } from "react"
import "./Navbar.css"

export const Navbar = () => {

    const [abierto, setAbierto] = useState(false)

    const toggleMenu = () => {
        setAbierto(!abierto)
    }

    const irA = (id) => {
        const el = document.getElementById(id)
        if (el){
            el.scrollIntoView({ behavior: "smooth"})
        }
        setAbierto(false)
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
                <h2 className="TituloNav"><a href="/"><img src="/LogosPng/logos _sin bajada_MesaDeTrabajo1.png" alt="" className="LogoNavbar"/></a></h2>
                
                <div className={`Hamburguesa ${abierto? "activo" : ""}`} onClick={toggleMenu}>
                    <i className={`fa-solid ${abierto ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <ul className={`UlNavbar ${abierto ? "mostrar" : ""}`}>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Inicio")} }>Inicio</button></li>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Inicio")}}>Cortometraje</button></li>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Familia-Buffo")}}>Familia Buffo</button></li>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Capilla")}}>Capilla</button></li>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Sobre-Nosotros")}}>Sobre Nosotros</button></li>
                    <li className="UlNavbar_elemento"><button onClick={() => {irA("Inicio")}}>Donaciones</button></li>
                </ul>
            </nav>
        </div>
    )
    
}