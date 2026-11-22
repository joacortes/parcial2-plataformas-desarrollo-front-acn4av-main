import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Inicio() {

    return (
        <>

            <div className="text-center mb-5">

                <h1 className="mb-3">
                    Sistema de Gestión de Seguros
                </h1>

                <p className="lead">
                    Administrá asegurados, pólizas, usuarios y métricas
                    desde un mismo lugar.
                </p>

            </div>


            <Row className="g-4">

                <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm">

                        <Card.Body>

                            <Card.Title>
                                Asegurados
                            </Card.Title>

                            <Card.Text>
                                Consultá los asegurados registrados,
                                agregá nuevos y gestioná su información.
                            </Card.Text>

                            <Button
                                as={Link}
                                to="/asegurados"
                                variant="primary"
                            >
                                Ver asegurados
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>


                <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm">

                        <Card.Body>

                            <Card.Title>
                                Pólizas
                            </Card.Title>

                            <Card.Text>
                                Emití pólizas, consultá coberturas,
                                primas, comisiones y estados.
                            </Card.Text>

                            <Button
                                as={Link}
                                to="/polizas"
                                variant="primary"
                            >
                                Ver pólizas
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>


                <Col md={6} lg={4}>

                    <Card className="h-100 shadow-sm">

                        <Card.Body>

                            <Card.Title>
                                Dashboard
                            </Card.Title>

                            <Card.Text>
                                Visualizá métricas de asegurados,
                                pólizas activas, primas y comisiones.
                            </Card.Text>

                            <Button
                                as={Link}
                                to="/dashboard"
                                variant="primary"
                            >
                                Ir al dashboard
                            </Button>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </>
    );
}