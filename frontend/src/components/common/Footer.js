import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["vietnamese"], weight: "400" });

export default function Footer() {
  return (
    <footer
      className="container-fluid py-5"
      style={{ backgroundColor: "#5DC1D3" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            <a href="#" className={`${pacifico.className} fs-1 text-white`}>
              HmS
            </a>
            <p className="text-white my-3 fw-bold">Hotel Management</p>
          </div>
          <div className="col-3">
            <h4 className="text-white">About</h4>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Company
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                About us
              </a>
            </p>
            <p>
              <a href="/career" className="text-white text-decoration-none">
                Career
              </a>
            </p>
          </div>

          <div className="col-3">
            <h4 className="text-white">Contact</h4>
            <p>
              <a href="#" className="text-white text-decoration-none me-2">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-2">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="#" className="text-white text-decoration-none me-2">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="fa fa-youtube"></i>
              </a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">
                Send Message
              </a>
            </p>
            
          </div>

          <div className="col-3">
            <h4 className="text-white">Support</h4>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Terms and Conditions
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Help
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
