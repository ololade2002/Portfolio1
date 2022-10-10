import './Newsletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Newsletter = () => {
    return ( 
        <div className="news">
       <Container className='newsletter-bx'>
        <Row className='align-items-center g-5'>
            <Col sm={12} md={6} lg={6}  >
                <h2>Subscribe to our Newsletter & Never miss 
                    the latest updates
                </h2>
            </Col>
            <Col sm={12} md={6} lg={6} className='bd-inf0' >
                <form  >
                    <div className="new-email-bx">
                    <input className='txt' type="email" placeholder='Email ' />
                    <button type='submit' className="btn2">Submit</button>
                    </div>
                </form>
            </Col>
        </Row>
       </Container>
        </div>
     );
}
 
export default Newsletter;