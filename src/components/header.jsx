import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/header.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    useEffect(() => {
        ScrollReveal().reveal('.nav', {
            delay: 50,
            rotate: {
                x: 10,
                y: 10,
                z: 10
            }
        });
    }, []);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light nav">
                    <div className="container">
                        <Link to="/" className="navbar-brand mx-2 text-effect title-nav">
                            APICarros
                        </Link>
                        <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" className="menu-icon">
                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="/adicionar">Adicionar dados</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="/documentacao">Documentação</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header