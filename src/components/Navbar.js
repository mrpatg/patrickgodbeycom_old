import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Footer from '../components/Footer'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
    <div className="row">
      <div className="col d-none d-sm-block d-md-block d-lg-none d-xl-none">
        <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Patrick Godbey" style={{ width: '143px' }} />
              </Link>
              {/* Hamburger menu */}
              <div className="navbar-burger burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/repo">
                Repo
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/mrpatg"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Footer />
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="col d-sm-none d-md-none d-lg-block d-xl-block h-100">
        <div className="row">
          <div className="col-8 pt-5 mx-auto justify-content-center">
                <Link to="/" className="text-light" title="Logo">
                  Patrick Godbey
                </Link>
                <br />
                <Link className="text-light" to="/about">
                  About
                </Link>
                <br />
                <Link className="text-light" to="/repo">
                  Repo
                </Link>
                <br />
                <Link className="text-light" to="/contact">
                  Contact
                </Link>
                <br />
          </div>
        </div>
        <div className="row text-muted">
          <div className="col-8 mx-auto justify-content-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>

  )}
}

export default Navbar
