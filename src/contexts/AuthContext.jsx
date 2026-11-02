import { createContext, useContext, useState } from "react";
import { usuarios } from "../data/usuarios";


const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            return JSON.parse(usuarioGuardado);
        }

        return null;
    });

    const isLogueado = usuario !== null;

    const login = (email, password) => {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.password === password)
        if(!usuarioEncontrado){
            return false;
        }

        setUsuario(usuarioEncontrado);

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuarioEncontrado)
        );

        return true;
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario");
    };

    return (
        <AuthContext.Provider value={{ isLogueado, usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    return useContext(AuthContext);
};