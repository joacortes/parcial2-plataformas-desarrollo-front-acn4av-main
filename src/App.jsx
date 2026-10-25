import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Asegurados from "./pages/Asegurados";
import Polizas from "./pages/Polizas";
import Usuarios from "./pages/Usuarios";

function App() {

    return (
        <BrowserRouter>
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/asegurados" element={<Asegurados />}/>
                    <Route path="/polizas" element={<Polizas />}/>
                    <Route path="/usuarios" element={<Usuarios />}/>
                    <Route path="*" element={<h1>Error 404</h1>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;