import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/portfolio.css"

const Portfolio = () => {
  
  // <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1819394742&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dahmusicstudio" title="Dmitri Hunter" target="_blank" style="color: #cccccc; text-decoration: none;">Dmitri Hunter</a> · <a href="https://soundcloud.com/dahmusicstudio/sets/film-titles" title="Film Titles" target="_blank" style="color: #cccccc; text-decoration: none;">Film Titles</a></div>

  return (
    <Container id="portfolio-container" className='make-page'>
      <h2 className='text-center'>Portfolio</h2>
      <br />
      <Row className='m-1'>
        {/* <Col md={4}>
          <iframe 
            title='soundCloudPlayer'
            width="100%" 
            height="166" 
            frameborder="yes"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1712717571&show_artwork=false&buying=false&show_playcount=false&show_user=false&color=6041C2&sharing=false&download=false&show_comments=false">
          </iframe>
        </Col> */}
        <Col md={8} className='mx-auto'>
          <iframe 
            title='soundCloudPlaylist'
            width="100%" 
            height="500" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1819394742&color=6041C2&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=false&buying=false&show_playcount=false&&sharing=false&download=false"></iframe>
        </Col>
        {/* <Col md={4}>
          <iframe 
            title='soundCloudPlayer'
            width="100%" 
            height="166" 
            frameborder="yes"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false&buying=false&show_playcount=false&show_user=false&color=6041C2&sharing=false&download=false">
          </iframe>
        </Col> */}
      </Row>
      {/* <Row className='m-1'>
        <Col md={4}>
          <iframe 
            title='soundCloudPlayer'
            width="100%" 
            height="166" 
            frameborder="yes"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false&buying=false&show_playcount=false&show_user=false&color=6041C2&sharing=false&download=false">
          </iframe>
        </Col>
        <Col md={4}>
          <iframe 
            title='soundCloudPlayer'
            width="100%" 
            height="166" 
            frameborder="yes"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false&buying=false&show_playcount=false&show_user=false&color=6041C2&sharing=false&download=false">
          </iframe>
        </Col>
        <Col md={4}>
          <iframe 
            title='soundCloudPlayer'
            width="100%" 
            height="166" 
            frameborder="yes"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&show_artwork=false&buying=false&show_playcount=false&show_user=false&color=6041C2&sharing=false&download=false">
          </iframe>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Portfolio;