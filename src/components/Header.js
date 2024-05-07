import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import horizontalLogo from '../media/horizontalLogoNoBackground.svg';
import '../css/header.css';
import SocialIcons from './SocialIcons';

const Header = () => {

  return (
    <header className='header-container sticky-top p-3'>
      {/* <Container id="header-container">
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
                <Nav.Link className='header-link' href='#topImage-container'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' href='#portfolio-container' eventKey="portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' href='#credits-container' eventKey="credits">Credits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' href='#about-container' eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='header-link' href='#contact-container' eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <SocialIcons iconColorClassName={"social-icon-color-white"} />
        </Row>
      </Container> */}

      <Container id="header-container">
        <Row>
          <Col id="nav-container" >

            <Navbar expand="lg" className="">
              <Container>
              <Navbar.Brand href="#home">
                <img 
                  src={horizontalLogo} 
                  alt="Dmitri Hunter Logo"
                  width={"200"}
                  height={"100"}
                  className='mx-auto'
                />
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <br />
                  <Nav className="me-auto">
                    <Nav.Item>
                      <Nav.Link className='header-link' href='#topImage-container'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className='header-link' href='#portfolio-container' eventKey="portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className='header-link' href='#credits-container' eventKey="credits">Credits</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className='header-link' href='#about-container' eventKey="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className='header-link' href='#contact-container' eventKey="contact">Contact</Nav.Link>
                    </Nav.Item>
                    <SocialIcons iconColorClassName={"social-icon-color-white"} />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;