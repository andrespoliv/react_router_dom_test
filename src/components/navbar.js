import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav  ml-auto mb-lg-0">
                    <li className="nav-item ">
                        <Link className="nav-link active text-white fs-5" aria-current="page" href="#">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white fs-5"
                        ><Link to="/Login"> Login </Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white fs-5" ><Link to="/Eventos"> Eventos </Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white fs-5" ><Link to="/Nosotros"> Nosotros </Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white fs-5" ><Link to="/Contacto"> Contacto </Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-white fs-5" ><Link to="/EventoHandler"> EventoHandler </Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MiCuenta"><Link className="btn btn-outline-light far fa-user-circle border-0 m-2 fs-5" ></Link></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-outline-light fab fa-facebook-f border-0 m-2 fs-5"
                            href="www.facebook.com"></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-outline-light fab fa-instagram border-0 m-2 fs-5"
                            href="www.instagram.com"></Link>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar;