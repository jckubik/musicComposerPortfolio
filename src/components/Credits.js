import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/credits.css';

const Credits = () => {
  return (
    <Container id="credits-container" className='make-page'>
      <h2 className='text-center'>Credits</h2>

    <Row>
      <Col md={8} className='m-auto'>
        <Row>
          <h3>Video Games</h3>
        </Row>
        <Row className='m-1'>
          <table className='table table-striped table-sm'>
            <tbody>
              <tr>
                <td>Sword of Atlas (2022)</td>
                <td>Platform: Steam</td>
              </tr>
            </tbody>
          </table>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col md={8} className='m-auto'>
        <Row>
          <h3>Short Films</h3>
        </Row>
        <Row className='m-1'>
          <table className='table table-striped table-sm'>
            <tbody>
              <tr>
                <td>Impasse (2023)</td>
                <td>Co-Composer</td>
                <td>Director: Emily Doran</td>
              </tr>
              <tr>
                <td>Hail Mary (2024)</td>
                <td>Composer</td>
                <td>Director: Caleb Jordan</td>
              </tr>
              <tr>
                <td>Applecaplyse (2024)</td>
                <td>Co-Composer</td>
                <td>Director: Minh Ngo</td>
              </tr>
            </tbody>
          </table>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={8} className='m-auto'>
        <Row>
          <h3>Documentary</h3>
        </Row>
        <Row className='m-1'>
          <table className='table table-striped table-sm'>
            <tbody>
              <tr>
                <td>Starting Over (2024)</td>
                <td>Co-Composer</td>
                <td>Director: Yuanzhe Zhu</td>
              </tr>
            </tbody>
          </table>
        </Row>        
      </Col>
    </Row>




    </Container>
  );
}

export default Credits;