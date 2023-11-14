import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TextLinkExample.css';



function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text><h4>이상욱</h4></Navbar.Text>
          <Navbar.Text href="#home"><h4>로그아웃</h4></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;