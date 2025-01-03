import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          <img
            className="w-24"
            src="https://capturecrewfilms.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblack.c0e60bb7.jpg&w=3840&q=75"
            alt=""
          />
        </div>
        <div className="flex justify-between gap-2">
          <Link className="nav-link" to={"/photography"}>
            Photography
          </Link>
          <Link className="nav-link" to={"/flim"}>
            Films
          </Link>
          <Link className="nav-link" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="nav-link" to={"/crew"}>
            Crew
          </Link>
          <Link className="nav-link" to={"/about"}>
            About Us
          </Link>
        </div>
        <div className="flex justify-between gap-2">
          <Link to={"/http://instagram.com/capturecrew.films"}>IG</Link>
          <i></i>
          <button className="nav-button">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
