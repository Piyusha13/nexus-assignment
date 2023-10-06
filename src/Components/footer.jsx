const Footer = () => {
    return (
        <div>
            <div className=" mt-5 pt-5">

                {/* <!-- Footer --> */}
                <footer
                    className="text-center text-lg-start text-white py-3"
                    style={{ backgroundColor: '#252525' }}
                >
                    
                    {/* <!-- Section: Links  --> */}
                    <section className="">
                        <div className="container text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div className="row">
                                {/* <!-- Grid column --> */}
                                <div className="col-5 text-left">
                                    {/* <!-- Content --> */}
                                    <h6 className="  float-left">Subscribe to Aesop communications</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '100%', backgroundColor: '#ffffff', height: '1px' }}
                                    />
                                    <p>
                                        Email address
                                    </p>
                                    <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-2 text-left">
                                    {/* <!-- Content --> */}
                                    <h6 className="  float-left">Orders and Support</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '100%', backgroundColor: '#ffffff', height: '1px' }}
                                    />
                                    <p>
                                       Contact Us
                                    </p>
                                    <p>FAQ</p>
                                    <p>Shipping</p>
                                    </div>
                                
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-3 ">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <a href="#!" className="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Help</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-2 ">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Copyright --> */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a
                        >
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}

            </div>
        </div>
    )
}

export default Footer;