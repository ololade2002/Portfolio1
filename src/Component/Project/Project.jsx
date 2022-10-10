
import './Project.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import img1 from '../../assets/img/project-img1.png';
import img2 from '../../assets/img/project-img2.png';
import img3 from '../../assets/img/project-img3.png';
import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';

const Project = () => {

    const ProjectData = [
        {
            title:'Travel Landing Page',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet consectetur adipisicing elit. ',
            img:img1
        },
        {
            title:'Fintec Landing Page',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet consectetur adipisicing elit. ',
            img:img2
        },
        {
            title:'Logistics Landing Page',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet consectetur adipisicing elit.',
            img:img3
        },
       
    ]

    return ( 
        <div className="project" id='projects'>
         <Container fluid>
            <Row>
                <Col size={12}>
               
                <h2>Projects I've Worked On</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Minima ullam quasi, placeat, iste expedita quis saepe eius pariatur dolorum, sit voluptas ducimus te
        mporibus architecto! Commodi magni eligendi sequi ex accusantium?</p> 

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                    
                      <Row>
                        {ProjectData.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                 molestias non placeat, deleniti quo adipisci a 
                aliquam, ullam natus illo laudantium vero officia quisquam ipsum 
                consequuntur voluptas, eos sunt at?</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {ProjectData.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            

                </Col>
            </Row>
         </Container>
   
        </div>
     );

}
 
export default Project;