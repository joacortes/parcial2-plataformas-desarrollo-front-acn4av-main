import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AseguradoItem from "../components/AseguradoItem";
import { aseguradosIniciales } from "../data/asegurados";

export default function Asegurados() {

    const [asegurados, setAsegurados] =useState(aseguradosIniciales);
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const agregarAsegurado = (e) => {

        e.preventDefault();

        const nuevoAsegurado = {
            id: Date.now(),
            nombre: nombre,
            dni: dni,
            email: email,
            telefono: telefono
        };


        setAsegurados([
            ...asegurados,
            nuevoAsegurado
        ]);


        setNombre("");
        setDni("");
        setEmail("");
        setTelefono("");

    };

    return (
        <>
            <h1 className="mb-4">Asegurados</h1>
            <form onSubmit={agregarAsegurado} className="mb-4">
                <h2>Nuevo asegurado</h2>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input type="text" className="form-control" value={dni} onChange={(e) => setDni(e.target.value)} required/>

                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                </div>
                
                <button type="submit" className="btn btn-primary">Agregar asegurado</button>
            </form>

            <Row>
                {
                    asegurados.map((asegurado) => (
                        <Col md={6} lg={4} key={asegurado.id}>
                            <AseguradoItem nombre={asegurado.nombre} dni={asegurado.dni} email={asegurado.email} telefono={asegurado.telefono}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}