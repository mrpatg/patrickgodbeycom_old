import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

const NavbarMobile = class extends React.Component {


 
 render() {
   return (
    <div className="row">
      <div className="p-0 col">
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand" title="Logo">
            Patrick Godbey
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-link" to="/about">
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-link" to="/repo">
                        Repo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-link" to="/contact">
                        Contact
                        </Link>
                    </li>
                </ul>
                <br />
                <Footer />
            </div>
        </nav>
      </div>
    </div>

  )}
}

export default NavbarMobile
