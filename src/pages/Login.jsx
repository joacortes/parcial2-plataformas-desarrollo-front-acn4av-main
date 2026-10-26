import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const loginCorrecto = login(email, password);

        if(!loginCorrecto) {
            setError("Email o contraseña incorrectos");
            return;
        }

        setError("");
        navigate("/dashboard");
    };

    

    return (
        <>
            <h1>Login</h1>
            {
                error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )
            }

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
        
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </>
    );

}