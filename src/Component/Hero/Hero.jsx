import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../assets/img/header-img.svg';
import Header from '../Header/Header';
import {ArrowRightCircle} from 'react-bootstrap-icons';

const Hero = () => {

    return ( 
        <div className="hero ">
        <Container fluid>
            <Header/>
            <Row className=' hero-body align-items-center justify-content-center'>
                <Col sm={12} md={12} lg={6}>
                <div className="left-hero ">
                <h3>Welcome To My Portfolio</h3>
                <h1>Hi! I'm Judy . I'm A UI/UX Designer.</h1>
                <p>I'm a Boston based UI/UX designer who specializes in designing
                    exceptional digital experience.Currently, I'm adesigner at 
                    Nitron focused on designing accessible and human-centered products.
                </p>
                <button><span>Let's Connect  </span> <ArrowRightCircle size={22}/> </button>
                </div>
                </Col>


                <Col className='' sm={12} md={6} lg={6}>
                    <div className="right-hero text-center">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Hero;