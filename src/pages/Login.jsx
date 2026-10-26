import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigate("/dashboard");
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control"/>
                </div>
        
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </>
    );

}