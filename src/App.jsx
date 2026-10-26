import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Asegurados from "./pages/Asegurados";
import Polizas from "./pages/Polizas";
import Usuarios from "./pages/Usuarios";
import Menu from "./components/Menu";

import AuthProvider from "./contexts/AuthContext";
import { ProtectedRoute } from "./contexts/ProtectedRoute";

function App() {

    return (
      <AuthProvider>
        <BrowserRouter>
            <Menu />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
                    <Route path="/asegurados" element={<ProtectedRoute><Asegurados /></ProtectedRoute>}/>
                    <Route path="/polizas" element={<ProtectedRoute><Polizas /></ProtectedRoute>}/>
                    <Route path="/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>}/>
                    <Route path="*" element={<h1>Error 404</h1>}/>
                </Routes>
            </Container>
        </BrowserRouter>
      </AuthProvider>
    );
}

export default App;