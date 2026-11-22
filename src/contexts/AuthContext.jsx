import { createContext, useContext, useEffect, useState } from "react";
import { usuarios as usuariosIniciales } from "../data/usuarios";


const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            return JSON.parse(usuarioGuardado);
        }

        return null;
    });

    const [usuarios, setUsuarios] = useState(() => {
        const usuariosGuardados =
            localStorage.getItem("usuarios");

        if (usuariosGuardados) {
            return JSON.parse(usuariosGuardados);
        }

        return usuariosIniciales;
    });

    const isLogueado = usuario !== null;

    useEffect(() => {
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );
    }, [usuarios]);

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
        <AuthContext.Provider value={{ isLogueado, usuario, usuarios, setUsuarios, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => {
    return useContext(AuthContext);
};