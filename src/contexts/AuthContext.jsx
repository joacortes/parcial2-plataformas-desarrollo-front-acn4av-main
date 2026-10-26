import { createContext, useContext, useState } from "react";
import { usuarios } from "../data/usuarios";


const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [isLogueado, setIsLogueado] = useState(false);

    const [usuario, setUsuario] = useState(null);

    const login = (email, password) => {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.password === password)
        if(!usuarioEncontrado){
            return false;
        }
        setIsLogueado(true);
        setUsuario(usuarioEncontrado);
        return true;
    };

    const logout = () => {
        setIsLogueado(false);
        setUsuario(null);
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