import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useAuth } from "../contexts/AuthContext";
import { aseguradosIniciales } from "../data/asegurados";
import { polizasIniciales } from "../data/polizas";


export default function Dashboard() {

    const { usuario } = useAuth();


    const aseguradosGuardados = localStorage.getItem("asegurados");

    const asegurados = aseguradosGuardados
        ? JSON.parse(aseguradosGuardados)
        : aseguradosIniciales;


    const polizasGuardadas = localStorage.getItem("polizas");

    const polizas = polizasGuardadas
        ? JSON.parse(polizasGuardadas)
        : polizasIniciales;


    const polizasActivas = polizas.filter(
        (poliza) =>
            poliza.estado === "Activa"
    );


    const polizasAnuladas = polizas.filter(
        (poliza) =>
            poliza.estado === "Anulada"
    );


    const primaTotal = polizasActivas.reduce(
        (total, poliza) =>
            total + Number(poliza.prima),
        0
    );


    const comisionesTotales = polizasActivas.reduce(
        (total, poliza) =>
            total +
            Number(poliza.importeComision || 0),
        0
    );


    const formatearDinero = (valor) => {
        return Number(valor).toLocaleString(
            "es-AR"
        );
    };


    return (
        <>

            <h1 className="mb-2">
                Dashboard
            </h1>

            <p className="mb-4">
                Bienvenido, {usuario.nombre}
            </p>


            <Row>

                <Col md={6} lg={4}>
                    <Card className="mb-3 shadow-sm">
                        <Card.Body>

                            <Card.Title>
                                Asegurados
                            </Card.Title>

                            <h2>
                                {asegurados.length}
                            </h2>

                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6} lg={4}>
                    <Card className="mb-3 shadow-sm">
                        <Card.Body>

                            <Card.Title>
                                Pólizas activas
                            </Card.Title>

                            <h2>
                                {polizasActivas.length}
                            </h2>

                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6} lg={4}>
                    <Card className="mb-3 shadow-sm">
                        <Card.Body>

                            <Card.Title>
                                Pólizas anuladas
                            </Card.Title>

                            <h2>
                                {polizasAnuladas.length}
                            </h2>

                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6} lg={6}>
                    <Card className="mb-3 shadow-sm">
                        <Card.Body>

                            <Card.Title>
                                Prima total
                            </Card.Title>

                            <h2>
                                $
                                {formatearDinero(
                                    primaTotal
                                )}
                            </h2>

                        </Card.Body>
                    </Card>
                </Col>


                <Col md={6} lg={6}>
                    <Card className="mb-3 shadow-sm">
                        <Card.Body>

                            <Card.Title>
                                Comisiones totales
                            </Card.Title>

                            <h2>
                                $
                                {formatearDinero(
                                    comisionesTotales
                                )}
                            </h2>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    );
}