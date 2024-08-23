import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="outline-primary">Primary</Button>{' '}

      <Cabecalho titulo="Página inicial" sub="aprendendo manipulação"/>
    
      <Link href='/fundamentos'> paginas fundamentos</Link> <br/>
      <Link href='/clientes'> paginas de clientes</Link>

      <Cabecalho titulo="Página final" sub="aprendendo componentes"/>
    </main>
  );
}
