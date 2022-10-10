import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../assets/img/nav-icon1.svg';
import img2 from '../../assets/img/nav-icon2.svg';
import img3 from '../../assets/img/nav-icon3.svg';
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
         <Container>
            <Row className='footer-body'>
                <Col>
                <h2>J <span>|</span> H</h2>
                <div className="social  social-links">
                <a href="linkedin"><img  src={img1} alt="" /></a>
                <a href="fb"><img src={img2} alt="" /></a>
                <a href="ig"><img src={img3} alt="" /></a>    
                </div>
                </Col>
            </Row>
         </Container>
        </div>
     );
}
 
export default Footer;