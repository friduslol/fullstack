import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { UserContext }from "../contexts/UserContext";
import { useContext } from "react";

const Navbar = () => {
    const { loggedinUser } = useContext(UserContext);

    return(
        <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Brand as={Link} to="/">Home</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link as={Link} to="/categories">Katagorier</ReactBootstrap.Nav.Link>
                {loggedinUser ? (
                    <ReactBootstrap.Nav.Link as={Link} to="/User">Profil</ReactBootstrap.Nav.Link>
                ) : (
                    <ReactBootstrap.Nav.Link as={Link} to="/User">Logga In</ReactBootstrap.Nav.Link>
                )}
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    )
};

export default Navbar;