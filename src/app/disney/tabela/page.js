"use client";

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Page() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    apiDisney.get("character").then((resultado) => {
      setPersonagens(resultado.data.data);
    });
  }, []);

  return (
    <Pagina titulo="Disney-tabelas">
      <Table striped bordered hover>
        {personagens.map((item) => (
          
            ))}
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>foto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.imageUrl}</td>
          </tr>
        </tbody>
      </Table>

    </Pagina>
  );
}
