import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import '../css/socialIcons.css'

const SocialIcons = ({ iconColorClassName, iconHoverColor }) => {

  return (
    <Col md={8} className='icon-container align-content-center'>
      <Row>
        <Col md={2}>
          <a className={`${iconColorClassName} ${iconHoverColor}`} href ="https://www.youtube.com/@thedahmusicstudio29">
            <FontAwesomeIcon icon={faYoutube} size='xl' />
          </a>
        </Col>
        <Col md={2}>
          <a className={`${iconColorClassName} ${iconHoverColor}`} href ="https://www.instagram.com/musicby_dah/">
            <FontAwesomeIcon icon={faInstagram} size='xl' />
          </a>
        </Col>
        <Col md={2}>
          <a className={`${iconColorClassName} ${iconHoverColor}`} href ="https://soundcloud.com/dahmusicstudio?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            <FontAwesomeIcon icon={faSoundcloud} size='xl' />
          </a>
        </Col>
      </Row>
    </Col>
  );
};

export default SocialIcons;