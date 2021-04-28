import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Navbar = () => {
    return(
        <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Brand as={Link} to="/">Home</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link as={Link} to="/categories">Katagorier</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link as={Link} to="/User">Logga In</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Form inline>
                <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
                </ReactBootstrap.Form>
            </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    )
};

export default Navbar;