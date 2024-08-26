'use client'
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {
  return (
    <Pagina titulo='pagina inicial'>
      <Button variant="outline-primary">Primary</Button>{' '}

      <Cabecalho titulo="Página inicial" sub="aprendendo manipulação"/>
    
      <Link href='/fundamentos'> paginas fundamentos</Link> <br/>
      <Link href='/clientes'> paginas de clientes</Link>

      <Cabecalho titulo="Página final" sub="aprendendo componentes"/>
    </Pagina>
  );
}
