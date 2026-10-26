import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children }) {

    const { isLogueado } = useAuth();

    if (isLogueado) {
        return children;
    }

    return <Navigate to="/login" />;
}