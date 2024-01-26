import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/navDados.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function NavDados() {
    useEffect(() => {
        ScrollReveal().reveal('.nav-add-color', {
            delay: 200,
            origin: 'right',
            distance: '500px', 
            duration: 500, 
            easing: 'ease-in-out', 
        });
      }, []);
    return (
        <>
            <nav className="navbar navbar-expand nav-add-color mb-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" >
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <a className="nav-link text-nav" href="/adicionar-combustivel">Adicionar Combustível</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-nav" href="/adicionar-transmissao">Adicionar Trasmissão</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-nav" href="/adicionar-marca">Adicionar Marca</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-nav" href="/adicionar-modelo">Adicionar Modelo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDados