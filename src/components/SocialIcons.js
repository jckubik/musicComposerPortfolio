import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../css/socialIcons.css'

const SocialIcons = ({ iconColorClassName, iconHoverColor }) => {

  return (
    <Col md={2} className='icon-container align-content-center'>
      <Row>
        <Col md={4}>
          <a className={`${iconColorClassName} ${iconHoverColor}`} href ="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} size='xl' />
          </a>
        </Col>
        <Col md={4}>
          <a className={`${iconColorClassName} ${iconHoverColor}`} href ="https://youtube.com">
            <FontAwesomeIcon icon={faInstagram} size='xl' />
          </a>
        </Col>
      </Row>
    </Col>
  );
};

export default SocialIcons;