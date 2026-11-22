import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PolizaItem from "../components/PolizaItem";
import { polizasIniciales } from "../data/polizas";
import { aseguradosIniciales } from "../data/asegurados";
import { coberturas } from "../data/coberturas";
import { useAuth } from "../contexts/AuthContext";

export default function Polizas() {

    const [polizas, setPolizas] = useState(() => {
        const polizasGuardadas = localStorage.getItem("polizas");

        if (polizasGuardadas) {
            return JSON.parse(polizasGuardadas);
        }

        return polizasIniciales;
    });

    useEffect(() => {
        localStorage.setItem(
            "polizas",
            JSON.stringify(polizas)
        );
    }, [polizas]);

    const asegurados = (() => {
        const aseguradosGuardados =
            localStorage.getItem("asegurados");

        if (aseguradosGuardados) {
            return JSON.parse(aseguradosGuardados);
        }

        return aseguradosIniciales;
    })();

    const [aseguradoId, setAseguradoId] = useState("");
    const [patente, setPatente] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [anio, setAnio] = useState("");
    const [sumaAsegurada, setSumaAsegurada] = useState("");
    const [coberturaId, setCoberturaId] = useState("");
    const [vigenciaDesde, setVigenciaDesde] = useState("");
    const [vigenciaHasta, setVigenciaHasta] = useState("");
    const [comision, setComision] = useState("");
    const [mensaje, setMensaje] = useState("");
    const { usuario } = useAuth();

    const emitirPoliza = (e) => {

        e.preventDefault();

        const aseguradoSeleccionado = asegurados.find(
            (asegurado) =>
                asegurado.id === Number(aseguradoId)
        );

        const coberturaSeleccionada = coberturas.find(
            (cobertura) =>
                cobertura.id === Number(coberturaId)
        );

        const fechaDesde = new Date(vigenciaDesde);
        const fechaHasta = new Date(vigenciaHasta);
    
        const diferenciaMilisegundos = fechaHasta - fechaDesde;
    
        const diasVigencia = Math.ceil(
            diferenciaMilisegundos /
            (1000 * 60 * 60 * 24)
        );
    
        if (diasVigencia <= 0) {
            setMensaje(
                "La fecha hasta debe ser posterior a la fecha desde"
            );
            return;
        }

        setMensaje("");
    
        const prima = Number(sumaAsegurada) * coberturaSeleccionada.tasa / 1000 * diasVigencia / 365;
        const primaRedondeada = Math.round(prima);

        const importeComision = primaRedondeada * Number(comision) / 100;
        const importeComisionRedondeado = Math.round(importeComision);

        const numeroPoliza = `POL-${String(polizas.length + 1).padStart(4, "0")}`;

    
        const nuevaPoliza = {
    
            id: Date.now(),
    
            numero: numeroPoliza,
    
            asegurado: aseguradoSeleccionado.nombre,
    
            ramo: "Automotor",
    
            patente: patente,
    
            marca: marca,
    
            modelo: modelo,
    
            anio: Number(anio),
    
            sumaAsegurada: Number(sumaAsegurada),
    
            cobertura: coberturaSeleccionada.nombre,
    
            tasa: coberturaSeleccionada.tasa,
    
            vigenciaDesde: vigenciaDesde,
    
            vigenciaHasta: vigenciaHasta,
    
            prima: primaRedondeada,
            
            productorId: usuario.id,

            productorNombre: usuario.nombre,

            comision: Number(comision),
        
            importeComision: importeComisionRedondeado,
    
            estado: "Activa"

        };
    
        setPolizas([
            ...polizas,
            nuevaPoliza
        ]);
    
        setAseguradoId("");
        setPatente("");
        setMarca("");
        setModelo("");
        setAnio("");
        setSumaAsegurada("");
        setCoberturaId("");
        setVigenciaDesde("");
        setVigenciaHasta("");
        setComision("");
    };

    const anularPoliza = (id) => {

        const polizasActualizadas = polizas.map(
            (poliza) => {

                if (poliza.id === id) {
                    return {
                        ...poliza,
                        estado: "Anulada"
                    };
                }

                return poliza;
            }
        );

        setPolizas(polizasActualizadas);
    };

    const polizasVisibles = usuario.rol === "productor"
        ? polizas.filter(
            (poliza) =>
                poliza.productorId === usuario.id
        )
        : polizas;

    return (
        <>
            <h1 className="mb-4">
                Pólizas
            </h1>
            
            {mensaje && (
                <div className="alert alert-danger">
                    {mensaje}
                </div>
            )}

            <form className="mb-5" onSubmit={emitirPoliza}>

                <h2 className="mb-3">Nueva póliza</h2>

                <div className="mb-3">
                    <label className="form-label">Asegurado</label>

                    <select className="form-select" value={aseguradoId} onChange={(e) => setAseguradoId(e.target.value)} required>
                        <option value="">
                            Seleccionar asegurado
                        </option>
                        {
                            asegurados.map((asegurado) => (
                                <option
                                    key={asegurado.id}
                                    value={asegurado.id}
                                >
                                    {asegurado.nombre} - DNI {asegurado.dni}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <h3 className="mt-4">Vehículo</h3>

                <div className="mb-3">
                    <label className="form-label">
                        Patente
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={patente}
                        onChange={(e) =>
                            setPatente(e.target.value)
                        }
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Marca
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={marca}
                        onChange={(e) =>
                            setMarca(e.target.value)
                        }
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Modelo
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={modelo}
                        onChange={(e) =>
                            setModelo(e.target.value)
                        }
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Año
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={anio}
                        onChange={(e) =>
                            setAnio(e.target.value)
                        }
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Suma asegurada
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={sumaAsegurada}
                        onChange={(e) =>
                            setSumaAsegurada(e.target.value)
                        }
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cobertura</label>
                    <select
                        className="form-select"
                        value={coberturaId}
                        onChange={(e) =>
                            setCoberturaId(e.target.value)
                        }
                        required
                    >
                        <option value="">
                            Seleccionar cobertura
                        </option>
                        {
                            coberturas.map((cobertura) => (
                                <option
                                    key={cobertura.id}
                                    value={cobertura.id}
                                >
                                    {cobertura.nombre} - {cobertura.tasa}‰
                                </option>
                            ))
                        }

                    </select>

                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Vigencia desde
                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={vigenciaDesde}
                        onChange={(e) =>
                            setVigenciaDesde(e.target.value)
                        }
                        required
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">
                        Vigencia hasta
                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={vigenciaHasta}
                        onChange={(e) =>
                            setVigenciaHasta(e.target.value)
                        }
                        required
                    />
                </div>
                <div className="mb-3">

                    <label className="form-label">
                        Comisión %
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={comision}
                        onChange={(e) =>
                            setComision(e.target.value)
                        }
                        min="0"
                        max="100"
                        required
                    />

                </div>


                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Emitir póliza
                </button>

            </form>
            <Row>
                {
                    polizasVisibles.length === 0 ? (
                        <div className="alert alert-info">
                            No hay pólizas emitidas para mostrar.
                        </div>
                    ) : (
                        polizasVisibles.map((poliza) => (
                            <Col
                                md={6}
                                lg={4}
                                key={poliza.id}
                            >
                                <PolizaItem
                                    id={poliza.id}
                                    numero={poliza.numero}
                                    asegurado={poliza.asegurado}
                                    ramo={poliza.ramo}
                                    patente={poliza.patente}
                                    marca={poliza.marca}
                                    modelo={poliza.modelo}
                                    anio={poliza.anio}
                                    sumaAsegurada={poliza.sumaAsegurada}
                                    cobertura={poliza.cobertura}
                                    tasa={poliza.tasa}
                                    vigenciaDesde={poliza.vigenciaDesde}
                                    vigenciaHasta={poliza.vigenciaHasta}
                                    prima={poliza.prima}
                                    comision={poliza.comision}
                                    importeComision={poliza.importeComision}
                                    estado={poliza.estado}
                                    anularPoliza={anularPoliza}
                                />
                            </Col>
                        ))
                    )
                }
            </Row>
        </>
    );
}