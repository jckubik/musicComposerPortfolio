import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import horizontalLogo from '../media/horizontalLogoNoBackground.svg';
import '../css/header.css';
import SocialIcons from './SocialIcons';

const Header = () => {

  return (
    <header className='header-container sticky-top p-3'>
      <Container id="header-container">
        <Row>
          <Col md={2}>          
            <img 
              src={horizontalLogo} 
              alt="Dmitri Hunter Logo"
              width={"200"}
              height={"100"}
            />
          </Col>
          <Col id="nav-container" md={8}>
            <Nav
              activeKey={"/home"}
            >
              <Nav.Item>
                <Nav.Link className='header-link' href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' eventKey="portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' eventKey="credits">Credits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <SocialIcons iconColorClassName={"social-icon-color-white"} />
        </Row>
      </Container>
    </header>
  );
};

export default Header;