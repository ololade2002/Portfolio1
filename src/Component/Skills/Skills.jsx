
import './Skills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/img/meter1.svg';
import img2 from '../../assets/img/meter2.svg';
import img3 from '../../assets/img/meter3.svg';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return ( 
        <div className="skills">
  <Container>
      <Row>
          <Col>
          <div className="skills-box">
              <h2>My Skills</h2>
              <p>I'm exceptionally good at everything Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Vitae, quo dicta. Totam dolorem, quidem voluptatibus magni at tempore illum vel.Totam dolorem,
                  quidem voluptatibus magni at tempore illum vel.</p>

                <Carousel className='carousel' responsive={responsive}   infinite={true} >
          <div className="skill-slider">
              <img src={img1} alt="" />
              <p>UI/UX</p>
          </div>
          <div className="skill-slider"> 
          <img src={img2} alt="" />
              <p>Flutter</p>
              </div>
          <div className="skill-slider"> 
          <img src={img3} alt="" />
              <p>Web Development</p>
              </div>
          <div className="skill-slider">
               <img src={img2} alt="" />
              <p>React Native</p></div>
          <div className="skill-slider">
               <img src={img1} alt="" />
              <p>Web Development</p></div>
          </Carousel>;


          </div>
          </Col>
      </Row>
  </Container>
        </div>
     );
}
 
export default Skills;