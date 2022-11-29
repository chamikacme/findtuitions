import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <Link className="brandlogo" to="/">
            Find<span className="brandlogo-part">Tuition</span>
          </Link>
          <div>
            <p>
              The first ever
              <br />
              online tuition platform!
            </p>
          </div>
        </div>

        <div className="footer-column">
          <p>
            <Link className="footer-link" to="/register">
              Register
            </Link>
          </p>
          <p>
            <Link className="footer-link" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="footer-column">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">Find Tuition © 2022</div>
    </div>
  );
}

export default Footer;
