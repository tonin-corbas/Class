import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import CatImg from "./CatImage";

export interface RazaDetalles {
    weight: Weight;
    height: Height;
    id: string;
    name: string;
    bred_for?: string;
    breed_group?: string;
    life_span: string;
    temperament?: string;
    origin?: string;
    reference_image_id: string;
    country_code?: string;
    description?: string;
    history?: string;
}

export interface Weight {
    metric: string;
}

export interface Height {
    metric: string;
}

const RazaDetalles = ({ id }: { id: string }) => {
    const [detalleRaza, setDetalleRaza] = useState<RazaDetalles | null>(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
            headers: {
                "x-api-key": "live_ItAjHHjCRJVlDZMEYV3Nt99lI4UEtLhgI1Nfrt09puIKOnBlcM5itU8h7rZg5yrk"
            }
        })
            .then((response) => response.json())
            .then((data: RazaDetalles) => {
                setDetalleRaza(data);
            });
    }, [id]);

    return (
        <div className="container-fluid">
            <h1 className="position-relative">Detalles de la Raza</h1>
            {detalleRaza && (
                <Card className="text-center align-self-baseline" key={detalleRaza.id}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>{detalleRaza.name}</Card.Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>Bred for: {detalleRaza.life_span}</h1>
                            </Col>
                            <Col>
                                <h1>Weight:</h1> ({detalleRaza.weight.metric} kg)
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>Life span:</h1> {detalleRaza.life_span}
                            </Col>
                            <Col>
                                <h1>Temperament:</h1> {detalleRaza.temperament}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>Details:</h1> {detalleRaza.description}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CatImg id={detalleRaza.id} name={detalleRaza.name} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default RazaDetalles;
