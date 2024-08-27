'use client'
import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Pagina from "../components/Pagina";

export default function Fundamentos() {
  // todo componente precisa ser escrito com letra maiscula
 // o container cria um espaçamento na web 
  return (
    <Pagina>
      <Cabecalho />
      <Container> 
        <Alert>Atenção !! preste atenção</Alert>

        <Link href='/'> Pagina inicial</Link>
        <h1>Fundamentos</h1>
        <p >sucesso</p>

        <Cabecalho />
      </Container>
    </Pagina>
  );
}
