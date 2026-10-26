import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {

    const { isLogueado } = useAuth();
    return (
        <>
            <h1>Dashboard</h1>
            <p> Estado login: {isLogueado ? " Sí" : " No"}</p>
        </>
    );
}