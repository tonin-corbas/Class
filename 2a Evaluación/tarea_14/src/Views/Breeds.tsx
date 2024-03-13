import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export type Razas = Raza[]

export interface Raza {
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url?: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names?: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url?: string
  hypoallergenic: number
  reference_image_id?: string
  cat_friendly?: number
  bidability?: number
}

export interface Weight {
  imperial: string
  metric: string
}

const Breeds = () => {
    const [razas, setRazas] = React.useState([] as Razas);

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then((data: Razas) => setRazas(data));
    }, []);

return (
    <Row>
        {razas.map(raza => (
            <Col sm={12} md={6} lg={4} key={raza.id}>
                <Link to={`/razas/${raza.id}`}>
                    <h2>{raza.name}</h2>
                </Link>
            </Col>
        ))}
    </Row>
);
};

export default Breeds;