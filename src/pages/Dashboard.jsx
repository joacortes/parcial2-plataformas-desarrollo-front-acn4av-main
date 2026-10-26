import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {

    const { usuario } = useAuth();

    return (
        <>
            <h1>Dashboard</h1>
            <p>Bienvenido, {usuario.nombre}</p>
            <p>Rol: {usuario.rol}</p>
        </>
    );
}