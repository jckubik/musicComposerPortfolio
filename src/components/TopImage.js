import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import topImage from '../media/topImage.png';
import '../css/topImage.css';

const TopImage = () => {

  return (
    <Container id="topImage-container" className='make-page background-image-pic'>
      {/* <img 
        src={topImage}
        alt='Portrait of Dmitri Hunter'
        height={"auto"}
        width={"1200"}
        className='m-5'
      /> */}
    </Container>
  );
};

export default TopImage;