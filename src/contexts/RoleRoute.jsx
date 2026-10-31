import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function RoleRoute({ children, rolPermitido }) {

    const { usuario } = useAuth();

    if (!usuario) {
        return <Navigate to="/login" />;
    }

    if (usuario.rol !== rolPermitido) {
        return <Navigate to="/dashboard" />;
    }

    return children;
}