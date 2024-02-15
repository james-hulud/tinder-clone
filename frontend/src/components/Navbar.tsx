import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fa-solid fa-bars"></i>
        </label>
        <label className="logo">RF-date</label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
