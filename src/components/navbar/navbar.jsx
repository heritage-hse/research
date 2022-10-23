import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hselogo from "../../asserts/images/hse_logo.png";

export const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        {/* <a class="navbar-brand logo" href="index.html"><img src="images/hse_logo.png" alt="logo" style="max-width:50px;"></a>
         */}

        <Navbar.Brand href="https://gorod.hse.ru/" target="_blank">
          <img src={hselogo} alt="HSE" style={{ width: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Исследование" id="basic-nav-dropdown">
              <NavDropdown.Item href="#typology">Типология</NavDropdown.Item>
              <NavDropdown.Item href="#economics">Экономика</NavDropdown.Item>
              <NavDropdown.Item href="#sociology">Социология</NavDropdown.Item>
              <NavDropdown.Item href="#documents">
                Система документов
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#research">Исследование</Nav.Link>
            <Nav.Link href="#typology">Типология</Nav.Link>
            <Nav.Link href="#economics">Экономика</Nav.Link> */}
            <Nav.Link href="#team">Команда</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header id="header">
    //   <nav className="navbar navbar-expand-md navbar-light bg-faded lab-navbar lab-navbar-1">
    //     <div className="container">
    //       <button
    //         className="navbar-toggler navbar-toggler-right"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="toggle-icon">
    //           <i className="fa fa-bars" aria-hidden="true"></i>
    //         </span>
    //       </button>
    //       <a className="navbar-brand logo" href="index.html">
    //         <img src="images/hse_logo.png" alt="logo" style={{maxWidth:'50px'}} />
    //       </a>

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <a data-scroll href="#header" className="nav-link active">
    //               Исследование
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a data-scroll href="#about" className="nav-link">
    //               Проблематика
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a data-scroll href="#portfolio" className="nav-link">
    //               Типология
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a data-scroll href="#priceing" className="nav-link">
    //               Экономика
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a data-scroll href="#tesimonial" className="nav-link">
    //               Команда
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a data-scroll href="#contact" className="nav-link">
    //               Контакты
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-sm-12">
    //         <div className="intro-text">
    //           <h1>СОХРАНЕНИЕ И КАПИТАЛИЗАЦИЯ КУЛЬТУРНОГО НАСЛЕДИЯ</h1>
    //           <p>исследование команды ФГРР НИУ ВШЭ</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};
