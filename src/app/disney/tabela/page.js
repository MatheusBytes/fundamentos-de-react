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
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {personagens.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td height={30}> <img src={item.imageUrl}/> </td>
          </tr>
        ))}
      </tbody>
    </Table>

    </Pagina>
  );
}
