import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/navDados.css'

function NavDados() {
    return (
        <>
            <nav className="navbar navbar-expand nav-add-color mb-3">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-nav" href="/adicionar-combustivel">Adicionar Combustível</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-nav" href="/adicionar-transmissao">Adicionar Trasmissão</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-nav" href="/adicionar-marca">Adicionar Marca</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDados