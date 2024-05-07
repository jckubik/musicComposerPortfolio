import Container from 'react-bootstrap/Container';
import '../css/topImage.css';
import { Col, Row } from 'react-bootstrap';

const TopImage = () => {

  return (
    <Container id="topImage-container" className='make-page background-image-pic'>
      <Row>
        <Col>
        <div className='intro-div'>
          <h1 className='text-center'>Dmitri Hunter</h1>
          <p className='text-center secondary-title'>Film | Video Game | Media Composer</p>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopImage;