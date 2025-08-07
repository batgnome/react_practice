// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/">Home</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/EventSignup">EventSignup</Link>
            <Link to="/Parent">Parent</Link>
            <Link to="/LazyLoadModal">LazyLoadModal</Link>
             
        </nav>
    );
}
