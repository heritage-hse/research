import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hselogo from "../../../asserts/images/hse_logo.png";

export const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="https://gorod.hse.ru/" target="_blank">
          <img src={hselogo} alt="HSE" style={{ width: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Исследование" id="basic-nav-dropdown">
            <NavDropdown.Item href="/research">Общая информация</NavDropdown.Item>
              <NavDropdown.Item href="/research/typology">Типология</NavDropdown.Item>
              <NavDropdown.Item href="/research/economics">Экономика</NavDropdown.Item>
              <NavDropdown.Item href="/research/sociology">Социология</NavDropdown.Item>
              <NavDropdown.Item href="/research/documents">Система документов</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/research/#team">Команда</Nav.Link>
            <Nav.Link href="/research/#contact">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
