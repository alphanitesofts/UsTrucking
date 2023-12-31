import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="container-fluid p-0 pb-5" >
                <div className=" header-carousel position-relative mb-5">
                    <div className=" position-relative">
                        <img className="img-fluid heroImg" src="img/truck2.jpg" alt />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, .5)' }}>
                            <div className="container">
                                <div className="row justify-content-start mt-5">
                                    <div className="col-10 col-lg-8">
                                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Transport &amp; Logistics Solution</h5>
                                        <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">Logistics</span> Solution</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Providing Comprehensive Logistics Services for Smooth and Streamlined Operations for everyone.</p>
                                        <a href='#facts' className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href='#contact' className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero