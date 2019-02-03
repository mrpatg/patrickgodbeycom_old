import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

const Navbar = class extends React.Component {


 
 render() {
   return (
    <div className="row">
      <div className="col h-100">
        <div className="row">
          <div className="col-8 pt-5 mx-auto justify-content-center" id="navbar-container">
                <p>
                  <Link to="/" className="text-light h3" title="Logo">
                    Patrick Godbey
                  </Link>
                </p>
                <p className="text-white small">
                  I am a web develper from West Virginia. <br />
                  This is my blog, a repository of code bits, and other things I find interesting or am working on.
                </p>
                <hr className="light"/>
                <p>
                  <ul class="list-group">
                  <Link className="list-group-item text-uppercase text-muted" to="/">
                      Home
                    </Link>
                    <Link className="list-group-item text-uppercase text-muted" to="/about">
                      About
                    </Link>
                    <Link className="list-group-item text-uppercase text-muted" to="/repo">
                      Repo
                    </Link>
                    <Link className="list-group-item text-uppercase text-muted" to="/contact">
                      Contact
                    </Link>
                    <a href="//github.com/mrpatg" className="list-group-item text-uppercase text-muted">
                      GitHub
                    </a>
                    <a href="//twitter.com/mrpatg" className="list-group-item text-uppercase text-muted">
                      Twitter
                    </a>
                  </ul>
                </p>
                <hr className="light" />
                <p className="text-muted">
                  <Footer />
                </p>
          </div>
        </div>
      </div>
    </div>

  )}
}

export default Navbar
