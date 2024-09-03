"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Page({ params }) {
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    apiDisney.get(`character/${params.id}`).then((resultado) => {
      setPersonagem(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney Detalhes">
      <Row className="mt-3">
        <Col md={4}>
          <img src={personagem.imageUrl} />
        </Col>
        <Col>
          <p>
            <b>Nome:</b>
            {personagem.name}
          </p>
        </Col>
      </Row>
    </Pagina>
  );
}
