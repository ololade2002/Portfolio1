import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import img1 from '../../assets/img/nav-icon1.svg';
import img2 from '../../assets/img/nav-icon2.svg';
import img3 from '../../assets/img/nav-icon3.svg';



const Header = () => {


    return ( 
        <Navbar bg="" expand="lg">
        <Container className=''>
          <Navbar.Brand href="#home"> J <span>|</span> H</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
            </Nav>
            <div className="navbar-text">
               <div className="social">
                <a href="linkedin"><img  src={img1} alt="" /></a>
                <a href="fb"><img src={img2} alt="" /></a>
                <a href="ig"><img src={img3} alt="" /></a>
                </div>
                <button><span>Let's Connect</span></button>
            </div>

          </Navbar.Collapse>
         
        </Container>
      </Navbar>
     );
}
 
export default Header;