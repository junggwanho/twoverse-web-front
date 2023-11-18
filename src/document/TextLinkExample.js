import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TextLinkExample.css';
import Offcanvas from 'react-bootstrap/Offcanvas';



function TextLinkExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text><h4>이상욱</h4></Navbar.Text>
            <Navbar.Text href="#home"><h4>로그아웃</h4></Navbar.Text>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default TextLinkExample;