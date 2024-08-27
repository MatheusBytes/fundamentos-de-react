import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">inicío</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/fundamentos">fundamentos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/objetos">objetos</Nav.Link>
            <Nav.Link href="/array">Array</Nav.Link>
            <Nav.Link href="/nomes">nomes</Nav.Link>
            <Nav.Link href="/numeros">números</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-white text-center p-3">
        <h1 className="page-title">{props.titulo}</h1>
        
      </div>

      <Container>
        {props.children}
      </Container>
    </>
  );
}
