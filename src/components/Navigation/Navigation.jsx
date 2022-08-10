
import {Navbar, Container, Nav} from "react-bootstrap";
function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ opacity: 0.8, position: "absolute",width:'100%',top:0}}
      >
        <Container>
          <Navbar.Brand href="#home">START BOOTSTRAP</Navbar.Brand>
          <Nav>
            <Nav.Link href="#signup">SIGN UP</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              LOG IN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation