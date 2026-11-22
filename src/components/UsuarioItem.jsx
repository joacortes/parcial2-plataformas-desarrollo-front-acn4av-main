import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function UsuarioItem({
    id,
    nombre,
    email,
    rol,
    eliminarUsuario
}) {

    return (
        <Card className="mb-3">

            <Card.Body>

                <Card.Title>
                    {nombre}
                </Card.Title>

                <Card.Text>
                    {email}
                </Card.Text>

                <Badge
                    bg={
                        rol === "admin"
                            ? "primary"
                            : "secondary"
                    }
                    className="mb-3"
                >
                    {rol}
                </Badge>

                <br />

                <Button
                    variant="danger"
                    onClick={() =>
                        eliminarUsuario(id)
                    }
                >
                    Eliminar usuario
                </Button>

            </Card.Body>

        </Card>
    );
}