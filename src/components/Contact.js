import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialIcons from './SocialIcons';
import '../css/contact.css';
import verticalLogo from '../media/uprightLogoNoBackground.svg';

const Contact = () => {
  return (
    <Container id="contact-container" className='make-page'>
      <h2 className='text-center'>Contact</h2>
      <Row>
        <Col className='align-content-center text-center'>
          <img 
            src={verticalLogo} 
            alt="Dmitri Hunter Logo"
            width={"500"}
            height={"500"}
          />
        </Col>
        <Col className='align-content-center'>
          <Row>
            <Col md={2}>
              <label className='m-1 align-self-center'>Email:</label>
            </Col>
            <Col md={4} className='align-content-center'>
              <a className='m-1 text-white' href='mailto:dhcomposemusic@gmail.com'>dhcomposemusic@gmail.com</a>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <label className='m-1 align-self-center'>Social:</label>
            </Col>
            <Col md={10} className='align-content-center'>
              <SocialIcons iconColorClassName={"social-icon-color-white"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;