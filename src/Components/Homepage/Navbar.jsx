import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary fixed-top p-0">
        <a href="#" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
          <h2 className="mb-2 text-white">Us Trucking</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#services" className="nav-item nav-link">Services</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
              <div className="dropdown-menu fade-up m-0">
                <a href="#pricing" className="dropdown-item">Pricing Plan</a>
                <a href="#features" className="dropdown-item">Features</a>
                <a href="#team" className="dropdown-item">Our Team</a>
                <a href="#testimonial" className="dropdown-item">Testimonial</a>
                {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
              </div>
            </div>
            <a href="#contact" className="nav-item nav-link">Contact</a>
          </div>
          <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3" /> (888-462-1113) Ex 101</h4>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  )
}

export default Navbar