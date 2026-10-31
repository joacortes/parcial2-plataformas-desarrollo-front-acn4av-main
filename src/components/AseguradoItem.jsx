import Card from "react-bootstrap/Card";

export default function AseguradoItem({
    nombre,
    dni,
    email,
    telefono
}) {

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>DNI: {dni}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Teléfono: {telefono}</Card.Text>
            </Card.Body>
        </Card>
    );

}