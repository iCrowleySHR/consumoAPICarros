import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/navDados.css'
import { Link } from 'react-router-dom'

function NavDados() {
    return (
        <>
            <nav className="navbar navbar-expand nav-add-color mb-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" >
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <Link className="nav-link text-nav" to="/adicionar-combustivel">Adicionar Combustível</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link text-nav" to="/adicionar-transmissao">Adicionar Trasmissão</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-nav" to="/adicionar-marca">Adicionar Marca</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-nav" to="/adicionar-modelo">Adicionar Modelo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDados