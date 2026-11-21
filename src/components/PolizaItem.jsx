import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function PolizaItem({
    id,
    numero,
    asegurado,
    ramo,
    patente,
    marca,
    modelo,
    anio,
    sumaAsegurada,
    cobertura,
    tasa,
    vigenciaDesde,
    vigenciaHasta,
    prima,  
    comision,
    importeComision,
    estado,
    anularPoliza
}) {

    const formatearDinero = (valor) => {
        return Number(valor).toLocaleString("es-AR");
    };

    return (
        <Card className="mb-4 shadow-sm">

            <Card.Header className="d-flex justify-content-between align-items-center">

                <strong>
                    {numero}
                </strong>

                <Badge
                    bg={
                        estado === "Activa"
                            ? "success"
                            : "danger"
                    }
                >
                    {estado}
                </Badge>

            </Card.Header>


            <Card.Body>

                <Card.Title>
                    {asegurado}
                </Card.Title>


                <hr />


                <h6>Datos de la póliza</h6>

                <p className="mb-1">
                    <strong>Ramo:</strong> {ramo}
                </p>

                <p className="mb-1">
                    <strong>Cobertura:</strong> {cobertura}
                </p>

                <p className="mb-1">
                    <strong>Tasa:</strong> {tasa}‰
                </p>


                <hr />


                <h6>Vehículo</h6>

                <p className="mb-1">
                    <strong>Vehículo:</strong>{" "}
                    {marca} {modelo} {anio}
                </p>

                <p className="mb-1">
                    <strong>Patente:</strong> {patente}
                </p>

                <p className="mb-1">
                    <strong>Suma asegurada:</strong>{" "}
                    ${formatearDinero(sumaAsegurada)}
                </p>


                <hr />


                <h6>Vigencia</h6>

                <p className="mb-1">
                    <strong>Desde:</strong> {vigenciaDesde}
                </p>

                <p className="mb-1">
                    <strong>Hasta:</strong> {vigenciaHasta}
                </p>


                <hr />


                <h6>Valores</h6>

                <p className="mb-1">
                    <strong>Prima:</strong>{" "}
                    ${formatearDinero(prima)}
                </p>

                <p className="mb-1">
                    <strong>Comisión:</strong>{" "}
                    {comision}%
                </p>

                <p className="mb-3">
                    <strong>Importe comisión:</strong>{" "}
                    ${formatearDinero(importeComision)}
                </p>


                {estado === "Activa" && (
                    <Button
                        variant="danger"
                        onClick={() =>
                            anularPoliza(id)
                        }
                    >
                        Anular póliza
                    </Button>
                )}

            </Card.Body>

        </Card>
    );
}