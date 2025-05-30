<<<<<<< HEAD
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import { useState } from 'react';
import './navbar.css';


function NavbarFerremax(){

  const [showDropdown, setShowDropdown] = useState(null);
=======
import React, { useState } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import './navbar.css';

function NavbarFerremax({ isAdmin, isSidebarOpen, toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(null);

>>>>>>> 4815882e3199dc3b47c96d9149d5af4c0b744d91
  const handleMouseEnter = (id) => setShowDropdown(id);
  const handleMouseExit = () => setShowDropdown(null);

  return (
<<<<<<< HEAD
    <Navbar className="custom-navbar">
      <Container className="navbar-container">
        <Nav className="navbar-categorias">
          {[1, 2, 3, 4, 5].map((id) => {
            const titles = [
              "Herramientas de Construcción",
              "Equipos de industria y taller",
              "Aseo y jardín",
              "Insumos y accesorios",
              "Pintura",
            ];
            const items = [
              ["Herramientas de Carpintería", "Herramientas Eléctricas", "Herramientas Inalámbricas"],
              ["Tornos", "Compresores", "Gatos hidráulicos"],
              ["Mangueras", "Cortacésped", "Desmalezadoras"],
              ["Clavos", "Tornillos", "Adhesivos"],
              ["Pintura Interior", "Pintura Exterior"]
            ];
            return (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseExit}
              >
                <NavDropdown
                  title={titles[id - 1]}
                  id={`dropdown${id}`}
                  show={showDropdown === id}
                  onClick={(e) => e.preventDefault()}
                >
                  {items[id - 1].map((text, idx) => (
                    <NavDropdown.Item href="#" key={idx}>{text}</NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">{titles[id - 1]}</NavDropdown.Item>
                </NavDropdown>
              </div>
            );
          })}
          <Nav.Link href="#">Outlet</Nav.Link>
          <Nav.Link href="#">Taladros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
         
=======
    <>
      <Navbar className="custom-navbar">
        <Container className="navbar-container">
          {isAdmin && (
            <button
              className="hamburger"
              onClick={toggleSidebar}
              style={{ zIndex: 1100, position: 'relative' }}
            >
              &#9776;
            </button>
          )}
          <Nav className="navbar-categorias">
            {[1, 2, 3, 4, 5].map((id) => {
              const titles = [
                "Herramientas de Construcción",
                "Equipos de industria y taller",
                "Aseo y jardín",
                "Insumos y accesorios",
                "Pintura",
              ];
              const items = [
                ["Herramientas de Carpintería", "Herramientas Eléctricas", "Herramientas Inalámbricas"],
                ["Tornos", "Compresores", "Gatos hidráulicos"],
                ["Mangueras", "Cortacésped", "Desmalezadoras"],
                ["Clavos", "Tornillos", "Adhesivos"],
                ["Pintura Interior", "Pintura Exterior"]
              ];
              return (
                <div
                  key={id}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseExit}
                >
                  <NavDropdown
                    title={titles[id - 1]}
                    id={`dropdown${id}`}
                    show={showDropdown === id}
                    onClick={(e) => e.preventDefault()}
                  >
                    {items[id - 1].map((text, idx) => (
                      <NavDropdown.Item href="#" key={idx}>{text}</NavDropdown.Item>
                    ))}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">{titles[id - 1]}</NavDropdown.Item>
                  </NavDropdown>
                </div>
              );
            })}
            <Nav.Link href="#">Outlet</Nav.Link>
            <Nav.Link href="#">Taladros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
>>>>>>> 4815882e3199dc3b47c96d9149d5af4c0b744d91

export default NavbarFerremax;