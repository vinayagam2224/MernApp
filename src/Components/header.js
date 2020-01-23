import React from "react";
const Header = () => {
  return (
      <header className="epb_header">
        <nav className="navbar navbar-expand-lg px-5">
            <a className="navbar-brand Josefin A-color" href="#">Elite Phones Beddau</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sell Your Phone Here</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Listings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"  aria-disabled="true">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"  aria-disabled="true">Contact Us</a>
                    </li>
                    
                </ul>
                
            </div>
        </nav>

    </header>

  );
};

export default Header;