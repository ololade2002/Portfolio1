
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import img1 from '../../assets/img/contact-img.svg';

const Contact = () => {

    return ( 
        <div className="contact">
 <Container fluid>
    <Row className='body  align-items-center '>
        <Col sm={12} md={12} lg={6}>
            <div className="left-c ">
                <img src={img1} className='img-fluid ' alt="" />
            </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
            <div className="right-c  align-items-center">
            <h2>Get In Touch</h2>
            <form action='https://getform.io/f/763e9d97-86ea-4e24-ad58-ee1ff8553bf1' method='POST'
            >
             <Row className=''>
                <Col sm={12} md={6} lg={6} className='' >
                    <input name='first name' type="text" placeholder='First Name' />
                </Col>
                <Col sm={12} md={6} lg={6} className='' >
                <input type="text" name='last name' placeholder='Last Name' />
                </Col>
                <Col sm={12} md={6} lg={6} >
                 <input type="email" name='email' placeholder='Email Address' />
                </Col>
                <Col sm={12} md={6} lg={6} >
                <input type="tel" name='tel' placeholder='Phone' />
                </Col>
                <Col sm={12} md={12} lg={12} >
                    <textarea name='message' placeholder='Message' cols="30" rows="8"></textarea>
                </Col>
                <button className='btn1'>Submit</button>
             </Row>
             </form>
            </div>

        </Col>
    </Row>
 </Container>
        </div>
     );
}
 
export default Contact;