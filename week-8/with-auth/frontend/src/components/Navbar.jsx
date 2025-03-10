import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Properties</h1>
      <div className="links">
        <Link to="/login" >Login</Link>
        <Link to="/signup" >Signup</Link>
        <a href="/">Home</a>
        <a href="/add-property">Add Property</a>
      </div>
    </nav>
  );
}

export default Navbar;