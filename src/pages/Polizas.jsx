import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PolizaItem from "../components/PolizaItem";
import { polizasIniciales } from "../data/polizas";

export default function Polizas() {

    const [polizas] = useState(polizasIniciales);

    return (
        <>
            <h1 className="mb-4">
                Pólizas
            </h1>

            <Row>
                {
                    polizas.map((poliza) => (

                        <Col
                            md={6}
                            lg={4}
                            key={poliza.id}
                        >

                            <PolizaItem
                                numero={poliza.numero}
                                asegurado={poliza.asegurado}
                                ramo={poliza.ramo}
                                patente={poliza.patente}
                                marca={poliza.marca}
                                modelo={poliza.modelo}
                                anio={poliza.anio}
                                sumaAsegurada={poliza.sumaAsegurada}
                                cobertura={poliza.cobertura}
                                prima={poliza.prima}
                                estado={poliza.estado}
                            />

                        </Col>

                    ))
                }
            </Row>
        </>
    );
}