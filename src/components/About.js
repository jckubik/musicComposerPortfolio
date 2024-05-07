import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutPicture from '../media/aboutPhoto.png';
import '../css/about.css';

const About = () => {

  return (
    <>
    <Container id="about-container" className='background-image'> 
      <Row>
        <Col md={5} className='background-about-image'>
        </Col>
        <Col md={6} className='d-flex flex-column justify-content-center'>
          <Row>
            <h2 className='text-left m-4'>About</h2>
          </Row>
          <Row>
            <p className='text-left m-3'>
              Dmitri Hunter completed his film and multimedia music studies at the University of North Carolina School of the Arts, in 2024 under his professors, Chris Heckman and Frazier Smith. While at UNCSA, Dmitri collaborated with numerous filmmakers on short films, documentaries, and a video game. He has composed for almost a decade in various genres and is well-versed in playing piano and saxophone. Dmitri also enjoys exploring musical techniques from other cultures and new sounds and techniques with traditional orchestral instruments.
            </p>
          </Row>
        </Col>
      </Row>
      </Container>

{/* <Container id="about-container" className='p-3 background-image'>
      <Row className='mobile-content d-flex flex-column m-5'>
        <Col className=''>
          <Row>
            <img 
              src={aboutPicture}
              alt='Portrait of Dmitri Hunter'
              height={"500"}
              width={"300"}
              className='mx-auto'
            />
          </Row>
        </Col>
        <br />
        <Col md={12} className='d-flex flex-column justify-content-center'>
          <Row>
            <h2 className='text-center m-4'>About</h2>
          </Row>
          <Row>
            <p className='text-center m-3'>
              Dmitri Hunter completed his film and multimedia music studies at the University of North Carolina School of the Arts, in 2024 under his professors, Chris Heckman and Frazier Smith. While at UNCSA, Dmitri collaborated with numerous filmmakers on short films, documentaries, and a video game. He has composed for almost a decade in various genres and is well-versed in playing piano and saxophone. Dmitri also enjoys exploring musical techniques from other cultures and new sounds and techniques with traditional orchestral instruments.
            </p>
          </Row>
        </Col>
      </Row>
    </Container> */}
    </>
  );
};

export default About;