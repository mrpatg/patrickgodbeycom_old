import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/Footer'

const Navbar = class extends React.Component {


 
 render() {
   return (
    <div className="row">
      <div className="col h-100">
        <div className="row">
          <div className="col-8 pt-5 mx-auto justify-content-center">
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
                  <Link className="text-uppercase text-muted" to="/about">
                    About
                  </Link>
                  <br />
                  <Link className="text-uppercase text-muted" to="/repo">
                    Repo
                  </Link>
                  <br />
                  <Link className="text-uppercase text-muted" to="/contact">
                    Contact
                  </Link>
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
