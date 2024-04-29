import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutPicture from '../media/meetchPlaceholderImage.jpg';
import '../css/about.css';

const About = () => {

  return (
    <Container id="about-container" className='make-page background-image'>
      <h2 className='text-center m-4'>About</h2>
      <Row>
        <Col md={4} className='m-5'>
          <img 
            src={aboutPicture}
            alt='Portrait of Dmitri Hunter'
            height={"400"}
            width={"400"}
            className='m-1'
          />
        </Col>
        <Col md={6} className='d-flex align-items-center m-3'>
          <p className='text-left'>
            Dmitri Hunter completed his film and multimedia music studies at the University of North Carolina School of the Arts, in 2024 under his professors, Chris Heckman and Frazier Smith. While at UNCSA, Dmitri collaborated with numerous filmmakers on short films, documentaries, and a video game. He has composed for almost a decade in various genres and is well-versed in playing piano and saxophone. Dmitri also enjoys exploring musical techniques from other cultures and new sounds and techniques with traditional orchestral instruments.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;