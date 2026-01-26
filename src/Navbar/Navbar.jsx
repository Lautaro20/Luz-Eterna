import "./Navbar.css"

export const Navbar = () => {

    return(
        <div>
            <nav className="Navbar">
                <h2 className="TituloNav"><a href="/"><img src="/LogosPng/logorecord2.png" alt="" className="LogoNavbar"/></a></h2>
                <ul className="UlNavbar">
                    <li className="UlNavbar_elemento"><a href="/">Guido Guffo</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Sobre Nosotros</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Proyectos</a></li>
                    <li className="UlNavbar_elemento"><a href="/">Donaciones</a></li>
                </ul>
            </nav>
        </div>
    )
    
}