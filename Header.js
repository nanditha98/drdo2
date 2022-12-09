import { Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <Navbar bg='dark' variant="dark">
            <NavbarBrand href="#home">Navbar</NavbarBrand>
            <nav className="mr-auto nav-bar-wrapper">
                <Link to="/add">Add Product</Link>
                <Link to='/update'>Update Product</Link>
                <Link to='/login'>Login</Link>
            </nav>
            </Navbar>
        </div>
    )
}
export default Header;