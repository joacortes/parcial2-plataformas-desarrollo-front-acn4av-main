import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Menu(){

        const {
            isLogueado,
            logout
        } = useAuth();

        const navigate = useNavigate();

        const handleLogout = () => {
            logout();
            navigate("/login");
        };

        return(
        
        <Navbar bg="dark" data-bs-theme="dark" expand="lg"> 
            <Container>
                
                <Navbar.Brand as={Link} to="/">
                    SegurosApp
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="menu-principal" />
                <Navbar.Collapse id="menu-principal">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/asegurados">Asegurados</Nav.Link>
                        <Nav.Link as={Link} to="/polizas">Pólizas</Nav.Link>
                        <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
                        {
                            isLogueado ? 
                            (
                                <Button variant="outline-light" onClick={handleLogout}>Cerrar sesión</Button>
                            )
                            : 
                            (
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        
        </Navbar>
    )
}