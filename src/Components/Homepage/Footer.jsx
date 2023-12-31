import React from 'react'

const Footer = () => {
  return (
    <div>

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />7351 N COLLEGE AVE FRESNO CA 93650-1170 USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />(888-462-1113) Ex 101</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />(442-372-7877)</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />ustruckingllc.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" href>Air Freight</a>
              <a className="btn btn-link" href>Sea Freight</a>
              <a className="btn btn-link" href>Road Freight</a>
              <a className="btn btn-link" href>Logistic Solutions</a>
              <a className="btn btn-link" href>Industry solutions</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href>About Us</a>
              <a className="btn btn-link" href>Contact Us</a>
              <a className="btn btn-link" href>Our Services</a>
              <a className="btn btn-link" href>Terms &amp; Condition</a>
              <a className="btn btn-link" href>Support</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Subscribe to our Newsletter to stay updated</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="https://ustruckingllc.com">ustruckingllc.com</a>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
    </div>



  )
}

export default Footer