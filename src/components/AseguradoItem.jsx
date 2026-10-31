import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Asegurados from "../pages/Asegurados";

export default function AseguradoItem({
    id,
    nombre,
    dni,
    email,
    telefono,
    eliminarAsegurado
}) {

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>DNI: {dni}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Teléfono: {telefono}</Card.Text>
                <Button variant="danger" onClick={() => eliminarAsegurado(id)}> Eliminar</Button>
            </Card.Body>
        </Card>
    );

}