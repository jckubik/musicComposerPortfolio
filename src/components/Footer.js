import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/footer.css";
import SocialIcons from './SocialIcons';

const Footer = () => {

  function practiceShit() {
    let miArray = ["dog", "hoe", "fuck", { "fuck": "hoes", "get": [ "money", "weed" ] }];

    // let result = miArray[3].get[1] = "drugs";
    miArray = miArray.map(item => {
      if (typeof item === "string") {
        item = item.split("");
        item.splice(2, 1, "$$$");
        item = item.join("");
      }
      return item;
    });

    // console.log(result);
    console.log(miArray);
  }

  practiceShit();

  return (
    <footer className='footer-container'>
      <Container id="footer-container">
        <Row>
          <Col md={7}>
            Dmitri Hunter
          </Col>
          <Col md={5}>
            <SocialIcons iconColorClassName={"social-icon-color-white"} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;