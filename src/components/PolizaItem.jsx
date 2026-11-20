import Card from "react-bootstrap/Card";

export default function PolizaItem({
    numero,
    asegurado,
    ramo,
    patente,
    marca,
    modelo,
    anio,
    sumaAsegurada,
    cobertura,
    prima,
    estado
}) {

    return (
        <Card className="mb-3">
            <Card.Body>

                <Card.Title>
                    {numero}
                </Card.Title>

                <Card.Text>
                    Asegurado: {asegurado}
                </Card.Text>

                <Card.Text>
                    Ramo: {ramo}
                </Card.Text>

                <Card.Text>
                    Vehículo: {marca} {modelo} {anio}
                </Card.Text>

                <Card.Text>
                    Patente: {patente}
                </Card.Text>

                <Card.Text>
                    Suma asegurada: ${sumaAsegurada.toLocaleString()}
                </Card.Text>

                <Card.Text>
                    Cobertura: {cobertura}
                </Card.Text>

                <Card.Text>
                    Prima: ${prima.toLocaleString()}
                </Card.Text>

                <Card.Text>
                    Estado: {estado}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}