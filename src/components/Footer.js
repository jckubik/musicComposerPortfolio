import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/footer.css";
import SocialIcons from './SocialIcons';

const Footer = () => {

  return (
    <footer className='footer-container'>
      <Container id="footer-container">
        <Row className=''>
          <Col md={6} className='m-2'>
            Dmitri Hunter
          </Col>
          <Col md={5} className='m-2'>
            <SocialIcons iconColorClassName={"social-icon-color-white"} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;