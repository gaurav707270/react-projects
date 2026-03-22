import "./navbar.css";



export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
                <div className="container">

                    {/* Logo */}
                    <a className="navbar-brand fw-bold" href="#">
                        <img
                            src="https://bugspatrol.ancorathemes.com/wp-content/uploads/2016/07/logo2x.png"
                            alt="logo"
                            style={{ width: "180px" }}
                        />
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav align-items-center gap-4">

                            <li className="nav-item">
                                <a className="nav-link nav-hover active" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-hover" href="#">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-hover" href="#">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link nav-hover" href="#">Blog</a>
                            </li>

                            {/* Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link  nav-hover"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Book Service
                                </a>

                                <ul className="dropdown-menu shadow border-0">
                                    <li><a className="dropdown-item" href="#">Pest Control</a></li>
                                    <li><a className="dropdown-item" href="#">Termite Control</a></li>
                                    <li><a className="dropdown-item" href="#">Home Sanitization</a></li>
                                </ul>
                            </li>

                            {/* Contact Button */}
                            <li className="nav-item">
                                <a className="btn btn-success px-4 py-2 fw-semibold" href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
