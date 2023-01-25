import React from 'react'

const About = () => {
  return (
    <div>
        {/* About Start */}
  <div className="container-fluid overflow-hidden py-5 px-lg-0">
    <div className="container about py-5 px-lg-0">
      <div className="row g-5 mx-lg-0">
        <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{objectFit: 'cover'}} alt />
          </div>
        </div>
        <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
          <h1 className="mb-5">GET YOURSELF A BETTER DISPATCH NOW!</h1>
          <p className="mb-5">In the trucking industry, a good driver is everything. A good dispatcher is a close second. Our dispatchers are our biggest asset. They’re honest, motivated, and professional. Our dispatchers are always motivated to get you the highest possible rate every time. They’re trained on advanced rate negotiation and freight market dynamics allowing them to get the highest rates. We use the latest in technology and use data to help make better decisions. From custom-built multi-threading computers to 4K screens and Live Loadboards. Everything designed to serve a purpose and that purpose is to make your life a little easier.</p>
          {/* <div className="row g-4 mb-5">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
              <i className="fa fa-globe fa-3x text-primary mb-3" />
              <h5>National Coverage</h5>
              <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
              <i className="fa fa-shipping-fast fa-3x text-primary mb-3" />
              <h5>On Time Delivery</h5>
              <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
            </div>
          </div> */}
          <a href className="btn btn-primary py-3 px-5">Explore More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
    </div>
  )
}

export default About