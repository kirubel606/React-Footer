import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h4 className="mb-4">Our Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and news.</p>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="input-group">
                <input type="email" name="email" className="form-control" placeholder="Your Email" />
                <button type="submit" className="mt-0 btn btn-primary" style={{ height: "50px" }}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="mb-4">Useful Links</h4>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="mb-4">Our Services</h4>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="mb-4">Contact Us</h4>
            <p>A108 Adam Street<br /> New York, NY 535022<br /> United States<br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="mb-4">About DevVE</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3">
        <div className="container text-center">
          <div>&copy; Copyright <strong>DevVE</strong>. All Rights Reserved</div>
          <div>Designed by <a href="#" className="text-black">SalvadorDevVE</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
