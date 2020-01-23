import React from "react";

const Footer = () => {
  return (
    <footer>
        <div className="container epb-footer">
            <div className="row">
                <div className="col-sm-3">
                    <a className="foot-logo Josefin A-color" href="#">Elite Phones Beddau</a>
                    <div className="foot-social-links">
                        <a href="#">
                            <span>
                                <img src="../IMAGES/fb.png" alt=""/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <img src="../IMAGES/tw.png" alt=""/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <img src="../IMAGES/ig.png" alt=""/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="foot-links d-flex justify-content-between">
                        <div className="epb-nav-links">
                            <p><a href="#">Listings</a></p>
                            <p><a href="#">About Us</a></p>
                            <p><a href="#">How It Works</a></p>
                        </div>
                        <div className="epb-nav-links">
                            <p><a href="#">Privacy Agreement</a></p>
                            <p><a href="#">Terms  Conditions</a></p>
                        </div>
                        <div className="epb-nav-links">
                            <p><a href="#">Blog</a></p>
                            <p><a href="#">Forum</a></p>
                        </div>
                        <div className="epb-nav-links">
                            <p><a href="#">Contact Us</a></p>
                                <p className="epb-foot-address">#25 Lorem Street Ipsum Avenue- 64254 United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>ALL RIGHTS RESERVED @ 2019</p>
        </div>
    </footer>
 
  );
};

export default Footer;