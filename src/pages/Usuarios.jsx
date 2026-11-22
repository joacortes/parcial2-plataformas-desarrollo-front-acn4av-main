import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UsuarioItem from "../components/UsuarioItem";
import { useAuth } from "../contexts/AuthContext";

export default function Usuarios() {

    const {
        usuarios,
        setUsuarios,
        usuario
    } = useAuth();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("productor");

    const agregarUsuario = (e) => {

        e.preventDefault();

        const existeEmail = usuarios.find(
            (usuario) =>
                usuario.email === email
        );

        if (existeEmail) {
            alert("Ya existe un usuario con ese email");
            return;
        }

        const nuevoUsuario = {
            id: Date.now(),
            nombre,
            email,
            password,
            rol
        };

        setUsuarios([
            ...usuarios,
            nuevoUsuario
        ]);

        setNombre("");
        setEmail("");
        setPassword("");
        setRol("productor");
    };

    const eliminarUsuario = (id) => {

        if (usuario.id === id) {
            alert("No podés eliminar tu propio usuario");
            return;
        }

        const usuariosActualizados =
            usuarios.filter(
                (usuario) =>
                    usuario.id !== id
            );

        setUsuarios(
            usuariosActualizados
        );
    };

    return (
        <>
            <h1 className="mb-4">
                Usuarios
            </h1>

            <form
                onSubmit={agregarUsuario}
                className="mb-5"
            >

                <h2>
                    Nuevo usuario
                </h2>

                <div className="mb-3">

                    <label className="form-label">
                        Nombre
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) =>
                            setNombre(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Rol
                    </label>

                    <select
                        className="form-select"
                        value={rol}
                        onChange={(e) =>
                            setRol(e.target.value)
                        }
                    >

                        <option value="productor">
                            Productor
                        </option>

                        <option value="admin">
                            Administrador
                        </option>

                    </select>

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar usuario
                </button>

            </form>

            <Row>
                {
                    usuarios.length === 0 ? (
                        <div className="alert alert-info">
                            No hay usuarios registrados.
                        </div>
                    ) : (
                        usuarios.map((usuarioItem) => (
                            <Col
                                md={6}
                                lg={4}
                                key={usuarioItem.id}
                            >
                                <UsuarioItem
                                    id={usuarioItem.id}
                                    nombre={usuarioItem.nombre}
                                    email={usuarioItem.email}
                                    rol={usuarioItem.rol}
                                    eliminarUsuario={eliminarUsuario}
                                />
                            </Col>
                        ))
                    )
                }

            </Row>

        </>
    );

}